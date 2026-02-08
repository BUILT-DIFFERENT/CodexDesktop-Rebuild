# Signal Parity Map (V1)

This is the canonical signal parity map for the rewrite.

This map links each audited signal to:
- the official app event/method observed in this Electron rebuild,
- the native/Tauri equivalent (if known),
- and the underlying CLI/protocol source.

`TBD` means the native/Tauri equivalent has not been finalized yet.

| Audited Signal | Official App Event/Method | Native/Tauri Equivalent | CLI / Protocol Source | Notes / Status |
|---|---|---|---|---|
| `thread/start` | `thread/start` | `TBD` | Codex app-server JSON-RPC method | Required in v1 thread lifecycle check |
| `thread/resume` | `thread/resume` | `TBD` | Codex app-server JSON-RPC method | Required in v1 thread lifecycle check |
| `thread/list` | `thread/list` | `TBD` | Codex app-server JSON-RPC method | Required in v1 thread lifecycle check |
| `thread/read` | `thread/read` | `TBD` | Codex app-server JSON-RPC method | Required in v1 thread lifecycle check |
| `thread/archive` | `thread/archive` | `TBD` | Codex app-server JSON-RPC method | Required in v1 thread lifecycle check |
| `thread/unarchive` | `thread/unarchive` | `TBD` | Codex app-server JSON-RPC method | Required in v1 thread lifecycle check |
| `turn/start` | `turn/start` | `TBD` | Codex app-server JSON-RPC method | Required in v1 turn lifecycle check |
| `turn/interrupt` | `turn/interrupt` | `TBD` | Codex app-server JSON-RPC method | Required in v1 turn lifecycle check |
| `turn/completed` | `turn/completed` notification | `TBD` | Codex app-server notification | Required in v1 turn lifecycle check |
| `item/agentMessage/delta` | `item/agentMessage/delta` notification | `TBD` | Codex app-server notification | Streaming delta coverage in v1 |
| `item/commandExecution/requestApproval` | same method | `TBD` | Codex app-server request | Approval request coverage in v1 |
| `item/fileChange/requestApproval` | same method | `TBD` | Codex app-server request | Approval request coverage in v1 |
| approval response | `mcp-response` carrying approval decision | `TBD` | JSON-RPC response to approval request id | Legacy method names `execCommandApproval` / `applyPatchApproval` may appear |
| `getAuthStatus` | `getAuthStatus` | `TBD` | Codex app-server JSON-RPC method | MCP/auth status coverage in v1 |
| `mcpServerStatus/list` | `mcpServerStatus/list` | `TBD` | Codex app-server JSON-RPC method | MCP/auth status coverage in v1 |
| MCP auth unauthorized path | HTTP fixture auth failure (`401 Unauthorized`) | `TBD` | Fixture transport/auth behavior | Required audit token: `mcp-auth-unauthorized` |
| MCP auth authorized path | HTTP fixture auth success (`authMode:header|bearer`) | `TBD` | Fixture tool result (`whoami`) | Required audit token: `mcp-auth-authorized` |

## V2 Notes

- OAuth fixture parity rows are intentionally deferred to v2.
- Planned v2 signals include `mcpServer/oauth/login` and `mcpServer/oauthLogin/completed`.
