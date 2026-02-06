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

Useful env vars:
- `CODEX_DEBUG_INSPECT_PORT` (default `9229`)
- `CODEX_DEBUG_RENDERER_INSPECT_PORT` (default `9223`)
- `CODEX_DEBUG_TRACE=0` to disable verbose tracing
- `CODEX_DEBUG_TRACE_IPC=0` to disable IPC tracing only
- `CODEX_DEBUG_OPEN_DEVTOOLS=0` to keep DevTools closed

Attach points:
- Main process debugger: `ws://127.0.0.1:<CODEX_DEBUG_INSPECT_PORT>`
- Renderer debugger: `http://127.0.0.1:<CODEX_DEBUG_RENDERER_INSPECT_PORT>` (Chrome DevTools Protocol)
- Renderer performance profile: open renderer DevTools (`Performance` tab) and record while reproducing.

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
