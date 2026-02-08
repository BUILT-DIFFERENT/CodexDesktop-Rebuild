use anyhow::{anyhow, Result};
use host_api::{HostError, WorkerRequest, WorkerResponse};
use serde_json::{json, Value};
use std::collections::BTreeSet;
use std::path::Path;
use std::time::{SystemTime, UNIX_EPOCH};
use tokio::fs;
use tokio::process::Command;

pub struct GitWorkerService;

impl GitWorkerService {
    pub async fn handle(request: WorkerRequest) -> WorkerResponse {
        match Self::handle_inner(&request).await {
            Ok(result) => WorkerResponse {
                worker_id: request.worker_id,
                request_id: request.request_id,
                ok: true,
                result: Some(result),
                error: None,
            },
            Err(err) => WorkerResponse {
                worker_id: request.worker_id,
                request_id: request.request_id,
                ok: false,
                result: None,
                error: Some(HostError {
                    code: "git_worker_error".to_string(),
                    message: err.to_string(),
                    details: None,
                }),
            },
        }
    }

    async fn handle_inner(request: &WorkerRequest) -> Result<Value> {
        let cwd = request
            .params
            .get("cwd")
            .and_then(|v| v.as_str())
            .unwrap_or(".");

        match request.method.as_str() {
            "stable-metadata" => {
                let current_branch = current_branch(cwd)
                    .await
                    .unwrap_or_else(|_| "HEAD".to_string());
                let upstream = upstream_branch(cwd).await.ok();
                let ahead = branch_ahead_count(cwd).await.unwrap_or(0);
                let status_lines = status_lines(cwd).await.unwrap_or_default();
                Ok(json!({
                    "currentBranch": current_branch,
                    "upstreamBranch": upstream,
                    "branchAheadCount": ahead,
                    "statusSummary": {
                        "changedCount": status_lines.len(),
                        "lines": status_lines,
                    }
                }))
            }
            "current-branch" => {
                let output = current_branch(cwd).await?;
                Ok(json!({ "branch": output.trim() }))
            }
            "upstream-branch" => {
                let upstream = upstream_branch(cwd).await.ok();
                Ok(json!({ "branch": upstream }))
            }
            "branch-ahead-count" => {
                let count = branch_ahead_count(cwd).await.unwrap_or(0);
                Ok(json!({ "count": count }))
            }
            "default-branch" => {
                let branch = default_branch(cwd)
                    .await
                    .unwrap_or_else(|_| "main".to_string());
                Ok(json!({ "branch": branch }))
            }
            "base-branch" => {
                let base = request
                    .params
                    .get("baseBranch")
                    .or_else(|| request.params.get("base_branch"))
                    .and_then(Value::as_str)
                    .map(ToString::to_string);
                let base = if let Some(base) = base {
                    base
                } else {
                    default_branch(cwd)
                        .await
                        .unwrap_or_else(|_| "main".to_string())
                };
                Ok(json!({ "branch": base }))
            }
            "recent-branches" => {
                let limit = request
                    .params
                    .get("limit")
                    .and_then(Value::as_u64)
                    .unwrap_or(20);
                let output = run_git(
                    cwd,
                    &[
                        "for-each-ref",
                        "--sort=-committerdate",
                        "--format=%(refname:short)\t%(committerdate:iso8601)",
                        "refs/heads",
                    ],
                )
                .await?;
                let items: Vec<Value> = output
                    .lines()
                    .take(limit as usize)
                    .filter(|line| !line.trim().is_empty())
                    .map(|line| {
                        let mut parts = line.splitn(2, '\t');
                        let branch = parts.next().unwrap_or_default().to_string();
                        let date = parts.next().unwrap_or_default().to_string();
                        json!({ "branch": branch, "committerDate": date })
                    })
                    .collect();
                Ok(json!({ "items": items }))
            }
            "branch-changes" => {
                let base = request
                    .params
                    .get("baseBranch")
                    .or_else(|| request.params.get("base_branch"))
                    .and_then(Value::as_str)
                    .map(ToString::to_string);
                let base = if let Some(base) = base {
                    base
                } else {
                    default_branch(cwd)
                        .await
                        .unwrap_or_else(|_| "main".to_string())
                };
                let range = format!("{base}...HEAD");
                let output = run_git(cwd, &["diff", "--name-status", &range]).await?;
                let items: Vec<Value> = output
                    .lines()
                    .filter(|line| !line.trim().is_empty())
                    .map(|line| {
                        let mut parts = line.splitn(2, '\t');
                        let status = parts.next().unwrap_or_default().to_string();
                        let path = parts.next().unwrap_or_default().to_string();
                        json!({ "status": status, "path": path })
                    })
                    .collect();
                Ok(json!({ "base": base, "items": items }))
            }
            "status-summary" => {
                let lines = status_lines(cwd).await?;
                Ok(json!({
                    "changed_count": lines.len(),
                    "lines": lines,
                }))
            }
            "staged-and-unstaged-changes" => {
                let output = run_git(cwd, &["status", "--porcelain"]).await?;
                let items: Vec<Value> = output
                    .lines()
                    .filter(|line| !line.trim().is_empty())
                    .map(|line| {
                        let status = line.get(0..2).unwrap_or("").trim().to_string();
                        let path = line.get(3..).unwrap_or("").trim().to_string();
                        json!({ "status": status, "path": path })
                    })
                    .collect();
                Ok(json!({ "items": items }))
            }
            "untracked-changes" => {
                let output = run_git(cwd, &["ls-files", "--others", "--exclude-standard"]).await?;
                let items: Vec<String> = output
                    .lines()
                    .map(str::trim)
                    .filter(|line| !line.is_empty())
                    .map(ToString::to_string)
                    .collect();
                Ok(json!({ "items": items }))
            }
            "tracked-uncommitted-changes" => {
                let unstaged = run_git(cwd, &["diff", "--name-only"]).await?;
                let staged = run_git(cwd, &["diff", "--cached", "--name-only"]).await?;
                let mut items = BTreeSet::new();
                for line in unstaged.lines().chain(staged.lines()) {
                    let value = line.trim();
                    if !value.is_empty() {
                        items.insert(value.to_string());
                    }
                }
                Ok(json!({ "items": items.into_iter().collect::<Vec<String>>() }))
            }
            "submodule-paths" => {
                let output = run_git_allow_failure(cwd, &["submodule", "status", "--recursive"])
                    .await
                    .unwrap_or_default();
                let items: Vec<String> = output
                    .lines()
                    .filter_map(|line| line.split_whitespace().nth(1))
                    .map(ToString::to_string)
                    .collect();
                Ok(json!({ "items": items }))
            }
            "cat-file" => {
                let object = request
                    .params
                    .get("object")
                    .or_else(|| request.params.get("sha"))
                    .and_then(Value::as_str)
                    .ok_or_else(|| anyhow!("missing object/sha parameter"))?;
                let output = run_git(cwd, &["cat-file", "-p", object]).await?;
                Ok(json!({ "object": object, "contents": output }))
            }
            "index-info" => {
                let output = run_git(cwd, &["ls-files", "-s"]).await?;
                let items: Vec<Value> = output
                    .lines()
                    .filter(|line| !line.trim().is_empty())
                    .map(|line| {
                        let parts: Vec<&str> = line.split_whitespace().collect();
                        json!({
                            "mode": parts.first().copied().unwrap_or_default(),
                            "sha": parts.get(1).copied().unwrap_or_default(),
                            "stage": parts.get(2).copied().unwrap_or_default(),
                            "path": parts.get(3).copied().unwrap_or_default(),
                        })
                    })
                    .collect();
                Ok(json!({ "items": items }))
            }
            "config-value" => {
                let key = request
                    .params
                    .get("key")
                    .and_then(Value::as_str)
                    .ok_or_else(|| anyhow!("missing config key"))?;
                let value = run_git_allow_failure(cwd, &["config", "--get", key]).await;
                Ok(json!({ "key": key, "value": value.map(|item| item.trim().to_string()) }))
            }
            "set-config-value" => {
                let key = request
                    .params
                    .get("key")
                    .and_then(Value::as_str)
                    .ok_or_else(|| anyhow!("missing config key"))?;
                if is_disallowed_git_config_key(key) {
                    return Err(anyhow!("disallowed git config key '{}'", key));
                }
                let value = request
                    .params
                    .get("value")
                    .and_then(Value::as_str)
                    .ok_or_else(|| anyhow!("missing config value"))?;
                run_git(cwd, &["config", key, value]).await?;
                Ok(json!({ "saved": true, "key": key }))
            }
            "create-worktree" => {
                let path_value = request
                    .params
                    .get("path")
                    .or_else(|| request.params.get("worktreePath"))
                    .and_then(Value::as_str)
                    .ok_or_else(|| anyhow!("missing worktree path"))?;
                let branch = request.params.get("branch").and_then(Value::as_str);
                let base = request.params.get("base").and_then(Value::as_str);
                let create_branch = request
                    .params
                    .get("createBranch")
                    .and_then(Value::as_bool)
                    .unwrap_or(false);

                let mut args = vec!["worktree", "add"];
                if create_branch {
                    args.push("-b");
                    args.push(branch.unwrap_or("codex-worktree"));
                }
                args.push(path_value);
                if let Some(value) = if create_branch { base } else { branch.or(base) } {
                    args.push(value);
                }

                run_git(cwd, &args).await?;
                Ok(json!({ "created": true, "path": path_value }))
            }
            "restore-worktree" => {
                let path_value = request
                    .params
                    .get("path")
                    .or_else(|| request.params.get("worktreePath"))
                    .and_then(Value::as_str)
                    .ok_or_else(|| anyhow!("missing worktree path"))?;
                let path_ref = Path::new(path_value);
                if path_ref.exists() {
                    let _ = run_git_allow_failure(path_value, &["status"]).await;
                    Ok(json!({ "restored": true, "path": path_value, "created": false }))
                } else {
                    let branch = request
                        .params
                        .get("branch")
                        .and_then(Value::as_str)
                        .unwrap_or("HEAD");
                    run_git(cwd, &["worktree", "add", path_value, branch]).await?;
                    Ok(json!({ "restored": true, "path": path_value, "created": true }))
                }
            }
            "delete-worktree" => {
                let path_value = request
                    .params
                    .get("path")
                    .or_else(|| request.params.get("worktreePath"))
                    .and_then(Value::as_str)
                    .ok_or_else(|| anyhow!("missing worktree path"))?;
                run_git(cwd, &["worktree", "remove", "--force", path_value]).await?;
                Ok(json!({ "removed": true, "path": path_value }))
            }
            "apply-changes" => {
                let patch_file = if let Some(path_value) =
                    request.params.get("patchFile").and_then(Value::as_str)
                {
                    path_value.to_string()
                } else if let Some(path_value) =
                    request.params.get("patch_path").and_then(Value::as_str)
                {
                    path_value.to_string()
                } else {
                    let patch_text = request
                        .params
                        .get("patchText")
                        .or_else(|| request.params.get("patch"))
                        .and_then(Value::as_str)
                        .ok_or_else(|| anyhow!("missing patch text"))?;
                    write_temp_patch(cwd, patch_text).await?
                };

                let mut args = vec!["apply"];
                if request
                    .params
                    .get("index")
                    .and_then(Value::as_bool)
                    .unwrap_or(false)
                {
                    args.push("--index");
                }
                args.push(&patch_file);
                run_git(cwd, &args).await?;
                Ok(json!({ "applied": true, "patchFile": patch_file }))
            }
            "commit" => {
                let message = request
                    .params
                    .get("message")
                    .and_then(Value::as_str)
                    .unwrap_or("Codex commit");
                if request
                    .params
                    .get("addAll")
                    .and_then(Value::as_bool)
                    .unwrap_or(false)
                {
                    run_git(cwd, &["add", "-A"]).await?;
                }
                let mut args = vec!["commit", "-m", message];
                if request
                    .params
                    .get("allowEmpty")
                    .and_then(Value::as_bool)
                    .unwrap_or(false)
                {
                    args.push("--allow-empty");
                }
                run_git(cwd, &args).await?;
                let commit_ref = run_git(cwd, &["rev-parse", "HEAD"]).await?;
                Ok(json!({ "committed": true, "ref": commit_ref.trim() }))
            }
            "list-worktrees" => {
                let output = run_git(cwd, &["worktree", "list", "--porcelain"]).await?;
                let mut items = Vec::<Value>::new();
                let mut current = json!({});
                for line in output.lines() {
                    if line.trim().is_empty() {
                        if current != json!({}) {
                            items.push(current);
                            current = json!({});
                        }
                        continue;
                    }
                    if let Some(value) = line.strip_prefix("worktree ") {
                        current["path"] = json!(value);
                    } else if let Some(value) = line.strip_prefix("HEAD ") {
                        current["head"] = json!(value);
                    } else if let Some(value) = line.strip_prefix("branch ") {
                        current["branch"] = json!(value.trim_start_matches("refs/heads/"));
                    }
                }
                if current != json!({}) {
                    items.push(current);
                }
                Ok(json!({ "items": items }))
            }
            "codex-worktree" => {
                let output = run_git(cwd, &["worktree", "list", "--porcelain"]).await?;
                let items: Vec<String> = output
                    .lines()
                    .filter_map(|line| line.strip_prefix("worktree "))
                    .map(ToString::to_string)
                    .collect();
                let selected = items
                    .iter()
                    .find(|item| item.contains("codex"))
                    .cloned()
                    .or_else(|| items.first().cloned());
                Ok(json!({ "path": selected }))
            }
            "worktree-snapshot-ref" => {
                let reference = run_git(cwd, &["rev-parse", "HEAD"]).await?;
                Ok(json!({ "ref": reference.trim() }))
            }
            "git-init-repo" => {
                let target = request
                    .params
                    .get("path")
                    .and_then(Value::as_str)
                    .unwrap_or(cwd);
                run_git(".", &["init", target]).await?;
                Ok(json!({ "initialized": true, "path": target }))
            }
            "invalidate-stable-metadata" => Ok(json!({ "invalidated": true })),
            _ => Err(anyhow!(
                "unsupported git worker method '{}'",
                request.method
            )),
        }
    }
}

async fn run_git(cwd: &str, args: &[&str]) -> Result<String> {
    let output = Command::new("git")
        .args(args)
        .current_dir(cwd)
        .output()
        .await?;
    if output.status.success() {
        Ok(String::from_utf8_lossy(&output.stdout).to_string())
    } else {
        let stderr = String::from_utf8_lossy(&output.stderr);
        Err(anyhow::anyhow!("git {:?} failed: {}", args, stderr.trim()))
    }
}

async fn run_git_allow_failure(cwd: &str, args: &[&str]) -> Option<String> {
    run_git(cwd, args).await.ok()
}

async fn current_branch(cwd: &str) -> Result<String> {
    let output = run_git(cwd, &["rev-parse", "--abbrev-ref", "HEAD"]).await?;
    Ok(output.trim().to_string())
}

async fn upstream_branch(cwd: &str) -> Result<String> {
    let output = run_git(
        cwd,
        &[
            "rev-parse",
            "--abbrev-ref",
            "--symbolic-full-name",
            "@{upstream}",
        ],
    )
    .await?;
    Ok(output.trim().to_string())
}

async fn branch_ahead_count(cwd: &str) -> Result<i64> {
    let output = run_git(cwd, &["rev-list", "--count", "@{upstream}..HEAD"]).await?;
    let count = output.trim().parse::<i64>().unwrap_or(0);
    Ok(count)
}

async fn default_branch(cwd: &str) -> Result<String> {
    let output = run_git_allow_failure(cwd, &["symbolic-ref", "refs/remotes/origin/HEAD"]).await;
    let branch = output
        .as_deref()
        .unwrap_or("refs/remotes/origin/main")
        .trim()
        .rsplit('/')
        .next()
        .unwrap_or("main")
        .to_string();
    Ok(branch)
}

fn is_disallowed_git_config_key(key: &str) -> bool {
    let normalized = key.trim().to_ascii_lowercase();
    normalized.is_empty()
        || normalized.chars().any(char::is_whitespace)
        || normalized == "core.hookspath"
        || normalized == "core.sshcommand"
        || normalized == "core.gitproxy"
        || normalized == "credential.helper"
        || normalized.starts_with("credential.helper.")
        || normalized.starts_with("alias.")
        || normalized.starts_with("include.")
        || normalized.starts_with("includeif.")
}

async fn status_lines(cwd: &str) -> Result<Vec<String>> {
    let output = run_git(cwd, &["status", "--short"]).await?;
    Ok(output
        .lines()
        .filter(|line| !line.trim().is_empty())
        .map(ToString::to_string)
        .collect())
}

async fn write_temp_patch(cwd: &str, patch_text: &str) -> Result<String> {
    let now = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_millis();
    let filename = format!("codex-patch-{now}.patch");
    let full_path = Path::new(cwd).join(filename);
    fs::write(&full_path, patch_text).await?;
    Ok(full_path.to_string_lossy().to_string())
}
