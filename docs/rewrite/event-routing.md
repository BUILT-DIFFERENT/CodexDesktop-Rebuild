# Event Routing Contract

## Purpose
Define routing, scoping, and lifecycle behavior for all host-emitted events.

## Scope Model
- Window scope: events target a specific window id.
- Workspace scope: events target a specific workspace id within a window.
- Thread scope: events target a specific thread id within a workspace.

## Routing Rules
- Events must be routed to the smallest valid scope.
- Broadcast is disallowed unless explicitly documented by event type.
- Stale or unknown targets return a structured error and are not broadcast.

## Subscription Lifecycle
- Subscriptions are created per window session.
- Subscriptions are removed on window close or reload.
- Host must reject events to unsubscribed scopes.

## Error Semantics
- Unknown scope returns `scope_not_found`.
- Stale window returns `window_closed`.
- Unauthorized scope returns `scope_denied`.

## Parity Artifacts
- `docs/parity/ipc-channels.json`
- `docs/parity/runtime-schemas.json`
- `signal-parity-map.md`
- `docs/parity/critical-flows/login.md`
- `docs/parity/critical-flows/thread-turn.md`
- `docs/parity/critical-flows/automations.md`
- `docs/parity/critical-flows/git.md`

## Enforcement
- `node scripts/parity/check-architecture-contracts.js`
- `pnpm run parity:runtime -- --log logs`

## Test Plan
- Verify scope attach and detach per event type.
- Verify stale target handling on close.
- Verify no broadcast behavior except documented cases.
