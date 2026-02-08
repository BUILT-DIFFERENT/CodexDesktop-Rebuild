use anyhow::{anyhow, Result};
use host_api::TerminalSession;
use portable_pty::{native_pty_system, CommandBuilder, MasterPty, PtySize};
use serde_json::json;
use std::collections::{BTreeMap, HashMap};
use std::io::{Read, Write};
use std::sync::{Arc, Mutex as StdMutex};
use tokio::sync::Mutex;
use uuid::Uuid;

struct RunningSession {
    meta: TerminalSession,
    child: Box<dyn portable_pty::Child + Send + Sync>,
    master: Box<dyn MasterPty + Send>,
    stdin: Arc<StdMutex<Box<dyn Write + Send>>>,
    output: Arc<StdMutex<Vec<u8>>>,
}

#[derive(Default, Clone)]
pub struct TerminalManager {
    sessions: Arc<Mutex<HashMap<String, RunningSession>>>,
}

impl TerminalManager {
    pub async fn create(
        &self,
        cwd: String,
        env: HashMap<String, String>,
        cols: u16,
        rows: u16,
    ) -> Result<TerminalSession> {
        let id = Uuid::new_v4().to_string();
        let shell = if cfg!(windows) {
            std::env::var("ComSpec").unwrap_or_else(|_| "cmd.exe".to_string())
        } else {
            std::env::var("SHELL").unwrap_or_else(|_| "sh".to_string())
        };
        let pty_system = native_pty_system();
        let pty_pair = pty_system.openpty(PtySize {
            rows,
            cols,
            pixel_width: 0,
            pixel_height: 0,
        })?;

        let mut cmd = CommandBuilder::new(shell);
        cmd.cwd(cwd.clone());
        for (key, value) in &env {
            cmd.env(key, value);
        }

        let child = pty_pair.slave.spawn_command(cmd)?;
        let reader = pty_pair.master.try_clone_reader()?;
        let stdin = pty_pair.master.take_writer()?;
        let output = Arc::new(StdMutex::new(Vec::<u8>::new()));
        let output_clone = Arc::clone(&output);

        std::thread::spawn(move || {
            let mut reader = reader;
            let mut chunk = [0u8; 4096];
            loop {
                match reader.read(&mut chunk) {
                    Ok(0) => break,
                    Ok(count) => {
                        if let Ok(mut data) = output_clone.lock() {
                            data.extend_from_slice(&chunk[..count]);
                        }
                    }
                    Err(_) => break,
                }
            }
        });

        let session = TerminalSession {
            id: id.clone(),
            cwd,
            env: env.into_iter().collect::<BTreeMap<String, String>>(),
            cols,
            rows,
        };

        self.sessions.lock().await.insert(
            id.clone(),
            RunningSession {
                meta: session.clone(),
                child,
                master: pty_pair.master,
                stdin: Arc::new(StdMutex::new(stdin)),
                output,
            },
        );
        Ok(session)
    }

    pub async fn write(&self, id: &str, text: &str) -> Result<()> {
        let mut sessions = self.sessions.lock().await;
        let session = sessions
            .get_mut(id)
            .ok_or_else(|| anyhow!("unknown terminal session {id}"))?;
        let mut stdin = session
            .stdin
            .lock()
            .map_err(|_| anyhow!("failed to lock terminal stdin"))?;
        stdin.write_all(text.as_bytes())?;
        stdin.flush()?;
        Ok(())
    }

    pub async fn resize(&self, id: &str, cols: u16, rows: u16) -> Result<()> {
        let mut sessions = self.sessions.lock().await;
        let session = sessions
            .get_mut(id)
            .ok_or_else(|| anyhow!("unknown terminal session {id}"))?;
        session.meta.cols = cols;
        session.meta.rows = rows;
        session.master.resize(PtySize {
            rows,
            cols,
            pixel_width: 0,
            pixel_height: 0,
        })?;
        Ok(())
    }

    pub async fn close(&self, id: &str) -> Result<()> {
        let mut sessions = self.sessions.lock().await;
        let mut session = sessions
            .remove(id)
            .ok_or_else(|| anyhow!("unknown terminal session {id}"))?;
        session.child.kill()?;
        Ok(())
    }

    pub async fn attach(&self, id: &str) -> Result<serde_json::Value> {
        let sessions = self.sessions.lock().await;
        let session = sessions
            .get(id)
            .ok_or_else(|| anyhow!("unknown terminal session {id}"))?;
        let output = session
            .output
            .lock()
            .map_err(|_| anyhow!("failed to lock terminal output"))?;
        let text = String::from_utf8_lossy(output.as_slice()).to_string();
        Ok(json!({
            "session": session.meta,
            "output": text,
            "byteLength": output.len(),
        }))
    }
}
