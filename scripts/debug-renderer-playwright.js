#!/usr/bin/env node
/**
 * Attach Playwright to the Electron renderer over CDP for debug-time
 * UI interaction and screenshots.
 *
 * Start app first:
 *   pnpm run dev:debug
 *
 * Then run commands:
 *   pnpm run debug:ui -- list
 *   pnpm run debug:ui -- click "button:has-text('New Chat')"
 *   pnpm run debug:ui -- type "textarea" "hello world"
 *   pnpm run debug:ui -- press Enter
 *   pnpm run debug:ui -- screenshot
 *   pnpm run debug:ui -- screenshot logs/screenshots/main.png --full-page
 *   pnpm run debug:ui -- screenshot logs/screenshots/input.png --selector "textarea"
 */

const fs = require("fs");
const path = require("path");

function usage() {
  console.log(
    [
      "Usage: pnpm run debug:ui -- <command> [args]",
      "",
      "Commands:",
      "  list",
      "  click <selector>",
      "  type <selector> <text>",
      "  press <key>",
      "  screenshot [outputPath] [--selector <selector>] [--full-page]",
      "  eval <expression>",
      "",
      "Environment:",
      "  CODEX_DEBUG_RENDERER_INSPECT_PORT (default: 9223)",
      "  CODEX_DEBUG_CDP_ENDPOINT (overrides host/port endpoint)",
      "  CODEX_DEBUG_RENDERER_TARGET_URL_MATCH (optional substring filter)",
      "  CODEX_DEBUG_SCREENSHOT_DIR (default: logs/screenshots)",
    ].join("\n"),
  );
}

function readPlaywright() {
  try {
    return require("playwright");
  } catch {
    // Fallback for `npx --package=playwright node ...`, where Playwright
    // is available in a temp node_modules but not in normal resolution paths.
    const pathEntries = String(process.env.PATH || "").split(path.delimiter);
    for (const entry of pathEntries) {
      const candidate = path.join(entry, "..", "playwright", "package.json");
      if (!fs.existsSync(candidate)) {
        continue;
      }
      try {
        return require(path.dirname(candidate));
      } catch {
        // Try next path entry.
      }
    }

    console.error(
      "Playwright package is not available.\n" +
        "Install dependencies with `pnpm install` or run via `npx --yes --package=playwright ...`.",
    );
    process.exit(1);
  }
}

function timestamp() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

function ensureParentDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function parseScreenshotArgs(args, defaultDir) {
  let outputPath = null;
  let selector = null;
  let fullPage = false;

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === "--selector") {
      selector = args[i + 1];
      i += 1;
      continue;
    }
    if (arg === "--full-page") {
      fullPage = true;
      continue;
    }
    if (!outputPath) {
      outputPath = arg;
      continue;
    }
    throw new Error(`Unexpected argument: ${arg}`);
  }

  if (!outputPath) {
    outputPath = path.join(defaultDir, `renderer-${timestamp()}.png`);
  }

  return { outputPath, selector, fullPage };
}

function isUsablePage(page) {
  const url = page.url() || "";
  if (!url) return false;
  if (url.startsWith("devtools://")) return false;
  return true;
}

function pickPage(pages, targetUrlMatch) {
  const candidates = pages.filter(isUsablePage);
  if (candidates.length === 0) {
    return null;
  }

  if (targetUrlMatch) {
    const match = candidates.find((page) => page.url().includes(targetUrlMatch));
    if (match) return match;
  }

  const appLike = candidates.find((page) => !page.url().startsWith("chrome://"));
  return appLike || candidates[0];
}

function assertArg(value, message) {
  if (!value) {
    throw new Error(message);
  }
}

async function run() {
  const command = process.argv[2];
  const args = process.argv.slice(3);

  if (!command || command === "--help" || command === "-h") {
    usage();
    return;
  }

  const { chromium } = readPlaywright();
  const rendererInspectPort = process.env.CODEX_DEBUG_RENDERER_INSPECT_PORT || "9223";
  const endpoint =
    process.env.CODEX_DEBUG_CDP_ENDPOINT || `http://127.0.0.1:${rendererInspectPort}`;
  const targetUrlMatch = process.env.CODEX_DEBUG_RENDERER_TARGET_URL_MATCH || "";
  const screenshotDir =
    process.env.CODEX_DEBUG_SCREENSHOT_DIR || path.join(process.cwd(), "logs", "screenshots");

  let browser;
  try {
    browser = await chromium.connectOverCDP(endpoint);
    const pages = browser.contexts().flatMap((context) => context.pages());
    const page = pickPage(pages, targetUrlMatch);

    if (!page) {
      throw new Error(
        "No renderer page found. Ensure the app is running with `pnpm run dev:debug` and has an open window.",
      );
    }

    if (command === "list") {
      pages.forEach((rendererPage, index) => {
        console.log(`${index}: ${rendererPage.url() || "<empty>"}`);
      });
      return;
    }

    if (command === "click") {
      const selector = args[0];
      assertArg(selector, "click requires <selector>");
      await page.locator(selector).first().click({ timeout: 15000 });
      console.log(`clicked: ${selector}`);
      return;
    }

    if (command === "type") {
      const selector = args[0];
      const text = args.slice(1).join(" ");
      assertArg(selector, "type requires <selector>");
      assertArg(text, "type requires <text>");
      await page.locator(selector).first().fill(text, { timeout: 15000 });
      console.log(`typed into: ${selector}`);
      return;
    }

    if (command === "press") {
      const key = args[0];
      assertArg(key, "press requires <key>");
      await page.keyboard.press(key);
      console.log(`pressed: ${key}`);
      return;
    }

    if (command === "eval") {
      const expression = args.join(" ");
      assertArg(expression, "eval requires <expression>");
      const result = await page.evaluate((source) => {
        return (0, eval)(source);
      }, expression);
      console.log(JSON.stringify(result, null, 2));
      return;
    }

    if (command === "screenshot") {
      const { outputPath, selector, fullPage } = parseScreenshotArgs(args, screenshotDir);
      ensureParentDir(outputPath);
      if (selector) {
        await page.locator(selector).first().screenshot({ path: outputPath });
      } else {
        await page.screenshot({ path: outputPath, fullPage });
      }
      console.log(`screenshot: ${outputPath}`);
      return;
    }

    throw new Error(`Unknown command: ${command}`);
  } catch (error) {
    console.error(String(error && error.stack ? error.stack : error));
    process.exitCode = 1;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

run();
