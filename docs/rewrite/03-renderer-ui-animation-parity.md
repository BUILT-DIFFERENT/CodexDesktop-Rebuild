# 03 - Renderer UI and Animation Parity

## Objective

Preserve exact UI and animation behavior while migrating renderer internals route-by-route.

## Strategy

1. Keep mirror mode: serve existing renderer from `src/webview` until parity gates pass.
2. Build replacements in `apps/desktop-tauri/web-rewrite`.
3. Migrate route-by-route; never do global replacement before route gates are green.

## Required Stack

- `zod` for runtime schema validation at host/UI boundaries.
- `swr` for client-side fetch/cache/revalidate behavior.
- `biome` for formatting/linting (prettier-like conventions in `biome.json`).
- `playwright` for UI checks.
- `@crabnebula/tauri-driver` for desktop-driver runtime checks.

## Animation Parity Rules

- `docs/parity/animations.json` is the baseline for keyframes and CSS variables.
- No animation/token drift is allowed without explicit approved delta records.
- Golden flows must include transition-intensive states (chat streaming, settings transitions, menus, modal surfaces).

## Route Migration Gate

A route can be considered migrated only when all are true:

1. Visual parity checks are green.
2. Animation token/timeline parity checks are green.
3. Interaction behavior parity checks are green.
4. No unresolved high-severity regressions in the route.
