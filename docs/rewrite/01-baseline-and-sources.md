# 01 - Baseline and Sources

## Objective

Define a complete source-of-truth map for parity extraction so no large or partially unminified bundle is ignored.

## Required Inputs

- `src/webview/assets/index-CgwAo6pj.js`
- `src/webview/assets/index-DYqVWCHk.css`
- `src/webview/assets/pdf.worker.min-qwK7q_zL.mjs`
- `tmp/codex-wakaru/unminify-safe/third_party/CodexDesktop-Rebuild/src/.vite/build/main-CQwPb0Th.js`
- `tmp/codex-wakaru/unminify-safe/third_party/CodexDesktop-Rebuild/src/.vite/build/worker.js`
- `tmp/codex-wakaru/unminify-safe/third_party/CodexDesktop-Rebuild/src/.vite/build/preload.js`

## Manifest Outputs

- `docs/parity/source-manifest.json`
  - source class (`original`, `unminify-safe`)
  - extraction status (`ok`, `fallback`, `opaque`, `missing`)
  - size/line/max-line metrics
  - blind-spot reporting for missing unminify-safe renderer sources
- `docs/parity/opaque-bundles.json`
  - explicit heuristics for opaque detection
  - high-risk bundles by max line length and size
- `docs/parity/pdf-worker.json`
  - extracted metadata for PDF worker baseline

## Workflow

1. Run `pnpm run parity:extract`.
2. Confirm `source-manifest.json` has no `missing` required entries.
3. Review `opaque-bundles.json` before claiming reverse-engineering completeness.
4. Use fallback to original bundles when unminify-safe equivalents are absent.

## Failure Conditions

- Required source listed in manifest but unresolved.
- Extraction pipeline ignores known blind-spot files.
- Opaque bundles are not surfaced in artifacts.
