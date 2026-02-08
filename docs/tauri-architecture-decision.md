# Tauri Rewrite Architecture Decision

## Objective

Replace Electron host runtime with Rust + Tauri while preserving frontend bundle behavior, host APIs, and UI/motion parity.

## Chosen Architecture

- App shell: `apps/desktop-tauri/src-tauri`
- Typed API contract: `crates/host-api`
- App-server JSON-RPC bridge: `crates/app-server-bridge`
- Git worker service: `crates/git-worker`
- Terminal lifecycle manager: `crates/terminal`
- State persistence adapters: `crates/state`

## Electron-to-Tauri Mapping

| Electron subsystem | Tauri/Rust replacement | Owner crate/module |
|---|---|---|
| `preload.js` bridge | injected JS compat shim (`window.electronBridge`) | `apps/desktop-tauri/bridge/electronBridgeCompat.js` |
| `ipcMain` query/mutation handlers | `#[tauri::command]` command handlers | `apps/desktop-tauri/src-tauri/src/main.rs` |
| `webContents.send` messaging | Tauri events (`window.emit`, `event.listen`) | `apps/desktop-tauri/src-tauri/src/main.rs` |
| worker lanes (`codex_desktop:worker:*`) | command-routed worker dispatch + per-worker event channels | `apps/desktop-tauri/src-tauri/src/main.rs`, `crates/git-worker` |
| app-server child process bridge | tokio-managed JSONL RPC bridge | `crates/app-server-bridge` |
| terminal session lifecycle | Rust terminal manager (session registry + process I/O) | `crates/terminal` |
| global/config state | JSON-backed state store | `crates/state` |
| deep link parsing | typed enum parser | `crates/host-api` |
| window-type metadata | init script injection (`codexWindowType`) | `apps/desktop-tauri/src-tauri/src/main.rs` |

## Compatibility Layer Spec (Frozen for v1 rewrite)

The Tauri bridge must expose the same shape currently expected by the renderer:

- `window.codexWindowType`
- `window.electronBridge.windowType`
- `window.electronBridge.sendMessageFromView(payload)`
- `window.electronBridge.getPathForFile(fileLike)`
- `window.electronBridge.sendWorkerMessageFromView(workerId, payload)`
- `window.electronBridge.subscribeToWorkerMessages(workerId, cb)`
- `window.electronBridge.showContextMenu(payload)`
- `window.electronBridge.triggerSentryTestError()`
- `window.electronBridge.getSentryInitOptions()`
- `window.electronBridge.getAppSessionId()`
- `window.electronBridge.getBuildFlavor()`

## Current Constraints

- Current implementation contains full crate boundaries and a functioning command/event bridge scaffold.
- Many host methods are intentionally marked `not implemented yet` and must be completed against the parity artifacts.
- UI is still served from existing `src/webview` static bundle for strict visual/motion compatibility.
