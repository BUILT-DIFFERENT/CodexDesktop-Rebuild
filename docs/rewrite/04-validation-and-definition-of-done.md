# 04 - Validation and Definition of Done

## Objective

Define deterministic checks for host, worker, source-baseline, and UI/motion parity.

## Validation Scripts

- `scripts/parity/check-source-manifest.js`
- `scripts/parity/check-host-coverage.js`
- `scripts/parity/check-worker-coverage.js`
- `scripts/parity/check-ui-motion-parity.js`

## Command Set

- `pnpm run parity:extract`
- `pnpm run parity:runtime -- --log logs`
- `pnpm run parity:check`

## Expected Gate State

- `parity:check:sources`: pass (no missing required source entries).
- `parity:check:host`: pass (full query/mutation dispatch coverage).
- `parity:check:worker`: pass (full git worker method coverage).
- `parity:check:ui-motion`: pass (no animation baseline drift).

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

## Definition of Done

Rewrite completion requires:

1. Full method parity coverage.
2. Full worker parity coverage.
3. Zero unresolved high-severity UI/animation diffs.
4. Zero failing parity audits.
5. Only approved low-risk deltas in dual-run transcript comparisons.
