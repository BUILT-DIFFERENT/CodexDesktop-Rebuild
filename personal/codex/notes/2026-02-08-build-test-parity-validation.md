# 2026-02-08 Build/Test/Parity Validation Notes

## Scope
- Executed Rust + Tauri rewrite build/test/parity command sequence and captured blockers.

## Key Decisions
- Installed Rust toolchain via `rustup` because `cargo` was missing in environment.
- Ran `pnpm install` before checks since `node_modules` was absent.
- Added explicit bundle icon path in `apps/desktop-tauri/src-tauri/tauri.conf.json` and created `apps/desktop-tauri/src-tauri/icons/icon.png` so `tauri::generate_context!()` could compile.

## Pitfalls / Fixes
- `pnpm run tauri:check` initially failed with missing `cargo` and missing dependencies.
- Tauri compile failed on missing/non-RGBA `icons/icon.png`; fixed by adding a valid RGBA PNG.
- `pnpm run parity:check` failed before extraction; resolved by running `pnpm run parity:extract` first.
- `pnpm run parity:runtime -- --log logs` failed because `logs/` directory was not present.
- `pnpm run test:tauri-driver` skipped because `webkit2gtk-driver` is not in PATH on Linux.

## Validated Commands
- `pnpm install`
- `. "$HOME/.cargo/env" && pnpm run tauri:check`
- `. "$HOME/.cargo/env" && cargo test --workspace`
- `pnpm run parity:extract`
- `pnpm run parity:check`
- `pnpm run web-rewrite:check`
- `. "$HOME/.cargo/env" && cargo build -p desktop-tauri`

## Partial/Blocked Checks
- `pnpm run parity:runtime -- --log logs` (blocked: missing runtime logs input)
- `pnpm run test:ui` (1 failure in Electron debug smoke: CDP port 9223 timeout)
- `pnpm run test:tauri-driver` (skipped: missing `webkit2gtk-driver`)

## 2026-02-08 Environment Runtime Fixes
- Installed Linux prerequisites with sudo:
  - `apt-get install -y libnspr4 libnss3 webkit2gtk-driver xvfb xauth`
- `webkitgtk-webdriver` provides `/usr/bin/WebKitWebDriver`; created compatibility symlink expected by repo script:
  - `/usr/local/bin/webkit2gtk-driver -> /usr/bin/WebKitWebDriver`
- Fixed Electron Linux sandbox helper permissions:
  - `chown root:root node_modules/electron/dist/chrome-sandbox`
  - `chmod 4755 node_modules/electron/dist/chrome-sandbox`

## 2026-02-08 Final Validation Outcome
- `xvfb-run -a pnpm run test:ui` passed all 3 tests (including Electron debug smoke and tauri parity gate).
- `pnpm run parity:runtime -- --log logs` succeeded after NDJSON generation.
- `pnpm run test:tauri-driver` reports `{ ok: true }` but does not terminate on its own in this environment; requires external timeout/process cleanup.
