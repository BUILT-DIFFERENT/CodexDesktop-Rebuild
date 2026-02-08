# Codex Desktop Tauri Rewrite (Work-In-Progress)

This app hosts the existing bundled web UI from `src/webview/` inside a Tauri v2 shell and injects a compatibility bridge that exposes:

- `window.electronBridge`
- `window.codexWindowType`

## Run

```bash
pnpm run tauri:check
pnpm run tauri:dev
```

## Current status

- Rust workspace + crate boundaries created.
- Compatibility bridge injected before renderer script execution.
- Host query/mutation routing now includes app-server bridge forwarding for full method coverage.
- Git worker parity method surface is fully mapped to concrete handlers.
- Terminal sessions run on PTY-backed lifecycle and support `terminal-attach`.
- Full parity implementation is tracked in `docs/tauri-rewrite-progress.md`.
