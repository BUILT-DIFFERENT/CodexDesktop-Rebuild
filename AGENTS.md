# Codex Desktop Rewrite Agent Index

This repository is executing a parity-hard Electron -> Rust/Tauri rewrite.
Agents must preserve behavior, UI, and animation parity while migrating host/runtime and renderer internals.

## Global Instruction

Always use Context7 MCP when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.

## Hard Completion Gate (Non-Negotiable)

A rewrite milestone is only complete when all of the following are true:

1. 100% query/mutation host method coverage against `crates/host-api/src/lib.rs`.
2. 100% git worker method coverage against `docs/parity/worker-git-methods.json`.
3. No unresolved high-severity UI/animation parity diffs in golden flows.
4. No failing parity audit checks.
5. Electron vs Tauri transcript diffs contain only approved, documented low-risk deltas.

## Project Structure Map

- `src/.vite/build/`: Electron host bundles (baseline source of truth).
- `src/webview/`: Electron renderer bundles/assets (baseline source of truth).
- `apps/desktop-tauri/src-tauri/`: Tauri app shell and Rust host wiring.
- `apps/desktop-tauri/web-rewrite/`: incremental renderer rewrite target.
- `apps/desktop-tauri/bridge/`: compatibility shim (`window.electronBridge` surface).
- `crates/host-api/`: shared host request/response contracts and method registries.
- `crates/app-server-bridge/`: JSON-RPC bridge to Codex app-server process.
- `crates/git-worker/`: git worker parity implementation.
- `crates/terminal/`: PTY terminal lifecycle and attach/write/resize/close behavior.
- `crates/state/`: persisted host state adapters.
- `scripts/parity/`: extraction, analysis, and parity validation scripts.
- `docs/parity/`: generated parity artifacts and runtime/flow baselines.
- `docs/rewrite/`: sectioned implementation docs for deep-dive execution.
- `personal/codex/`: personal Codex workspace for iterative notes and reusable task helpers.

## Required Stack Usage Rules

Agents must use the following tools/patterns in rewrite code and tests:

- `zod`: validate runtime data boundaries in TypeScript/frontend integrations.
- `swr`: client-side query caching/revalidation for rewritten frontend data fetching.
- `biome`: formatter+linter with prettier-like conventions (`biome.json` is authoritative).
- `playwright`: renderer/UI automation and parity assertions.
- `@crabnebula/tauri-driver`: desktop driver checks for live Tauri behavior.

## Rewrite Execution Order

1. Harden parity sources and extraction artifacts.
2. Complete Rust/Tauri host method + event parity.
3. Complete worker and terminal parity.
4. Keep renderer in mirror mode until runtime parity gates are clean.
5. Replace renderer internals route-by-route under visual/motion gates.
6. Cut over only when hard completion gate passes.

## Continuous Workflow Improvement (Required)

Agents must continually improve their own execution quality by using `personal/codex/` while working:

1. Before implementation, check `personal/codex/notes/` for relevant prior learnings.
2. During implementation, append concise notes for decisions, pitfalls, and validated commands.
3. When a pattern repeats, add or update a reusable helper under `personal/codex/helpers/`.
4. After completion, refine notes/helpers to a stable version so the next task is faster.

This folder is for agent process acceleration only (notes, snippets, helper scripts, checklists). It must not change external product contracts or bypass parity gates.

## Canonical Parity Sources

Primary parity artifacts and manifests:

- `docs/parity/source-manifest.json`
- `docs/parity/opaque-bundles.json`
- `docs/parity/routes.json`
- `docs/parity/rpc-queries.json`
- `docs/parity/rpc-mutations.json`
- `docs/parity/worker-git-methods.json`
- `docs/parity/ipc-channels.json`
- `docs/parity/runtime-schemas.json`
- `docs/parity/animations.json`

Canonical signal map:

- `signal-parity-map.md` (authoritative)
- `docs/unfinished-signal-parity-map.md` (pointer/reference only)

## Validation Commands

- `pnpm run parity:extract`
- `pnpm run parity:runtime -- --log logs`
- `pnpm run parity:check:sources`
- `pnpm run parity:check:host`
- `pnpm run parity:check:worker`
- `pnpm run parity:check:ui-motion`
- `pnpm run parity:check`
- `pnpm run test:ui`
- `pnpm run test:tauri-driver`
- `pnpm run tauri:check`

## Deep Rewrite Docs

- `docs/rewrite/01-baseline-and-sources.md`
- `docs/rewrite/02-runtime-host-parity.md`
- `docs/rewrite/03-renderer-ui-animation-parity.md`
- `docs/rewrite/04-validation-and-definition-of-done.md`
- `docs/rewrite/05-cutover-and-risk-controls.md`

## Compatibility Contract

The external renderer contract must stay stable during parity work:

- `window.electronBridge` shape and semantics.
- `window.codexWindowType`.

Internal implementation can change as long as this contract and parity gates remain intact.
