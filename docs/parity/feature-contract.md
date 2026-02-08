# Codex Desktop Parity Contract (Electron Baseline -> Tauri Rewrite)

## Scope

This contract defines the baseline behavior that the Rust + Tauri rewrite must preserve.

Primary baseline sources:

- `tmp/codex-wakaru/unminify-safe/third_party/CodexDesktop-Rebuild/src/.vite/build/main-CQwPb0Th.js`
- `tmp/codex-wakaru/unminify-safe/third_party/CodexDesktop-Rebuild/src/.vite/build/worker.js`
- `src/webview/assets/index-CgwAo6pj.js`
- `src/webview/assets/index-DYqVWCHk.css`
- `src/webview/assets/pdf.worker.min-qwK7q_zL.mjs`
- `tmp/codex-wakaru/unminify-safe/third_party/CodexDesktop-Rebuild/src/webview/assets/*`

Source coverage and opacity metadata:

- `docs/parity/source-manifest.json`
- `docs/parity/opaque-bundles.json`

## Host Runtime Contract

- Window lifecycle:
  - Main window bootstrap and lifecycle signaling.
  - Additional window classes and explicit `codexWindowType` propagation.
- Protocol/deeplink:
  - `app://-/` rendering behavior and guardrails.
  - `codex://...` route dispatch (`settings`, `skills`, `automations`, `threads/new`, local conversations).
- Crash/reload behavior:
  - Main/renderer lifecycle logging and safe recovery.
- Telemetry/logging:
  - Sentry/DataDog boot signals.
  - Debug NDJSON capture for IPC/app-server channels.
- Update behavior:
  - Cross-platform update checks and state signaling.

## Renderer <-> Host Message Contract

- Compatibility bridge globals:
  - `window.electronBridge`
  - `window.codexWindowType`
- Core channels:
  - `codex_desktop:message-from-view`
  - `codex_desktop:message-for-view`
  - `codex_desktop:show-context-menu`
  - `codex_desktop:get-sentry-init-options`
  - `codex_desktop:get-build-flavor`
  - `codex_desktop:trigger-sentry-test`
  - Worker lanes: `codex_desktop:worker:${id}:from-view`, `codex_desktop:worker:${id}:for-view`
- Renderer-query and renderer-mutation method sets are generated into:
  - `docs/parity/rpc-queries.json`
  - `docs/parity/rpc-mutations.json`

## Worker Contract

- Worker request/response/event framing and IDs.
- Git worker method parity set captured in:
  - `docs/parity/worker-git-methods.json`

## UI and Motion Contract

- Route and navigation baseline captured in:
  - `docs/parity/routes.json`
- Keyframes/CSS variable baseline captured in:
  - `docs/parity/animations.json`
- Critical runtime event sequences captured in:
  - `docs/parity/critical-flows/login.md`
  - `docs/parity/critical-flows/thread-turn.md`
  - `docs/parity/critical-flows/automations.md`
  - `docs/parity/critical-flows/git.md`

## Verification Contract

A rewrite build is only considered parity-ready when:

1. Static parity artifacts regenerate with no unexplained regressions.
2. Runtime schema extraction from NDJSON logs reports complete expected channels/methods.
3. UI route and animation token baselines show no unresolved deltas.
4. Contract method sets are implemented or explicitly mapped with tested compatibility behavior.
