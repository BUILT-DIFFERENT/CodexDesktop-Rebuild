# Contract Source of Truth and Drift Prevention

## Purpose
Prevent schema drift between Rust host contracts and TS runtime validation.

## Source of Truth
- Rust `crates/host-api/src/lib.rs` is the authoritative registry for host methods.
- TS Zod schemas must be derived from or validated against Rust schemas.

## Drift Prevention
- Add a build or CI gate that fails if Rust and TS contracts diverge.
- Schema validation runs on both request and response boundaries.

## Required Outputs
- Generated or validated schema artifacts committed in `docs/parity/runtime-schemas.json`.

## Parity Artifacts
- `docs/parity/runtime-schemas.json`
- `docs/parity/rpc-queries.json`
- `docs/parity/rpc-mutations.json`

## Enforcement
- `node scripts/parity/check-architecture-contracts.js`
- `pnpm run parity:check:host`

## Test Plan
- Fails build on mismatched schema hash.
- Validates sample payloads for each query and mutation.
