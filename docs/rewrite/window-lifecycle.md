# Window Lifecycle Parity

## Purpose
Define window creation and lifecycle rules to match Electron behavior.

## Window Types
- Define window types and associated permissions.
- Define rules for window creation and reuse.

## Focus and Visibility
- Define focus behavior when opening or switching windows.
- Define minimized, hidden, and background behavior.

## Bounds and Displays
- Define persistence of size and position.
- Define multi-display behavior and fallback rules.

## Close and Crash
- Define close confirmation behavior.
- Define crash recovery and restore behavior.

## Parity Artifacts
- `docs/parity/feature-contract.md`
- `docs/parity/ipc-channels.json`
- `docs/parity/routes.json`
- `docs/parity/critical-flows/login.md`

## Enforcement
- `node scripts/parity/check-architecture-contracts.js`
- `pnpm run test:tauri-driver`

## Test Plan
- Multi-window open and close tests.
- Bounds persistence tests across restarts.
- Crash recovery tests.
