# 02 - Runtime Host Parity

## Objective

Complete Rust/Tauri host behavior parity with Electron by wiring the app-server bridge, method dispatch coverage, worker behavior, and terminal PTY lifecycle.

## Runtime Components

- `apps/desktop-tauri/src-tauri/src/main.rs`
- `crates/host-api/src/lib.rs`
- `crates/app-server-bridge/src/lib.rs`
- `crates/git-worker/src/lib.rs`
- `crates/terminal/src/lib.rs`
- `apps/desktop-tauri/src-tauri/capabilities/default.json`

## Method Coverage Rules

1. Every method in `QUERY_METHODS` must be handled locally or forwarded through app-server.
2. Every method in `MUTATION_METHODS` must be handled locally or forwarded through app-server.
3. Every method in `GIT_WORKER_METHODS` must have an explicit worker implementation path.

## App-Server Bridge Rules

- Preserve client request IDs in app-server request envelopes.
- Forward app-server notifications to renderer on `codex_desktop:message-for-view`.
- Return standardized `HostResponse` envelopes for query/mutation commands.
- Do not leave `*_not_implemented` fallback paths in runtime dispatch.

## Terminal Rules

- Use PTY-backed session management.
- Support:
  - `terminal-create`
  - `terminal-attach`
  - `terminal-write`
  - `terminal-resize`
  - `terminal-close`
- Ensure attach provides recoverable output state for an active session.

## Worker Rules

- Git worker methods must return stable, parseable envelopes.
- Remove placeholder responses that mark parity methods as unimplemented.

## Parity Artifacts
- `docs/parity/worker-git-methods.json`
