# 05 - Cutover and Risk Controls

## Objective

Ship Tauri rewrite safely with strict rollout controls and explicit rollback paths.

## Cutover Preconditions

- Hard completion gate passes.
- Critical flows validated on target platform matrix.
- Parity artifacts and validator reports are committed and current.

## Target Platform Matrix

- macOS: x64, arm64
- Windows: x64
- Linux: x64, arm64
- Each platform must have green results for: `parity:check`, `test:ui`, `test:tauri-driver` (or explicit documented skip condition), and `tauri:check`.

## Rollout Policy

1. Keep Electron debug/audit harness active through rollout.
2. Run staged rollout in three phases:
   - `shadow`: Tauri build validated with parity checks but not default.
   - `candidate`: limited release with transcript diff monitoring.
   - `default`: Tauri becomes default only after candidate gates stay green for agreed soak period.
3. Maintain immediate rollback path to Electron baseline package.

## Risk Controls

- Treat all host method/schema changes as contract changes.
- Require explicit signoff for any UI/animation delta.
- Keep compatibility bridge (`window.electronBridge`) stable during cutover.
- Keep transcript diffing in release checks until stable post-cutover period.

## Signoff Requirements

- Runtime parity owner signoff (host/worker/terminal parity checks).
- UI parity owner signoff (visual + motion parity evidence).
- Release owner signoff (platform matrix and rollback readiness).
- Security reviewer signoff for capability, updater, or bridge-surface changes.

## Rollback Triggers and Runbook

- Trigger rollback immediately when any of the following occur:
  - previously green parity gate turns red in candidate/default phase,
  - high-severity UI/animation regression is confirmed,
  - transcript diff shows unapproved delta on critical flows,
  - updater/install path causes repeated launch failure.
- Runbook:
  1. Flip runtime default back to Electron baseline package.
  2. Re-run `pnpm run parity:check` and targeted critical-flow tests on rollback build.
  3. Confirm bridge contract behavior (`window.electronBridge`, `window.codexWindowType`) remains stable.
  4. Publish incident summary with root cause and re-entry criteria for next cutover attempt.

## Operational Checks

- Validate telemetry and runtime logs for:
  - app-server request/response continuity
  - notification delivery ordering
  - worker error envelope shape
  - terminal attach/resize/write reliability

## Post-Cutover Burn-Down

- Track and resolve deferred low-severity parity deltas.
- Keep parity check scripts as permanent CI gates.
- Continue route-level screenshot/motion baselining for regression prevention.
