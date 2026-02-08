# 2026-02-08 Security + Parity Hardening Notes

## Scope
- Applied targeted hardening/doc-correction updates across bridge, Tauri host, git worker, host-api, state, terminal, and agent reference docs.

## Key Decisions
- `bridge_send_message_from_view` now rejects unknown or missing methods using structured JSON-RPC errors instead of echoing raw payloads.
- `read-file` is now confined to canonicalized allowlisted roots from `CODEX_ALLOWED_READ_ROOTS` (fallback: current working directory).
- `local-environment` now returns only allowlisted env keys (`SHELL`, `ComSpec`, `HOME`, `USERPROFILE`, `PATH`, `TERM`).
- Shell capability permissions were narrowed to the `main` window and switched to scoped command allowlists.
- `set-config-value` in git worker now blocks dangerous git config keys before `run_git`.
- Terminal output buffering now keeps only the newest bounded data (`MAX_OUTPUT_BYTES`) to avoid unbounded growth.

## Pitfalls / Fixes
- Rust borrow error in terminal ring-like trimming (`data.len()` during mutable borrow) fixed by precomputing `current_len` and `drop_count`.
- JS subscription races fixed by storing in-flight `listen()` promises as sentinels and resolving them before subscribe/unsubscribe transitions.

## Validated Commands
- `cargo fmt --all`
- `cargo check -p host-api -p state -p terminal -p git-worker -p desktop-tauri`
- `pnpm run tauri:check`
