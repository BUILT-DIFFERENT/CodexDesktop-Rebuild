# Tauri MCP Parity Checklist

Use this checklist to keep runtime debugging and parity validation consistent.

## Reproduction Checklist

- Confirm the target workflow and expected result.
- Start or verify MCP session connection.
- Capture baseline state (window list, backend state, initial DOM snapshot).
- Start IPC monitor before any interaction.
- Reproduce the issue using real UI interactions.
- Capture screenshot at failure point.
- Pull captured IPC and relevant logs.
- Stop IPC monitor.

## Parity Checklist

- Compare UI behavior against `third_party/CodexDesktop-Rebuild/`.
- Compare protocol/runtime expectations against `codex-cli/` and `codex-rs/`.
- Confirm argument naming and payload shapes match expected contracts.
- Confirm lifecycle behavior (timeouts, exits, reconnect) matches expected shell handling.
- Record every mismatch as either:
- intentional deviation with rationale
- parity regression needing fix

## Report Template

Copy and fill this in final responses or issue comments.

```markdown
### Runtime Debug Report

- Workflow: <name>
- Route/window: <path or window label>
- Expected behavior: <summary>
- Actual behavior: <summary>

### Evidence

- Screenshot: <path>
- DOM snapshot type: <accessibility|structure>
- Key logs: <summary>
- IPC calls/events: <summary>

### Diagnosis

- Root-cause layer: <UI|frontend logic|IPC|backend|lifecycle>
- Suspected cause: <summary>
- Fix applied: <yes/no + summary>

### Parity Validation

- Electron reference check: <pass/fail + notes>
- CLI/protocol check: <pass/fail + notes>
- Deviation status: <intentional/unintentional>
- Follow-up required: <yes/no + action>
```
