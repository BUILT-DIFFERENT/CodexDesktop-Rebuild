# State Persistence Parity

## Purpose
Define storage, migration, and concurrency semantics for state persistence.

## Storage Rules
- Define storage location and structure per platform.
- Define versioning and migration flow.
- Define default initialization for missing or corrupt state.

## Concurrency
- Define write ordering and conflict resolution.
- Define behavior for concurrent writes and app crash recovery.

## Reset and Repair
- Define reset semantics and user-visible behavior.
- Define repair behavior on schema mismatch.

## Parity Artifacts
- `docs/parity/runtime-schemas.json`
- `docs/parity/critical-flows/login.md`
- `docs/parity/critical-flows/thread-turn.md`

## Enforcement
- `node scripts/parity/check-architecture-contracts.js`
- `pnpm run parity:runtime -- --log logs`

## Test Plan
- Migration tests across versions.
- Corrupt state recovery tests.
- Concurrent write tests.
