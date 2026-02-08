# Streaming, Ordering, and Backpressure Contract

## Purpose
Define consistent ordering, buffering, and backpressure semantics for all streaming channels.

## Sequence Semantics
- Every streaming message includes a monotonically increasing sequence id.
- Sequence ids are scoped per stream instance.
- Gaps are reported as `sequence_gap` and trigger a resync request.

## Buffer and Backpressure
- Each stream defines a buffer cap and overflow policy.
- Overflow policies are one of:
  - drop_oldest
  - drop_newest
  - block_producer
- Slow consumers trigger `slow_consumer` warnings.

## Reconnect and Resync
- Reconnect requests must include last seen sequence id.
- Resync returns a bounded replay or a full state snapshot.

## Parity Artifacts
- `docs/parity/ipc-channels.json`
- `docs/parity/runtime-schemas.json`
- `docs/parity/critical-flows/thread-turn.md`
- `docs/parity/critical-flows/git.md`
- `docs/parity/critical-flows/automations.md`

## Enforcement
- `node scripts/parity/check-architecture-contracts.js`
- `pnpm run parity:runtime -- --log logs`

## Test Plan
- Verify ordering under concurrency.
- Verify overflow policy for each stream.
- Verify reconnect and resync behavior.
