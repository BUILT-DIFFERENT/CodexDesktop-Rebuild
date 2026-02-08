# 05 - Cutover and Risk Controls

## Objective

Ship Tauri rewrite safely with strict rollout controls and explicit rollback paths.

## Cutover Preconditions

- Hard completion gate passes.
- Critical flows validated on target platform matrix.
- Parity artifacts and validator reports are committed and current.

## Rollout Policy

1. Keep Electron debug/audit harness active through rollout.
2. Enable Tauri default runtime only after parity reports are green.
3. Maintain immediate rollback path to Electron baseline package.

## Risk Controls

- Treat all host method/schema changes as contract changes.
- Require explicit signoff for any UI/animation delta.
- Keep compatibility bridge (`window.electronBridge`) stable during cutover.
- Keep transcript diffing in release checks until stable post-cutover period.

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
