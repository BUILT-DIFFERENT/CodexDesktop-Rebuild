# Sourcemap Extraction and App Analysis Notes

## Script updates

The runner now supports sourcemap extraction:

- Added `-ExtractSourceMaps` and `-SourceMapOutDir` in `scripts/run.ps1`.
- Added `Export-SourceMaps`:
  - scans `*.js`, `*.mjs`, `*.cjs`, `*.css` for `sourceMappingURL`
  - extracts inline data-URI sourcemaps
  - copies referenced local `.map` files when present
  - writes:
    - `work/sourcemaps/manifest.json`
    - `work/sourcemaps/missing.txt`
- Integrated sourcemap extraction into run flow before preload patching.

## How to run

Default output directory (`work/sourcemaps`):

```powershell
.\scripts\run.ps1 -Reuse -NoLaunch -ExtractSourceMaps
```

Custom output directory:

```powershell
.\scripts\run.ps1 -Reuse -NoLaunch -ExtractSourceMaps -SourceMapOutDir .\work\maps
```

## Validation results (current build)

From `work/sourcemaps/manifest.json`:

- `scannedFiles`: `480`
- `sourceMapDirectives`: `451`
- `copiedMaps`: `0`
- `inlineMaps`: `0`
- `missingMaps`: `451`
- `remoteReferences`: `0`
- `invalidDataUris`: `0`

Conclusion: this build references sourcemaps but does not ship them.

## Useful internals you can still extract (without sourcemaps)

### Build/runtime metadata

- App name/version/main entrypoint and build flavor/number:
  - `work/app/package.json:2`
  - `work/app/package.json:4`
  - `work/app/package.json:6`
  - `work/app/package.json:79`
  - `work/app/package.json:80`
- Runtime/deps show Electron + native modules:
  - `work/app/package.json:45` (`electron`)
  - `work/app/package.json:63` (`better-sqlite3`)
  - `work/app/package.json:71` (`node-pty`)

### Renderer bootstrap + network policy

- Renderer entry script:
  - `work/app/webview/index.html:9`
- CSP `connect-src` targets:
  - `work/app/webview/index.html:11`

### Main/renderer bridge surface

- Exposed bridge and IPC channels:
  - `work/app/.vite/build/preload.js:1`
- Channels include:
  - `codex_desktop:show-context-menu`
  - `codex_desktop:get-sentry-init-options`
  - `codex_desktop:get-build-flavor`
  - `codex_desktop:message-from-view`
  - `codex_desktop:message-for-view`

### Internal app-server RPC behavior

- Main bundle shows internal methods such as:
  - `skills/list`
  - `config/read`
  - `getAuthStatus`
  - `thread/start`
  - `turn/start`
  - `turn/interrupt`
- Location:
  - `work/app/.vite/build/main-CQwPb0Th.js:530`

### CLI and local storage behavior

- Local CLI override path support (`CODEX_CLI_PATH`):
  - `work/app/.vite/build/main-CQwPb0Th.js:530`
- Local DB naming behavior (`codex.db` vs `codex-dev.db`):
  - `work/app/.vite/build/main-CQwPb0Th.js:37`

### Service and docs endpoints in UI bundle

- Example endpoints/docs visible in compiled UI:
  - `https://chatgpt.com/codex`
  - `https://ab.chatgpt.com/v1`
  - `https://api.statsigcdn.com/v1`
  - `https://platform.openai.com/api-keys`
  - `https://developers.openai.com/codex/`
- Located in:
  - `work/app/webview/assets/index-CgwAo6pj.js:107`
  - `work/app/webview/assets/index-CgwAo6pj.js:1620`
  - `work/app/webview/assets/index-CgwAo6pj.js:2843`
  - `work/app/webview/assets/index-CgwAo6pj.js:2859`
