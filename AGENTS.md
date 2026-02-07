# Codex Desktop Official App Verification Workflow (Playwright)

This document records the exact end-to-end workflow used to verify Codex Desktop UI control and functionality using Playwright.

## Goal

Prove we can:

1. Launch the Codex Desktop app in debug mode.
2. Attach Playwright to the renderer.
3. Control UI elements (click/type/submit).
4. Capture UI screenshots as artifacts.
5. Validate the typed/submitted content is present in the app DOM.

## Environment

- OS: Windows
- Repo root: `C:\Users\gamer\Documents\Theoden\third_party\CodexDesktop-Rebuild`
- Shell: PowerShell
- Node: `v22.20.0`
- pnpm: `10.28.2`

## Prerequisites

1. Ensure `npx` is available:

```powershell
Get-Command npx
```

2. Ensure Playwright skill wrapper exists:

```powershell
Get-ChildItem C:\Users\gamer\.codex\skills\playwright\scripts
```

3. Install dependencies so `codex.exe` is available from `@cometix/codex`:

```powershell
pnpm install
```

4. Confirm CLI binary exists after install:

```powershell
Test-Path .\node_modules\@cometix\codex\vendor\x86_64-pc-windows-msvc\codex\codex.exe
```

Expected: `True`

## Step 1: Launch official app in debug mode

Start the app (keep this terminal running):

```powershell
pnpm run dev:debug
```

Expected key output:

- `Main inspector: ws://127.0.0.1:9229`
- `Renderer inspector: http://127.0.0.1:9223`
- `CLI Path: ...\node_modules\@cometix\codex\vendor\x86_64-pc-windows-msvc\codex\codex.exe`

This confirms the app is running and exposes a renderer CDP endpoint for Playwright attachment.

## Step 2: Attach Playwright and enumerate renderer targets

In a second terminal:

```powershell
pnpm run debug:ui -- list
```

Observed output included:

- `0: devtools://...`
- `1: app://-/index.html`

This confirms Playwright attached to the running Electron renderer and detected the app UI.

## Step 3: Capture baseline UI screenshot

```powershell
pnpm run debug:ui -- screenshot logs/screenshots/renderer-main.png --full-page
```

Expected output:

- `screenshot: logs/screenshots/renderer-main.png`

## Step 4: Control the app UI (click + type + submit)

1. Start a new thread:

```powershell
pnpm run debug:ui -- click "button:has-text('New thread')"
```

2. Type into the composer editor:

```powershell
pnpm run debug:ui -- type ".ProseMirror" "Playwright skill verification: controlling Codex Desktop renderer from CLI."
```

3. Capture state after typing:

```powershell
pnpm run debug:ui -- screenshot logs/screenshots/renderer-typed.png --full-page
```

4. Submit with Enter:

```powershell
pnpm run debug:ui -- press Enter
```

5. Capture state after submit:

```powershell
pnpm run debug:ui -- screenshot logs/screenshots/renderer-after-enter.png --full-page
```

## Step 5: Functional assertion (DOM content check)

Run:

```powershell
pnpm run debug:ui -- eval "(() => { const body = document.body?.innerText || ''; return { containsMessage: body.includes('Playwright skill verification: controlling Codex Desktop renderer from CLI.'), containsPrefix: body.includes('Playwright skill verification') }; })()"
```

Observed result:

```json
{
  "containsMessage": true,
  "containsPrefix": true
}
```

This confirms the automation-controlled message was present in the app after submit.

## Artifacts Captured

- `logs/screenshots/renderer-main.png`
- `logs/screenshots/renderer-typed.png`
- `logs/screenshots/renderer-after-enter.png`

## Cleanup

Stop the debug app session by terminating the `pnpm run dev:debug` terminal (Ctrl+C). If background Electron/Node processes remain, terminate them from PowerShell.

## Notes

- The primary app automation path in this repo is `pnpm run debug:ui -- ...`, implemented by `scripts/debug-renderer-playwright.js`.
- This script connects Playwright to `http://127.0.0.1:9223` (renderer CDP) exposed by `pnpm run dev:debug`.
- A warning about unknown npm config keys may appear during `npx` execution; it does not block the workflow.
