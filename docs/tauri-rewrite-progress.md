# Electron -> Rust/Tauri Rewrite Progress

Last updated: 2026-02-08

## Plan Record

### 1) Parity Contract and Reverse-Engineering Baseline

- Create `docs/parity/feature-contract.md`.
- Add static extraction scripts for:
  - route map from renderer bundle
  - query/mutation method sets from renderer bundle
  - IPC/channel map from main/preload bundles
  - CSS variables + keyframes from renderer CSS
- Add runtime log analysis for payload schemas and critical flow timelines.
- Output artifacts:
  - `docs/parity/routes.json`
  - `docs/parity/rpc-queries.json`
  - `docs/parity/rpc-mutations.json`
  - `docs/parity/worker-git-methods.json`
  - `docs/parity/animations.json`
  - `docs/parity/ipc-channels.json`
  - `docs/parity/runtime-schemas.json`
  - `docs/parity/critical-flows/*.md`

### 2) Tauri/Rust Target Architecture

- Tauri v2 app shell at `apps/desktop-tauri/src-tauri`.
- Workspace crate boundaries:
  - `crates/host-api`
  - `crates/app-server-bridge`
  - `crates/git-worker`
  - `crates/terminal`
  - `crates/state`
- Compatibility layer:
  - `apps/desktop-tauri/bridge/electronBridgeCompat.js`

### 3) Host Functionality Rewrite

- Typed API scaffolding (requests/responses/events/enums).
- Initial query/mutation handlers.
- Initial git worker dispatch.
- Initial terminal session manager.
- Initial state persistence adapter.

### 4) UI + Animation Exactness

- Phase A: serve existing webview assets unchanged from `src/webview`.
- Phase B: progressively replace internals while preserving rendered parity.
- Baseline artifacts generated from large bundles and CSS.

### 5) Verification/Migration/Cutover

- Keep Electron debug/audit harness for baseline capture.
- Add parity extraction + runtime schema scripts.
- Gate rollout by parity artifact deltas and scripted flow checks.

## Current Implementation Status

### Completed

- Created Rust workspace root (`Cargo.toml`) and wired package scripts:
  - `pnpm run tauri:check`
  - `pnpm run tauri:dev`
  - `pnpm run parity:extract`
  - `pnpm run parity:runtime`
- Added crate scaffolding and initial logic:
  - `crates/host-api`
  - `crates/app-server-bridge`
  - `crates/git-worker`
  - `crates/terminal`
  - `crates/state`
- Added Tauri app shell and compatibility bridge:
  - `apps/desktop-tauri/src-tauri/src/main.rs`
  - `apps/desktop-tauri/bridge/electronBridgeCompat.js`
- Added architecture decision doc:
  - `docs/tauri-architecture-decision.md`
- Added parity contract doc:
  - `docs/parity/feature-contract.md`
- Added parity extraction tooling:
  - `scripts/parity/extract-static-parity.js`
  - `scripts/parity/analyze-runtime-log.js`
- Added parity gate validators:
  - `scripts/parity/check-source-manifest.js`
  - `scripts/parity/check-host-coverage.js`
  - `scripts/parity/check-worker-coverage.js`
  - `scripts/parity/check-ui-motion-parity.js`
- Added rewrite deep-dive docs:
  - `docs/rewrite/01-baseline-and-sources.md`
  - `docs/rewrite/02-runtime-host-parity.md`
  - `docs/rewrite/03-renderer-ui-animation-parity.md`
  - `docs/rewrite/04-validation-and-definition-of-done.md`
  - `docs/rewrite/05-cutover-and-risk-controls.md`

### In Progress

- Completing all query/mutation/worker methods to match Electron behavior.
- Completing app-server runtime parity (full request/notification semantics).
- Completing updater, telemetry, deep link dispatch, and OS integration parity.
- Completing terminal PTY-level behavior parity (resize/output semantics).

### Pending

- Full route-by-route UI behavior verification.
- Pixel-diff and animation timeline test harness for all golden states.
- Dual-run transcript comparison (Electron vs Tauri) for production gating.
- Full cross-platform packaging/signing path for Tauri build.

## Notes on Large Non-Unminified Inputs

The rewrite baseline explicitly includes:

- `src/webview/assets/index-CgwAo6pj.js` (original fallback source)
- `src/webview/assets/index-DYqVWCHk.css` (original fallback source)
- `src/webview/assets/pdf.worker.min-qwK7q_zL.mjs` (original fallback source)
- `src/.vite/build/main-CQwPb0Th.js`
- `src/.vite/build/worker.js`

and unminified-safe assets under:

- `tmp/codex-wakaru/unminify-safe/third_party/CodexDesktop-Rebuild/src/webview/assets/`

These are treated as required parity sources.

Generated source coverage is recorded in:

- `docs/parity/source-manifest.json`
- `docs/parity/opaque-bundles.json`
