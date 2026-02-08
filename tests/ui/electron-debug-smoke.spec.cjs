const { test, expect, chromium } = require("@playwright/test");
const { spawn } = require("node:child_process");
const path = require("node:path");
const net = require("node:net");
const { z } = require("zod");

const CdpTargetSchema = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  type: z.string().optional(),
  url: z.string().optional(),
  webSocketDebuggerUrl: z.string().optional(),
});

async function waitForPort(host, port, timeoutMs) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const connected = await new Promise((resolve) => {
      const socket = new net.Socket();
      const done = (value) => {
        socket.destroy();
        resolve(value);
      };
      socket.setTimeout(1000);
      socket.once("connect", () => done(true));
      socket.once("timeout", () => done(false));
      socket.once("error", () => done(false));
      socket.connect(port, host);
    });
    if (connected) return;
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Timed out waiting for ${host}:${port}`);
}

function killProcessTree(child) {
  if (!child || child.killed) return;
  if (process.platform === "win32") {
    spawn("taskkill", ["/PID", String(child.pid), "/T", "/F"], { stdio: "ignore" });
  } else {
    child.kill("SIGTERM");
  }
}

test("dev:debug exposes renderer CDP and app page", async () => {
  const repoRoot = path.resolve(__dirname, "..", "..");
  const child = spawn("pnpm", ["run", "dev:debug"], {
    cwd: repoRoot,
    env: {
      ...process.env,
      CODEX_DEBUG_OPEN_DEVTOOLS: "0",
      CODEX_DEBUG_TRACE: "0",
      CODEX_DEBUG_TRACE_IPC: "0",
      CODEX_DEBUG_INSPECT_PORT: "9229",
      CODEX_DEBUG_RENDERER_INSPECT_PORT: "9223",
    },
    stdio: "pipe",
    shell: true,
  });

  let stdout = "";
  let stderr = "";
  child.stdout.on("data", (chunk) => {
    stdout += chunk.toString();
  });
  child.stderr.on("data", (chunk) => {
    stderr += chunk.toString();
  });

  try {
    await waitForPort("127.0.0.1", 9223, 120000);
    const targetResponse = await fetch("http://127.0.0.1:9223/json/list");
    expect(targetResponse.ok).toBeTruthy();
    const targets = z.array(CdpTargetSchema).parse(await targetResponse.json());
    expect(
      targets.some((target) => String(target.url || "").includes("app://-/index.html"))
    ).toBeTruthy();

    const browser = await chromium.connectOverCDP("http://127.0.0.1:9223");
    const contexts = browser.contexts();
    const pages = contexts.flatMap((context) => context.pages());
    const appPage = pages.find((page) => page.url().includes("app://-/index.html"));
    expect(appPage).toBeTruthy();

    await expect.poll(() => appPage.url(), { timeout: 15000 }).toContain("app://-/index.html");
    await expect(appPage.locator("body")).toBeVisible();
    await browser.close();
  } finally {
    killProcessTree(child);
  }

  if (stderr.includes("Failed to launch Electron")) {
    throw new Error(`dev:debug failed.\nstdout:\n${stdout}\nstderr:\n${stderr}`);
  }
});
