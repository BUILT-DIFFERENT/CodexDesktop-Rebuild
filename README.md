# Codex Desktop Rebuild

Cross-platform Electron build for OpenAI Codex Desktop App.

## Supported Platforms

| Platform | Architecture | Status |
|----------|--------------|--------|
| macOS    | x64, arm64   | ✅     |
| Windows  | x64          | ✅     |
| Linux    | x64, arm64   | ✅     |

## Build

```bash
# Install dependencies
npm install

# Build for current platform
npm run build

# Build for specific platform
npm run build:mac-x64
npm run build:mac-arm64
npm run build:win-x64
npm run build:linux-x64
npm run build:linux-arm64

# Build all platforms
npm run build:all
```

## Development

```bash
npm run dev
```

## Debug Mode

```bash
pnpm run dev:debug
```

What this enables:
- Main process Node inspector (`ws://127.0.0.1:<port>`)
- Auto-open renderer DevTools
- IPC/app-server tracing + renderer console capture to `logs/dev-debug-*.log`
- Main process stdout/stderr mirrored to the same log file
- Playwright-driven renderer UI interaction (click/type/press) over CDP
- Playwright screenshot capture to `logs/screenshots/*.png`

Useful env vars:
- `CODEX_DEBUG_INSPECT_PORT` (default `9229`)
- `CODEX_DEBUG_RENDERER_INSPECT_PORT` (default `9223`)
- `CODEX_DEBUG_TRACE=0` to disable verbose tracing
- `CODEX_DEBUG_TRACE_IPC=0` to disable IPC tracing only
- `CODEX_DEBUG_OPEN_DEVTOOLS=0` to keep DevTools closed
- `CODEX_DEBUG_CDP_ENDPOINT` to override the renderer CDP endpoint used by `debug:ui`
- `CODEX_DEBUG_RENDERER_TARGET_URL_MATCH` to select a specific renderer URL when multiple tabs exist
- `CODEX_DEBUG_SCREENSHOT_DIR` (default `logs/screenshots`)

Attach points:
- Main process debugger: `ws://127.0.0.1:<CODEX_DEBUG_INSPECT_PORT>`
- Renderer debugger: `http://127.0.0.1:<CODEX_DEBUG_RENDERER_INSPECT_PORT>` (Chrome DevTools Protocol)
- Renderer performance profile: open renderer DevTools (`Performance` tab) and record while reproducing.

Playwright UI/screenshot helper:

```bash
# In terminal A
pnpm run dev:debug

# In terminal B
pnpm run debug:ui -- list
pnpm run debug:ui -- click "button:has-text('New Chat')"
pnpm run debug:ui -- type "textarea" "Hello from Playwright"
pnpm run debug:ui -- press Enter
pnpm run debug:ui -- screenshot
pnpm run debug:ui -- screenshot logs/screenshots/input.png --selector "textarea"
```

## V1 Debug Harness (Telemetry + Fixtures + Audit)

This repository includes a non-invasive v1 debug harness focused on:
- Redacted NDJSON telemetry for IPC/app-server activity.
- Local MCP fixtures (`stdio`, `http`, `failing`).
- Machine-readable audit output for thread/turn/approval/MCP-auth coverage.

### Run Sequence

```bash
# 1) Start local fixtures
pnpm run debug:fixtures:start

# 2) Start app in debug mode (generates .log + .ndjson)
pnpm run dev:debug

# 3) In another terminal, run your manual flow checks
# (thread lifecycle, turn lifecycle, approvals, MCP auth success/failure)

# 4) Audit captured NDJSON log
pnpm run debug:audit -- --log logs

# 5) CI-friendly JSON output
pnpm run debug:audit -- --log logs --json

# 6) Stop fixtures
pnpm run debug:fixtures:stop
```

### NDJSON Log Contract (v1)

Each NDJSON line includes:
- `schemaVersion`, `runId`, `sessionId`, `pid`, `appFlavor`
- `ts`, `direction`, `channel`, `method`, `type`, `threadId`, `turnId`, `requestId`, `status`, `rawPreview`

Logs are redacted before write (Authorization/Bearer/cookies/API keys).

### V2 Scope (Deferred)

- OAuth MCP fixture and OAuth-specific audit checks are intentionally deferred to v2.
- See parity mapping in `docs/signal-parity-map.md`.

## Project Structure

```
├── src/
│   ├── .vite/build/     # Main process (Electron)
│   └── webview/         # Renderer (Frontend)
├── resources/
│   ├── electron.icns    # App icon
│   └── notification.wav # Sound
├── scripts/
│   └── patch-copyright.js
├── forge.config.js      # Electron Forge config
└── package.json
```

## CI/CD

GitHub Actions automatically builds on:
- Push to `master`
- Tag `v*` → Creates draft release

## Credits

**© OpenAI · Cometix Space**

- [OpenAI Codex](https://github.com/openai/codex) - Original Codex CLI (Apache-2.0)
- [Cometix Space](https://github.com/Haleclipse) - Cross-platform rebuild & [@cometix/codex](https://www.npmjs.com/package/@cometix/codex) binaries
- [Electron Forge](https://www.electronforge.io/) - Build toolchain

## License

This project rebuilds the Codex Desktop app for cross-platform distribution.
Original Codex CLI by OpenAI is licensed under Apache-2.0.
