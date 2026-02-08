use anyhow::Result;
use serde_json::{json, Value};
use std::path::{Path, PathBuf};
use tokio::fs;

#[derive(Clone)]
pub struct StateStore {
    root: PathBuf,
}

impl StateStore {
    pub async fn new(root: impl AsRef<Path>) -> Result<Self> {
        let root = root.as_ref().to_path_buf();
        fs::create_dir_all(&root).await?;
        Ok(Self { root })
    }

    pub async fn get_json(&self, key: &str) -> Result<Value> {
        let path = self.path_for(key);
        if !path.exists() {
            return Ok(json!({}));
        }
        let contents = fs::read_to_string(path).await?;
        let value = serde_json::from_str(&contents)?;
        Ok(value)
    }

    pub async fn set_json(&self, key: &str, value: &Value) -> Result<()> {
        let path = self.path_for(key);
        if let Some(parent) = path.parent() {
            fs::create_dir_all(parent).await?;
        }
        let text = serde_json::to_string_pretty(value)?;
        fs::write(path, text).await?;
        Ok(())
    }

    fn path_for(&self, key: &str) -> PathBuf {
        self.root.join(format!("{key}.json"))
    }
}
