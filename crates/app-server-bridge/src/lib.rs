use anyhow::{anyhow, Context, Result};
use serde_json::{json, Value};
use std::collections::HashMap;
use std::path::Path;
use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::Arc;
use std::time::Duration;
use tokio::io::{AsyncBufReadExt, AsyncWriteExt, BufReader};
use tokio::process::{Child, ChildStdin, Command};
use tokio::sync::{broadcast, oneshot, Mutex};
use tokio::time::timeout;
use tracing::{debug, error, info, warn};

pub struct AppServerBridge {
    stdin: Arc<Mutex<ChildStdin>>,
    pending: Arc<Mutex<HashMap<String, oneshot::Sender<Value>>>>,
    notifications: broadcast::Sender<Value>,
    next_id: AtomicU64,
    child: Arc<Mutex<Child>>,
}

impl AppServerBridge {
    pub async fn spawn(cli_path: &Path, extra_args: &[&str]) -> Result<Self> {
        let mut cmd = Command::new(cli_path);
        cmd.arg("app-server");
        cmd.arg("--analytics-default-enabled");
        for arg in extra_args {
            cmd.arg(arg);
        }
        cmd.stdin(std::process::Stdio::piped());
        cmd.stdout(std::process::Stdio::piped());
        cmd.stderr(std::process::Stdio::piped());

        let mut child = cmd
            .spawn()
            .with_context(|| format!("failed to spawn app-server from {}", cli_path.display()))?;
        let stdin = child
            .stdin
            .take()
            .ok_or_else(|| anyhow!("failed to capture app-server stdin"))?;
        let stdout = child
            .stdout
            .take()
            .ok_or_else(|| anyhow!("failed to capture app-server stdout"))?;
        let stderr = child
            .stderr
            .take()
            .ok_or_else(|| anyhow!("failed to capture app-server stderr"))?;

        let stdin = Arc::new(Mutex::new(stdin));
        let pending: Arc<Mutex<HashMap<String, oneshot::Sender<Value>>>> =
            Arc::new(Mutex::new(HashMap::new()));
        let (notifications, _) = broadcast::channel(256);

        let pending_clone = Arc::clone(&pending);
        let notifications_clone = notifications.clone();
        tokio::spawn(async move {
            let reader = BufReader::new(stdout);
            let mut lines = reader.lines();
            while let Ok(Some(line)) = lines.next_line().await {
                if line.trim().is_empty() {
                    continue;
                }
                match serde_json::from_str::<Value>(&line) {
                    Ok(value) => {
                        if let Some(id_key) = jsonrpc_id_to_key(value.get("id")) {
                            if let Some(tx) = pending_clone.lock().await.remove(&id_key) {
                                let _ = tx.send(value);
                                continue;
                            }
                        }
                        let _ = notifications_clone.send(value);
                    }
                    Err(err) => {
                        warn!("failed to parse app-server output as json: {err}; raw={line}")
                    }
                }
            }
            error!("app-server stdout stream ended");
        });

        tokio::spawn(async move {
            let reader = BufReader::new(stderr);
            let mut lines = reader.lines();
            while let Ok(Some(line)) = lines.next_line().await {
                warn!("app-server stderr: {line}");
            }
        });

        let bridge = Self {
            stdin,
            pending,
            notifications,
            next_id: AtomicU64::new(1),
            child: Arc::new(Mutex::new(child)),
        };
        info!("app-server bridge started");
        Ok(bridge)
    }

    pub fn subscribe_notifications(&self) -> broadcast::Receiver<Value> {
        self.notifications.subscribe()
    }

    pub async fn request(
        &self,
        method: &str,
        params: Value,
        request_timeout: Duration,
        request_id: Option<Value>,
    ) -> Result<Value> {
        let id = request_id.unwrap_or_else(|| json!(self.next_id.fetch_add(1, Ordering::Relaxed)));
        let id_key =
            jsonrpc_id_to_key(Some(&id)).ok_or_else(|| anyhow!("invalid jsonrpc request id"))?;
        let envelope = json!({
            "jsonrpc": "2.0",
            "id": id,
            "method": method,
            "params": params
        });
        let line = serde_json::to_string(&envelope)?;
        let (tx, rx) = oneshot::channel();
        self.pending.lock().await.insert(id_key.clone(), tx);

        {
            let mut stdin = self.stdin.lock().await;
            stdin
                .write_all(line.as_bytes())
                .await
                .context("failed writing request line to app-server")?;
            stdin
                .write_all(b"\n")
                .await
                .context("failed writing newline to app-server")?;
            stdin
                .flush()
                .await
                .context("failed flushing app-server stdin")?;
        }
        debug!("app-server request sent method={method} id={id_key}");

        match timeout(request_timeout, rx).await {
            Ok(Ok(value)) => Ok(value),
            Ok(Err(_)) => {
                self.pending.lock().await.remove(&id_key);
                Err(anyhow!(
                    "app-server response channel dropped for id={id_key}"
                ))
            }
            Err(_) => {
                self.pending.lock().await.remove(&id_key);
                Err(anyhow!(
                    "app-server timeout waiting for response id={id_key} method={method}"
                ))
            }
        }
    }

    pub async fn shutdown(&self) -> Result<()> {
        let mut child = self.child.lock().await;
        child.kill().await?;
        Ok(())
    }
}

fn jsonrpc_id_to_key(id: Option<&Value>) -> Option<String> {
    let id = id?;
    match id {
        Value::String(value) => Some(format!("s:{value}")),
        Value::Number(value) => Some(format!("n:{value}")),
        Value::Bool(value) => Some(format!("b:{value}")),
        _ => Some(format!("j:{}", id)),
    }
}
