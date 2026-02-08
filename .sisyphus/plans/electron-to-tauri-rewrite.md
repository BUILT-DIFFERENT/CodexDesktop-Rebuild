# Codex Desktop: Electron → Rust/Tauri Rewrite Plan (Architecture-First, Concrete)

## Purpose
Deliver a parity-hard rewrite by locking architecture, runtime contracts, and lifecycle semantics before renderer replacement. This plan is executable, testable, and tied to existing parity artifacts.

---

## Architecture Spec (Authoritative)
These are required documents and tests that define the system, not optional prose.

### A1. Runtime Topology Contract
- Create `docs/rewrite/runtime-topology.md`.
- Must include a concrete graph and message flow covering:
  - Renderer (mirror + rewrite)
  - Tauri host
  - App-server bridge
  - Git worker
  - Terminal service
  - State persistence
- Must specify ownership and lifecycle of channels, including window/workspace/thread scopes.

### A2. Event Routing Contract
- Create `docs/rewrite/event-routing.md`.
- Must specify:
  - Event type → routing scope mapping
  - Subscription lifecycle and cleanup on window close
  - Error behavior on stale/unknown targets
  - Fanout limits and default behavior

### A3. Streaming, Ordering, Backpressure
- Create `docs/rewrite/streaming-contract.md`.
- Must specify:
  - Sequence ID semantics
  - Per-channel buffer caps
  - Drop policy and retry semantics
  - Slow consumer behavior
  - Reconnect/resync behavior

### A4. Contract Source of Truth
- Create `docs/rewrite/contract-sync.md`.
- Must specify:
  - Schema source of truth (Rust or TS)
  - Generation or validation step to prevent drift
  - Build or CI gate that fails on divergence

### A5. State Persistence Parity
- Create `docs/rewrite/state-parity.md`.
- Must specify:
  - Storage location, versioning, and migration rules
  - Concurrency and conflict behavior
  - Defaults and reset semantics

### A6. Window Lifecycle Parity
- Create `docs/rewrite/window-lifecycle.md`.
- Must specify:
  - Window creation policies and window types
  - Focus, visibility, and restore rules
  - Close/crash/restart behavior
  - Bounds persistence and multi-display behavior

### A7. Security + Capability Boundaries
- Create `docs/rewrite/security-capabilities.md`.
- Must specify:
  - Tauri capability/permission mapping per command/event
  - Shell/FS/env access rules and allowlists
  - Bridge input validation + rejection behavior
  - Secrets handling and redaction rules

### A8. Process + Resource Lifecycle
- Create `docs/rewrite/process-lifecycle.md`.
- Must specify:
  - App-server spawn/attach/retry policy
  - Git worker lifecycle, watchdogs, and failure recovery
  - Terminal session ownership, cleanup, and leak prevention

### A9. Error Taxonomy + Observability
- Create `docs/rewrite/error-observability.md`.
- Must specify:
  - Canonical error codes and mapping across Rust/TS
  - Logging/telemetry boundaries and redaction policy
  - Panic/exception handling with user-facing fallbacks

### A10. Performance + Capacity Budgets
- Create `docs/rewrite/perf-capacity.md`.
- Must specify:
  - IPC/event throughput targets and upper bounds
  - Max payload sizes and throttling policy
  - Memory growth controls for caches/buffers

**Exit Gate (Architecture Spec)**
- All ten docs exist.
- Each doc has a matching test plan section.
- Link each spec to at least one parity artifact or check.
- `pnpm run parity:check:architecture` passes.

---

## Phase 0: Parity Baseline Freeze
**Goal**: lock reference artifacts before touching runtime logic.

**Tasks**
- Run `pnpm run parity:extract`.
- Run `pnpm run parity:check:sources`.
- Verify artifacts listed in `docs/parity/feature-contract.md` are present and current.
- Record baseline commit SHA in `docs/rewrite/01-baseline-and-sources.md`.

**Exit Gate**
- `parity:check:sources` passes.
- `docs/parity/source-manifest.json` has zero missing.

---

## Phase 1: Contract Enforcement Foundations
**Goal**: enforce request/response correctness at boundaries.

**Tasks**
- Confirm `crates/host-api/src/lib.rs` is authoritative for host methods.
- Implement runtime validation on both sides.
  - Rust validates incoming requests and outgoing responses.
  - TS validates responses/events before use (Zod).
- Add a drift check based on A4 contract source of truth.
- Implement security/capability checks per A7 (deny-by-default).
- Establish error taxonomy and mapping per A9.

**Exit Gate**
- Contract validation tests pass for representative payloads.
- Drift check fails if Rust and TS schemas diverge.
- Security/capability tests enforce allowlists and reject unknown inputs.

---

## Phase 2: Runtime Semantics Parity (Host, Events, Bridge)
**Goal**: match real behavior, not just method coverage.

**Tasks**
- Refactor host wiring for clarity and testability in `apps/desktop-tauri/src-tauri/`.
- Implement event routing and scoping per A2.
- Implement streaming/ordering/backpressure per A3.
- Define app-server bridge request/response envelope parity in `crates/app-server-bridge/`.
- Update `signal-parity-map.md` with finalized Tauri equivalents for any resolved signals.
- Implement app-server/worker process lifecycle policies per A8 (restart, backoff, crash handling).

**Exit Gate**
- `pnpm run parity:check:host` passes.
- Event routing tests cover scope attach/detach and stale target behavior.
- Streaming tests validate ordering and backpressure policies.
- Process lifecycle tests cover crash/reconnect behavior.

---

## Phase 3: Worker + Terminal Parity
**Goal**: align behavior under real workloads.

**Tasks**
- Git worker:
  - Ensure method coverage against `docs/parity/worker-git-methods.json`.
  - Add integration tests for failure modes.
- Terminal:
  - Validate create/attach/write/resize/close semantics.
  - Enforce buffer bounds and ordering rules.
  - Enforce permission/capability guards per A7.

**Exit Gate**
- `pnpm run parity:check:worker` passes.
- Terminal integration tests pass.

---

## Phase 4: State and Window Parity
**Goal**: eliminate lifecycle and persistence regressions.

**Tasks**
- Implement and test `crates/state/` rules per A5.
- Validate window lifecycle per A6 under common flows.
- Add perf/capacity guardrails per A10 on state caches/buffers.

**Exit Gate**
- Dedicated state tests pass.
- Window lifecycle parity tests pass.

---

## Phase 5: Runtime Gate Consolidation
**Goal**: freeze runtime behavior before renderer changes.

**Tasks**
- Run `pnpm run parity:check`.
- Run `pnpm run parity:runtime -- --log logs` and classify diffs.
- Maintain `docs/parity/approved-deltas.md` for allowed differences.
- Validate error taxonomy + observability coverage per A9.

**Exit Gate**
- All parity checks green.
- Runtime transcript diffs only include approved, documented deltas.

---

## Phase 6: Test Infrastructure (UI + Driver)
**Goal**: establish reliable UI and driver automation.

**Tasks**
- Playwright baseline tests for mirror mode.
- Tauri driver setup and smoke tests.

**Exit Gate**
- `pnpm run test:ui -- --list` works.
- `pnpm run test:tauri-driver -- --list` works.

---

## Phase 7: Mirror Mode UI Parity
**Goal**: verify renderer behavior without rewriting internals.

**Tasks**
- Generate route tests from `docs/parity/routes.json`.
- Verify animations and critical CSS variables.

**Exit Gate**
- `pnpm run test:ui` passes.
- `pnpm run parity:check:ui-motion` passes.

---

## Phase 8: Renderer Replacement (Route-by-Route)
**Goal**: replace renderer only after runtime parity is locked.

**Tasks**
- Build bridge hooks using SWR + Zod in `apps/desktop-tauri/web-rewrite/`.
- Migrate routes in batches.
- Maintain `docs/rewrite/route-migration-status.md` tied to `docs/parity/routes.json`.

**Exit Gate (per batch)**
- Visual diffs below threshold.
- `test:ui` and `parity:check:ui-motion` remain green.

---

## Phase 9: Cutover + Rollback
**Goal**: finalize Tauri cutover with safe rollback.

**Tasks**
- Switch `frontendDist` to web-rewrite.
- Keep mirror mode available for rollback.
- Document rollback steps and verify both modes boot.

**Exit Gate**
- Hard completion gate passes.
- Rollback verified.

---

## Hard Completion Gate (Non-Negotiable)
1. 100% query/mutation host method coverage against `crates/host-api/src/lib.rs`.
2. 100% git worker method coverage against `docs/parity/worker-git-methods.json`.
3. No unresolved high-severity UI/animation parity diffs in golden flows.
4. No failing parity audit checks.
5. Electron vs Tauri transcript diffs contain only approved, documented low-risk deltas.

---

## Validation Commands
```bash
pnpm run parity:extract
pnpm run parity:check:sources
pnpm run parity:check
pnpm run parity:runtime -- --log logs
pnpm run parity:check:host
pnpm run parity:check:worker
pnpm run parity:check:ui-motion
pnpm run parity:check:architecture
pnpm run test:ui
pnpm run test:tauri-driver
pnpm run tauri:check
cargo check -p host-api -p state -p terminal -p git-worker -p desktop-tauri
cargo fmt --all -- --check
pnpm run lint
```

---

## QA and Evidence (Mandatory)
- Save evidence under `.sisyphus/evidence/`.
- Each phase produces a summary file plus referenced raw logs.
