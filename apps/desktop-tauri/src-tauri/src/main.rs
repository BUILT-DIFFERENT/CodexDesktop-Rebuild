#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use app_server_bridge::AppServerBridge;
use git_worker::GitWorkerService;
use host_api::{
    dispatch_registry, is_known_mutation_method, is_known_query_method, parse_deep_link,
    DeepLinkRoute, HostMutationRequest, HostQueryRequest, HostResponse, WindowType, WorkerRequest,
};
use serde::Serialize;
use serde_json::{json, Value};
use state::StateStore;
use std::collections::{HashMap, HashSet};
use std::path::{Path, PathBuf};
use std::sync::Arc;
use std::time::Duration;
use tauri::{Emitter, Manager, State, WebviewUrl, WebviewWindow};
use terminal::TerminalManager;
use uuid::Uuid;

const APP_CHANNEL_FOR_VIEW: &str = "codex_desktop:message-for-view";
const READ_FILE_ALLOWLIST_ENV: &str = "CODEX_ALLOWED_READ_ROOTS";
const LOCAL_ENV_ALLOWLIST: [&str; 6] = ["SHELL", "ComSpec", "HOME", "USERPROFILE", "PATH", "TERM"];

#[derive(Clone)]
struct RuntimeState {
    build_flavor: String,
    sentry: SentryInitOptions,
    store: StateStore,
    terminal: TerminalManager,
    allowed_read_roots: Vec<PathBuf>,
    app_server: Option<Arc<AppServerBridge>>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct SentryInitOptions {
    codex_app_session_id: String,
}

#[derive(Debug, Clone, Serialize)]
struct QueryResultEnvelope {
    response: HostResponse,
}

#[derive(Debug, Clone, Serialize)]
struct MutationResultEnvelope {
    response: HostResponse,
}

fn parse_jsonrpc_error(request_id: String, error: &Value) -> HostResponse {
    let code = error
        .get("code")
        .and_then(|value| {
            if let Some(number) = value.as_i64() {
                return Some(format!("app_server_{number}"));
            }
            value.as_str().map(|item| item.to_string())
        })
        .unwrap_or_else(|| "app_server_error".to_string());
    let message = error
        .get("message")
        .and_then(Value::as_str)
        .unwrap_or("app-server request failed")
        .to_string();
    HostResponse {
        request_id,
        ok: false,
        result: None,
        error: Some(host_api::HostError {
            code,
            message,
            details: Some(error.clone()),
        }),
    }
}

fn map_app_server_envelope(request_id: String, envelope: Value) -> HostResponse {
    if let Some(error) = envelope.get("error") {
        return parse_jsonrpc_error(request_id, error);
    }
    HostResponse::ok(
        request_id,
        envelope.get("result").cloned().unwrap_or_else(|| json!({})),
    )
}

fn jsonrpc_error_response(request_id: Value, code: &str, message: impl Into<String>) -> Value {
    json!({
        "jsonrpc": "2.0",
        "id": request_id,
        "error": {
            "code": code,
            "message": message.into()
        }
    })
}

fn collect_local_environment() -> HashMap<String, String> {
    let mut env = HashMap::new();
    for key in LOCAL_ENV_ALLOWLIST {
        if let Some(value) = std::env::var_os(key) {
            env.insert(key.to_string(), value.to_string_lossy().to_string());
        }
    }
    env
}

fn resolve_allowed_read_roots() -> Vec<PathBuf> {
    let mut configured_roots = std::env::var_os(READ_FILE_ALLOWLIST_ENV)
        .map(|value| std::env::split_paths(&value).collect::<Vec<PathBuf>>())
        .unwrap_or_default();

    if configured_roots.is_empty() {
        if let Ok(cwd) = std::env::current_dir() {
            configured_roots.push(cwd);
        }
    }

    let mut seen = HashSet::new();
    configured_roots
        .into_iter()
        .filter_map(|root| std::fs::canonicalize(root).ok())
        .filter(|root| seen.insert(root.clone()))
        .collect()
}

fn is_within_allowed_roots(candidate: &Path, allowed_roots: &[PathBuf]) -> bool {
    allowed_roots.iter().any(|root| candidate.starts_with(root))
}

async fn forward_host_request(
    state: &RuntimeState,
    method: &str,
    params: Value,
    request_id: String,
) -> HostResponse {
    let Some(bridge) = &state.app_server else {
        return HostResponse::err(
            request_id,
            "app_server_unavailable",
            format!("app-server bridge is not available for method '{method}'"),
        );
    };
    match bridge
        .request(
            method,
            params,
            Duration::from_secs(120),
            Some(Value::String(request_id.clone())),
        )
        .await
    {
        Ok(envelope) => map_app_server_envelope(request_id, envelope),
        Err(err) => HostResponse::err(request_id, "app_server_error", err.to_string()),
    }
}

#[tauri::command]
async fn bridge_handle_query(
    state: State<'_, RuntimeState>,
    request: HostQueryRequest,
) -> Result<QueryResultEnvelope, String> {
    let response = match request.method.as_str() {
        "get-configuration" => match state.store.get_json("configuration").await {
            Ok(value) => HostResponse::ok(request.request_id, value),
            Err(err) => HostResponse::err(request.request_id, "state_error", err.to_string()),
        },
        "get-global-state" => match state.store.get_json("global-state").await {
            Ok(value) => HostResponse::ok(request.request_id, value),
            Err(err) => HostResponse::err(request.request_id, "state_error", err.to_string()),
        },
        "dispatch-registry" => match serde_json::to_value(dispatch_registry()) {
            Ok(value) => HostResponse::ok(request.request_id, value),
            Err(err) => {
                HostResponse::err(request.request_id, "serialization_error", err.to_string())
            }
        },
        "os-info" => HostResponse::ok(
            request.request_id,
            json!({
              "os": std::env::consts::OS,
              "arch": std::env::consts::ARCH,
              "family": std::env::consts::FAMILY
            }),
        ),
        "local-environment" => {
            let cwd = std::env::current_dir().unwrap_or_else(|_| PathBuf::from("."));
            let env = collect_local_environment();
            let shell = env
                .get("SHELL")
                .cloned()
                .or_else(|| env.get("ComSpec").cloned());
            HostResponse::ok(
                request.request_id,
                json!({
                  "cwd": cwd.to_string_lossy().to_string(),
                  "env": env,
                  "shell": shell,
                }),
            )
        }
        "paths-exist" => {
            let paths = request
                .params
                .get("paths")
                .and_then(Value::as_array)
                .cloned()
                .unwrap_or_default();
            let items: Vec<Value> = paths
                .into_iter()
                .filter_map(|p| p.as_str().map(ToString::to_string))
                .map(|p| {
                    json!({
                      "path": p,
                      "exists": PathBuf::from(&p).exists()
                    })
                })
                .collect();
            HostResponse::ok(request.request_id, json!({ "items": items }))
        }
        "read-file" => {
            let path = request
                .params
                .get("path")
                .and_then(Value::as_str)
                .unwrap_or_default();
            if path.trim().is_empty() {
                return Ok(QueryResultEnvelope {
                    response: HostResponse::err(
                        request.request_id,
                        "invalid_path",
                        "path is required",
                    ),
                });
            }

            let canonical_path = match tokio::fs::canonicalize(path).await {
                Ok(path) => path,
                Err(_) => {
                    return Ok(QueryResultEnvelope {
                        response: HostResponse::err(
                            request.request_id,
                            "io_error",
                            "failed to read file",
                        ),
                    });
                }
            };

            if !is_within_allowed_roots(&canonical_path, &state.allowed_read_roots) {
                return Ok(QueryResultEnvelope {
                    response: HostResponse::err(
                        request.request_id,
                        "path_not_allowed",
                        "requested path is outside configured allowed roots",
                    ),
                });
            }

            match tokio::fs::read_to_string(&canonical_path).await {
                Ok(contents) => HostResponse::ok(
                    request.request_id,
                    json!({
                      "path": canonical_path.to_string_lossy().to_string(),
                      "contents": contents
                    }),
                ),
                Err(_) => HostResponse::err(request.request_id, "io_error", "failed to read file"),
            }
        }
        _ if is_known_query_method(&request.method) => {
            forward_host_request(&state, &request.method, request.params, request.request_id).await
        }
        _ => HostResponse::err(
            request.request_id,
            "query_method_unknown",
            format!("query method '{}' is not registered", request.method),
        ),
    };
    Ok(QueryResultEnvelope { response })
}

#[tauri::command]
async fn bridge_handle_mutation(
    state: State<'_, RuntimeState>,
    request: HostMutationRequest,
) -> Result<MutationResultEnvelope, String> {
    let response = match request.method.as_str() {
        "set-configuration" => {
            let value = request
                .params
                .get("value")
                .cloned()
                .unwrap_or_else(|| json!({}));
            match state.store.set_json("configuration", &value).await {
                Ok(()) => HostResponse::ok(request.request_id, json!({ "saved": true })),
                Err(err) => HostResponse::err(request.request_id, "state_error", err.to_string()),
            }
        }
        "set-global-state" => {
            let value = request
                .params
                .get("value")
                .cloned()
                .unwrap_or_else(|| json!({}));
            match state.store.set_json("global-state", &value).await {
                Ok(()) => HostResponse::ok(request.request_id, json!({ "saved": true })),
                Err(err) => HostResponse::err(request.request_id, "state_error", err.to_string()),
            }
        }
        "terminal-create" => {
            let cwd = request
                .params
                .get("cwd")
                .and_then(Value::as_str)
                .unwrap_or(".")
                .to_string();
            let cols = request
                .params
                .get("cols")
                .and_then(Value::as_u64)
                .unwrap_or(120) as u16;
            let rows = request
                .params
                .get("rows")
                .and_then(Value::as_u64)
                .unwrap_or(30) as u16;
            let env = request
                .params
                .get("env")
                .and_then(Value::as_object)
                .map(|obj| {
                    obj.iter()
                        .map(|(k, v)| (k.clone(), v.as_str().unwrap_or_default().to_string()))
                        .collect::<HashMap<String, String>>()
                })
                .unwrap_or_default();
            match state.terminal.create(cwd, env, cols, rows).await {
                Ok(session) => HostResponse::ok(
                    request.request_id,
                    serde_json::to_value(session).unwrap_or_else(|_| json!({})),
                ),
                Err(err) => {
                    HostResponse::err(request.request_id, "terminal_error", err.to_string())
                }
            }
        }
        "terminal-attach" => {
            let id = request
                .params
                .get("id")
                .and_then(Value::as_str)
                .unwrap_or_default();
            match state.terminal.attach(id).await {
                Ok(payload) => HostResponse::ok(request.request_id, payload),
                Err(err) => {
                    HostResponse::err(request.request_id, "terminal_error", err.to_string())
                }
            }
        }
        "terminal-write" => {
            let id = request
                .params
                .get("id")
                .and_then(Value::as_str)
                .unwrap_or_default();
            let text = request
                .params
                .get("text")
                .and_then(Value::as_str)
                .unwrap_or_default();
            match state.terminal.write(id, text).await {
                Ok(()) => HostResponse::ok(request.request_id, json!({ "ok": true })),
                Err(err) => {
                    HostResponse::err(request.request_id, "terminal_error", err.to_string())
                }
            }
        }
        "terminal-resize" => {
            let id = request
                .params
                .get("id")
                .and_then(Value::as_str)
                .unwrap_or_default();
            let cols = request
                .params
                .get("cols")
                .and_then(Value::as_u64)
                .unwrap_or(120) as u16;
            let rows = request
                .params
                .get("rows")
                .and_then(Value::as_u64)
                .unwrap_or(30) as u16;
            match state.terminal.resize(id, cols, rows).await {
                Ok(()) => HostResponse::ok(request.request_id, json!({ "ok": true })),
                Err(err) => {
                    HostResponse::err(request.request_id, "terminal_error", err.to_string())
                }
            }
        }
        "terminal-close" => {
            let id = request
                .params
                .get("id")
                .and_then(Value::as_str)
                .unwrap_or_default();
            match state.terminal.close(id).await {
                Ok(()) => HostResponse::ok(request.request_id, json!({ "ok": true })),
                Err(err) => {
                    HostResponse::err(request.request_id, "terminal_error", err.to_string())
                }
            }
        }
        _ if is_known_mutation_method(&request.method) => {
            forward_host_request(&state, &request.method, request.params, request.request_id).await
        }
        _ => HostResponse::err(
            request.request_id,
            "mutation_method_unknown",
            format!("mutation method '{}' is not registered", request.method),
        ),
    };
    Ok(MutationResultEnvelope { response })
}

#[tauri::command]
async fn bridge_show_context_menu(_payload: Value) -> Result<(), String> {
    Ok(())
}

#[tauri::command]
async fn bridge_send_message_from_view(
    window: WebviewWindow,
    state: State<'_, RuntimeState>,
    payload: Value,
) -> Result<(), String> {
    let request = payload
        .get("request")
        .cloned()
        .unwrap_or_else(|| payload.clone());
    let method = request
        .get("method")
        .and_then(Value::as_str)
        .map(ToString::to_string)
        .or_else(|| {
            payload
                .get("method")
                .and_then(Value::as_str)
                .map(ToString::to_string)
        });
    let request_id = request
        .get("id")
        .cloned()
        .or_else(|| request.get("request_id").cloned())
        .or_else(|| payload.get("id").cloned())
        .unwrap_or_else(|| Value::String(Uuid::new_v4().to_string()));
    let params = request
        .get("params")
        .cloned()
        .or_else(|| payload.get("params").cloned())
        .unwrap_or_else(|| json!({}));

    if let Some(method) = method {
        if !is_known_query_method(&method) && !is_known_mutation_method(&method) {
            let response = jsonrpc_error_response(
                request_id,
                "unknown_method",
                format!("method '{method}' is not registered"),
            );
            return window
                .emit(APP_CHANNEL_FOR_VIEW, response)
                .map_err(|err| err.to_string());
        }
        let response = if let Some(bridge) = &state.app_server {
            match bridge
                .request(
                    &method,
                    params,
                    Duration::from_secs(120),
                    Some(request_id.clone()),
                )
                .await
            {
                Ok(value) => value,
                Err(err) => jsonrpc_error_response(request_id, "app_server_error", err.to_string()),
            }
        } else {
            jsonrpc_error_response(
                request_id,
                "app_server_unavailable",
                "app-server bridge is unavailable",
            )
        };
        window
            .emit(APP_CHANNEL_FOR_VIEW, response)
            .map_err(|err| err.to_string())
    } else {
        let response =
            jsonrpc_error_response(request_id, "missing_method", "request method is required");
        window
            .emit(APP_CHANNEL_FOR_VIEW, response)
            .map_err(|err| err.to_string())
    }
}

#[tauri::command]
async fn bridge_send_worker_message_from_view(
    window: WebviewWindow,
    worker_id: String,
    payload: Value,
) -> Result<(), String> {
    let request_id = payload
        .pointer("/request/id")
        .or_else(|| payload.get("id"))
        .and_then(Value::as_str)
        .unwrap_or("unknown")
        .to_string();
    let method = payload
        .pointer("/request/method")
        .or_else(|| payload.get("method"))
        .and_then(Value::as_str)
        .unwrap_or("unknown")
        .to_string();
    let params = payload
        .pointer("/request/params")
        .or_else(|| payload.get("params"))
        .cloned()
        .unwrap_or_else(|| json!({}));

    let request = WorkerRequest {
        worker_id: worker_id.clone(),
        method,
        params,
        request_id,
    };
    let response = if worker_id == "git" {
        GitWorkerService::handle(request).await
    } else {
        host_api::WorkerResponse {
            worker_id,
            request_id: request.request_id,
            ok: false,
            result: None,
            error: Some(host_api::HostError {
                code: "worker_not_supported".to_string(),
                message: "only git worker is currently wired in tauri rewrite".to_string(),
                details: None,
            }),
        }
    };
    let channel = format!("codex_desktop:worker:{}:for-view", response.worker_id);
    window
        .emit(&channel, response)
        .map_err(|err| err.to_string())
}

#[tauri::command]
fn bridge_get_sentry_init_options(state: State<'_, RuntimeState>) -> SentryInitOptions {
    state.sentry.clone()
}

#[tauri::command]
fn bridge_get_app_session_id(state: State<'_, RuntimeState>) -> String {
    state.sentry.codex_app_session_id.clone()
}

#[tauri::command]
fn bridge_get_build_flavor(state: State<'_, RuntimeState>) -> String {
    state.build_flavor.clone()
}

#[tauri::command]
fn bridge_trigger_sentry_test() -> Result<(), String> {
    Err("intentional sentry test error trigger from tauri host".to_string())
}

#[tauri::command]
fn bridge_parse_deep_link(raw: String) -> Result<DeepLinkRoute, String> {
    parse_deep_link(&raw).map_err(|err| err.to_string())
}

#[tauri::command]
fn bridge_create_window(app: tauri::AppHandle, window_type: WindowType) -> Result<String, String> {
    let label = match window_type {
        WindowType::Primary => "main",
        WindowType::Hud => "hud",
        WindowType::Secondary => "secondary",
        WindowType::Overlay => "overlay",
    };
    if app.get_webview_window(label).is_none() {
        create_window(
            &app,
            label,
            window_type,
            app.state::<RuntimeState>().build_flavor.clone(),
            app.state::<RuntimeState>()
                .sentry
                .codex_app_session_id
                .clone(),
        )
        .map_err(|err| err.to_string())?;
    }
    Ok(label.to_string())
}

fn create_window(
    app: &tauri::AppHandle,
    label: &str,
    window_type: WindowType,
    build_flavor: String,
    session_id: String,
) -> tauri::Result<WebviewWindow> {
    let script = electron_bridge_init_script(window_type, &build_flavor, &session_id);
    let title = match window_type {
        WindowType::Primary => "Codex",
        WindowType::Hud => "Codex HUD",
        WindowType::Secondary => "Codex Secondary",
        WindowType::Overlay => "Codex Overlay",
    };
    tauri::WebviewWindowBuilder::new(app, label, WebviewUrl::App("index.html".into()))
        .title(title)
        .inner_size(1280.0, 900.0)
        .visible(true)
        .initialization_script(&script)
        .build()
}

fn electron_bridge_init_script(
    window_type: WindowType,
    build_flavor: &str,
    session_id: &str,
) -> String {
    let window_type_str = match window_type {
        WindowType::Primary => "electron",
        WindowType::Hud => "hud",
        WindowType::Secondary => "electron",
        WindowType::Overlay => "electron",
    };
    let build_flavor_json =
        serde_json::to_string(build_flavor).unwrap_or_else(|_| "\"\"".to_string());
    let session_id_json = serde_json::to_string(session_id).unwrap_or_else(|_| "\"\"".to_string());
    include_str!("../../bridge/electronBridgeCompat.js")
        .replace("__WINDOW_TYPE__", window_type_str)
        .replace("__BUILD_FLAVOR__", &build_flavor_json)
        .replace("__APP_SESSION_ID__", &session_id_json)
}

fn codex_cli_candidate_paths() -> Vec<PathBuf> {
    let mut candidates = Vec::<PathBuf>::new();
    if let Ok(path) = std::env::var("CODEX_CLI_PATH") {
        candidates.push(PathBuf::from(path));
    }
    if let Ok(current_dir) = std::env::current_dir() {
        for ancestor in current_dir.ancestors() {
            #[cfg(target_os = "windows")]
            candidates.push(
                ancestor
                    .join("node_modules")
                    .join("@cometix")
                    .join("codex")
                    .join("vendor")
                    .join("x86_64-pc-windows-msvc")
                    .join("codex")
                    .join("codex.exe"),
            );
            #[cfg(target_os = "linux")]
            candidates.push(
                ancestor
                    .join("node_modules")
                    .join("@cometix")
                    .join("codex")
                    .join("vendor")
                    .join("x86_64-unknown-linux-gnu")
                    .join("codex")
                    .join("codex"),
            );
            #[cfg(target_os = "macos")]
            {
                candidates.push(
                    ancestor
                        .join("node_modules")
                        .join("@cometix")
                        .join("codex")
                        .join("vendor")
                        .join("x86_64-apple-darwin")
                        .join("codex")
                        .join("codex"),
                );
                candidates.push(
                    ancestor
                        .join("node_modules")
                        .join("@cometix")
                        .join("codex")
                        .join("vendor")
                        .join("aarch64-apple-darwin")
                        .join("codex")
                        .join("codex"),
                );
            }
        }
    }
    candidates
}

fn resolve_codex_cli_path() -> Option<PathBuf> {
    codex_cli_candidate_paths()
        .into_iter()
        .find(|path| path.exists() && path.is_file())
}

async fn maybe_start_app_server_bridge() -> Option<Arc<AppServerBridge>> {
    let Some(cli_path) = resolve_codex_cli_path() else {
        eprintln!("[tauri-rewrite] app-server disabled: failed to resolve codex cli path");
        return None;
    };
    match AppServerBridge::spawn(Path::new(&cli_path), &[]).await {
        Ok(bridge) => Some(Arc::new(bridge)),
        Err(err) => {
            eprintln!("[tauri-rewrite] app-server disabled: {err}");
            None
        }
    }
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let build_flavor = std::env::var("BUILD_FLAVOR").unwrap_or_else(|_| "tauri-dev".to_string());
    let session_id = Uuid::new_v4().to_string();
    let app_server = maybe_start_app_server_bridge().await;
    let allowed_read_roots = resolve_allowed_read_roots();

    let data_dir = dirs::data_local_dir()
        .unwrap_or_else(|| PathBuf::from("."))
        .join("codex-tauri-rewrite");
    let store = StateStore::new(data_dir).await?;

    let runtime_state = RuntimeState {
        build_flavor,
        sentry: SentryInitOptions {
            codex_app_session_id: session_id,
        },
        store,
        terminal: TerminalManager::default(),
        allowed_read_roots,
        app_server,
    };

    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .manage(runtime_state.clone())
        .invoke_handler(tauri::generate_handler![
            bridge_handle_query,
            bridge_handle_mutation,
            bridge_show_context_menu,
            bridge_send_message_from_view,
            bridge_send_worker_message_from_view,
            bridge_get_sentry_init_options,
            bridge_get_app_session_id,
            bridge_get_build_flavor,
            bridge_trigger_sentry_test,
            bridge_parse_deep_link,
            bridge_create_window
        ])
        .setup(move |app| {
            create_window(
                app.handle(),
                "main",
                WindowType::Primary,
                runtime_state.build_flavor.clone(),
                runtime_state.sentry.codex_app_session_id.clone(),
            )?;

            if let Some(bridge) = runtime_state.app_server.clone() {
                let app_handle = app.handle().clone();
                tauri::async_runtime::spawn(async move {
                    let mut notifications = bridge.subscribe_notifications();
                    while let Ok(notification) = notifications.recv().await {
                        let _ = app_handle.emit(APP_CHANNEL_FOR_VIEW, notification);
                    }
                });
            }

            Ok(())
        })
        .run(tauri::generate_context!())?;
    Ok(())
}
