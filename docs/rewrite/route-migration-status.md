# Route Migration Status

This ledger tracks route-level migration progress against `docs/parity/routes.json`.

## Status Values

- `mirror`: still served from Electron baseline renderer assets.
- `in-progress`: rewrite implementation started but route gate not complete.
- `candidate`: implementation complete, parity evidence pending final review.
- `parity-green`: all route migration gate checks passed and reviewed.

## Required Evidence Per Route

- Playwright visual parity output reference.
- UI motion parity output reference (`parity:check:ui-motion` or route-specific equivalent).
- Interaction behavior parity evidence (script/test logs).
- Open high-severity regressions count = 0.

## Ledger

| Route | Status | Evidence Links | Last Verified (UTC) | Notes |
|---|---|---|---|---|
| `/` | mirror | n/a | n/a | Populate from `docs/parity/routes.json`. |
