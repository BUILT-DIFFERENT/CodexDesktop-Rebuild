# 04 - Validation and Definition of Done

## Objective

Define deterministic checks for host, worker, source-baseline, and UI/motion parity.

## Validation Scripts

- `scripts/parity/check-source-manifest.js`
- `scripts/parity/check-host-coverage.js`
- `scripts/parity/check-worker-coverage.js`
- `scripts/parity/check-ui-motion-parity.js`
- `scripts/parity/check-architecture-contracts.js`

## Command Set

- `pnpm run parity:extract`
- `pnpm run parity:runtime`
- `pnpm run parity:check`
- `pnpm run parity:check:architecture`
- `pnpm run test:ui`
- `pnpm run test:tauri-driver`
- `pnpm run tauri:check`

## Expected Gate State

- `parity:check:sources`: pass (no missing required source entries).
- `parity:check:host`: pass (full query/mutation dispatch coverage).
- `parity:check:worker`: pass (full git worker method coverage).
- `parity:check:ui-motion`: pass (no animation baseline drift).
- `parity:check:architecture`: pass (architecture specs mapped to parity artifacts).

## E2E and Integration

- Electron baseline remains in Playwright suites.
- Tauri parity checks use Playwright plus tauri-driver.
- Critical flows include:
  - login/auth
  - thread/turn lifecycle
  - approvals
  - automations
  - git operations
  - terminal lifecycle
  - deep links/window typing

## Runtime Dataset Requirements

- `parity:runtime` input NDJSON must come from a run that exercises all critical flows listed in this plan.
- Store generated flow outputs under `docs/parity/critical-flows/*.md` and keep them current with the latest parity run.
- A parity report is stale when runtime artifacts are older than the latest host, worker, terminal, or bridge contract change in the same branch.

## Delta Approval Record

- Approved low-risk deltas must be recorded in `docs/parity/approved-deltas.md` before merge.
- Every delta record must include: baseline behavior, rewrite behavior, risk classification, approver, and mitigation/rollback note.
- Unrecorded behavior differences are treated as parity failures.

## Definition of Done

Rewrite completion requires:

1. Full method parity coverage.
2. Full worker parity coverage.
3. Zero unresolved high-severity UI/animation diffs.
4. Zero failing parity audits.
5. Only approved low-risk deltas in dual-run transcript comparisons.
