---
name: tauri-mcp-debug-parity
description: Use the Tauri MCP server to debug running Tauri apps, test real end-to-end UI workflows, and verify behavior parity against reference implementations. Trigger when a task requires runtime reproduction in the live app, frontend-backend IPC/event inspection, workflow validation through actual clicks/typing, or parity checks against third_party/CodexDesktop-Rebuild, codex-cli, and codex-rs behavior.
---

# Tauri MCP Debug Parity

## Overview

Run deterministic runtime debugging for Tauri UI issues by driving the live app with MCP tools, capturing evidence, and validating fixes.
Use this skill when static code reading is insufficient and the workflow must be proven in the running app.

## Quick Start

1. Connect to the app with `mcp__tauri__driver_session` (`action: "status"` then `"start"` if needed).
2. Collect baseline state with `mcp__tauri__ipc_get_backend_state`, `mcp__tauri__manage_window` (`action: "list"`), and `mcp__tauri__webview_dom_snapshot`.
3. Start capture before reproduction using `mcp__tauri__ipc_monitor` (`action: "start"`).
4. Reproduce the workflow via `mcp__tauri__webview_interact` and `mcp__tauri__webview_keyboard`.
5. Gather evidence with `mcp__tauri__ipc_get_captured`, `mcp__tauri__read_logs`, and `mcp__tauri__webview_screenshot`.
6. Stop capture using `mcp__tauri__ipc_monitor` (`action: "stop"`).

## Workflow

### 1) Scope the scenario

- Identify the exact user-visible workflow to validate.
- Define expected result, current result, and failure signal.
- Note target route/thread/window and any required preconditions.

### 2) Connect and verify runtime control

- Check connection state first using `mcp__tauri__driver_session` with `action: "status"`.
- Start session with `action: "start"` when disconnected.
- If connection fails, run `mcp__tauri__get_setup_instructions` and follow the plugin setup path.
- Confirm the app identity and environment with `mcp__tauri__ipc_get_backend_state`.

### 3) Instrument before reproducing

- Start IPC capture: `mcp__tauri__ipc_monitor` with `action: "start"`.
- Read recent console logs: `mcp__tauri__read_logs` (`source: "console"`).
- Snapshot semantic structure: `mcp__tauri__webview_dom_snapshot` (`type: "accessibility"`).
- Snapshot DOM structure when selector debugging is needed: `type: "structure"`.

### 4) Execute the real workflow

- Find stable targets with `mcp__tauri__webview_find_element` or accessibility snapshot references.
- Drive real behavior with `mcp__tauri__webview_interact` (`click`, `double-click`, `scroll`, `focus`) and `mcp__tauri__webview_keyboard` (`type`, `press`).
- Use `mcp__tauri__webview_wait_for` for deterministic waits; avoid timing-only sleeps.
- Use `mcp__tauri__ipc_execute_command` only when direct backend invocation is required to isolate a layer.

### 5) Capture evidence and diagnose

- Pull captured IPC traffic with `mcp__tauri__ipc_get_captured`.
- Capture visual proof with `mcp__tauri__webview_screenshot`.
- Pull targeted logs using `mcp__tauri__read_logs` with a filter.
- Classify issue location: UI state, frontend logic, IPC contract, backend command/event, or app lifecycle.

### 6) Verify parity

- Compare observed behavior against parity references before accepting a fix:
- `third_party/CodexDesktop-Rebuild/` for desktop app flow and renderer/main behavior.
- `codex-cli/` and `codex-rs/` for protocol/runtime/API behavior.
- Mark deviations as intentional or regression risk.
- Document intentional deviations in `docs/custom/` when parity is not exact.

### 7) Re-run and close

- Stop and restart the monitored flow after fixes.
- Re-run the same scenario end-to-end.
- Confirm the bug signal is gone and no adjacent regressions appear.
- Stop IPC monitoring and summarize with evidence links.

## Tool Selection

- Use `webview_dom_snapshot` when you need semantic UI state or selector discovery.
- Use `webview_execute_js` when you need exact browser runtime values that snapshots do not provide.
- Use `ipc_monitor` + `ipc_get_captured` when debugging invoke/event mismatches.
- Use `read_logs` for timing and exception correlation.
- Use `manage_window` when viewport/window state can affect reproduction.
- Use `webview_wait_for` to avoid race conditions in tests.

## Output Requirements

- Always provide:
- Reproduction steps used in the live app.
- Actual vs expected behavior.
- Evidence summary (IPC, logs, screenshot, DOM snapshot).
- Root-cause layer and fix status.
- Parity conclusion against reference implementation.

## References

- Use `references/parity-checklist.md` for a concise parity/debug checklist and report template.
