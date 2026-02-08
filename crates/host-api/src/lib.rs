use serde::{Deserialize, Serialize};
use serde_json::Value;
use thiserror::Error;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct HostQueryRequest {
    pub method: String,
    #[serde(default)]
    pub params: Value,
    pub request_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct HostMutationRequest {
    pub method: String,
    #[serde(default)]
    pub params: Value,
    pub request_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct HostResponse {
    pub request_id: String,
    pub ok: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub result: Option<Value>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub error: Option<HostError>,
}

impl HostResponse {
    pub fn ok(request_id: impl Into<String>, result: Value) -> Self {
        Self {
            request_id: request_id.into(),
            ok: true,
            result: Some(result),
            error: None,
        }
    }

    pub fn err(
        request_id: impl Into<String>,
        code: impl Into<String>,
        message: impl Into<String>,
    ) -> Self {
        Self {
            request_id: request_id.into(),
            ok: false,
            result: None,
            error: Some(HostError {
                code: code.into(),
                message: message.into(),
                details: None,
            }),
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct HostError {
    pub code: String,
    pub message: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub details: Option<Value>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct HostEvent {
    pub event: String,
    #[serde(default)]
    pub payload: Value,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WorkerRequest {
    pub worker_id: String,
    pub method: String,
    #[serde(default)]
    pub params: Value,
    pub request_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WorkerResponse {
    pub worker_id: String,
    pub request_id: String,
    pub ok: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub result: Option<Value>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub error: Option<HostError>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WorkerEvent {
    pub worker_id: String,
    pub event: String,
    #[serde(default)]
    pub payload: Value,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TerminalSession {
    pub id: String,
    pub cwd: String,
    #[serde(default)]
    pub env: std::collections::BTreeMap<String, String>,
    pub cols: u16,
    pub rows: u16,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AppServerEnvelope {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub id: Option<Value>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub method: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub params: Option<Value>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub result: Option<Value>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub error: Option<Value>,
}

#[derive(Debug, Clone, Copy, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum WindowType {
    Primary,
    Hud,
    Secondary,
    Overlay,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(tag = "kind", content = "value", rename_all = "snake_case")]
pub enum DeepLinkRoute {
    Settings,
    Skills,
    Automations,
    NewThread,
    LocalConversation(String),
    Unknown(String),
}

#[derive(Debug, Error)]
pub enum DeepLinkParseError {
    #[error("invalid deep link scheme: {0}")]
    InvalidScheme(String),
}

pub fn parse_deep_link(raw: &str) -> Result<DeepLinkRoute, DeepLinkParseError> {
    let lower = raw.to_ascii_lowercase();
    if !lower.starts_with("codex://") {
        return Err(DeepLinkParseError::InvalidScheme(raw.to_string()));
    }
    let path = raw.trim_start_matches("codex://");
    if path.eq_ignore_ascii_case("settings") {
        return Ok(DeepLinkRoute::Settings);
    }
    if path.eq_ignore_ascii_case("skills") {
        return Ok(DeepLinkRoute::Skills);
    }
    if path.eq_ignore_ascii_case("automations") {
        return Ok(DeepLinkRoute::Automations);
    }
    if path.eq_ignore_ascii_case("threads/new") {
        return Ok(DeepLinkRoute::NewThread);
    }
    if let Some(conversation_id) = path.strip_prefix("local/") {
        return Ok(DeepLinkRoute::LocalConversation(
            conversation_id.to_string(),
        ));
    }
    Ok(DeepLinkRoute::Unknown(path.to_string()))
}

pub const QUERY_METHODS: &[&str] = &[
    "account-info",
    "active-workspace-roots",
    "child-processes",
    "codex-home",
    "extension-info",
    "find-files",
    "get-configuration",
    "get-global-state",
    "gh-cli-status",
    "gh-pr-status",
    "git-origins",
    "has-custom-cli-executable",
    "ide-context",
    "inbox-items",
    "is-copilot-api-available",
    "list-automations",
    "list-pending-automation-run-threads",
    "list-pinned-threads",
    "local-environment",
    "local-environments",
    "locale-info",
    "open-in-targets",
    "os-info",
    "paths-exist",
    "pending-automation-runs",
    "read-file",
    "read-file-binary",
    "read-git-file-binary",
    "recommended-skills",
    "third-party-notices",
    "workspace-root-options",
];

pub const MUTATION_METHODS: &[&str] = &[
    "add-workspace-root-option",
    "apply-patch",
    "automation-create",
    "automation-delete",
    "automation-run-delete",
    "automation-run-now",
    "automation-update",
    "generate-pull-request-message",
    "generate-thread-title",
    "gh-pr-create",
    "git-checkout-branch",
    "git-create-branch",
    "git-push",
    "install-recommended-skill",
    "local-environment-config-save",
    "open-file",
    "remove-skill",
    "set-configuration",
    "set-global-state",
    "set-preferred-app",
    "terminal-create",
    "terminal-attach",
    "terminal-write",
    "terminal-resize",
    "terminal-close",
];

pub const GIT_WORKER_METHODS: &[&str] = &[
    "stable-metadata",
    "current-branch",
    "upstream-branch",
    "branch-ahead-count",
    "default-branch",
    "base-branch",
    "recent-branches",
    "branch-changes",
    "status-summary",
    "staged-and-unstaged-changes",
    "untracked-changes",
    "tracked-uncommitted-changes",
    "submodule-paths",
    "cat-file",
    "index-info",
    "config-value",
    "set-config-value",
    "create-worktree",
    "restore-worktree",
    "delete-worktree",
    "apply-changes",
    "commit",
    "list-worktrees",
    "codex-worktree",
    "worktree-snapshot-ref",
    "git-init-repo",
    "invalidate-stable-metadata",
];

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DispatchRegistry {
    pub query_methods: Vec<String>,
    pub mutation_methods: Vec<String>,
    pub git_worker_methods: Vec<String>,
}

pub fn dispatch_registry() -> DispatchRegistry {
    DispatchRegistry {
        query_methods: QUERY_METHODS
            .iter()
            .map(|value| (*value).to_string())
            .collect(),
        mutation_methods: MUTATION_METHODS
            .iter()
            .map(|value| (*value).to_string())
            .collect(),
        git_worker_methods: GIT_WORKER_METHODS
            .iter()
            .map(|value| (*value).to_string())
            .collect(),
    }
}

pub fn is_known_query_method(method: &str) -> bool {
    QUERY_METHODS.contains(&method)
}

pub fn is_known_mutation_method(method: &str) -> bool {
    MUTATION_METHODS.contains(&method)
}

pub fn is_known_git_worker_method(method: &str) -> bool {
    GIT_WORKER_METHODS.contains(&method)
}
