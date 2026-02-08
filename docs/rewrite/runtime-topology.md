# Runtime Topology Contract

## Purpose
Define the authoritative runtime graph and message flow for the Electron to Tauri rewrite.

## Runtime Graph
- Renderer (mirror) and renderer (rewrite)
- Tauri host
- App-server bridge
- Git worker
- Terminal service
- State persistence

## Message Flow
- Renderer invokes host queries and mutations via `window.electronBridge`.
- Host routes to app-server bridge, git worker, terminal, or state layer.
- Host emits events back to renderer scoped by window, workspace, and thread.
- Workers and terminal emit events through host routing only.

## Ownership and Lifecycle
- Host owns IPC routing and scopes.
- App-server bridge owns JSON-RPC lifecycle and reconnect.
- Worker owns repo task execution lifecycle.
- Terminal owns PTY lifecycle and output buffering.
- State layer owns persistence versioning and migration.

## Required Mapping
- Link each node to parity sources:
  - `docs/parity/rpc-queries.json`
  - `docs/parity/rpc-mutations.json`
  - `docs/parity/ipc-channels.json`
  - `docs/parity/runtime-schemas.json`

## Parity Artifacts
- `docs/parity/feature-contract.md`
- `docs/parity/source-manifest.json`
- `docs/parity/opaque-bundles.json`
- `docs/parity/pdf-worker.json`
- `docs/parity/rpc-queries.json`
- `docs/parity/rpc-mutations.json`
- `docs/parity/ipc-channels.json`
- `docs/parity/runtime-schemas.json`

## Enforcement
- `node scripts/parity/check-architecture-contracts.js`
- `pnpm run parity:check:sources`
- `pnpm run parity:check:host`

## Test Plan
- Verify all nodes and edges are exercised by parity checks.
- Validate all IPC channels match `docs/parity/ipc-channels.json`.
