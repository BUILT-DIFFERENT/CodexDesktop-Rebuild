#!/usr/bin/env node

const { spawn } = require("node:child_process");
const { spawnSync } = require("node:child_process");
const { waitTauriDriverReady } = require("@crabnebula/tauri-driver");
const { z } = require("zod");

const StatusSchema = z.object({
  value: z
    .object({
      ready: z.boolean().optional(),
      message: z.string().optional(),
    })
    .passthrough(),
});

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function commandExists(command) {
  const result =
    process.platform === "win32"
      ? spawnSync("where", [command], { stdio: "ignore", shell: true })
      : spawnSync("which", [command], { stdio: "ignore" });
  return result.status === 0;
}

function checkDriverPrerequisite() {
  if (process.platform === "win32") {
    return {
      required: "msedgedriver",
      available: commandExists("msedgedriver"),
      note: "Windows requires msedgedriver in PATH for tauri-driver sessions.",
    };
  }
  if (process.platform === "linux") {
    return {
      required: "webkit2gtk-driver",
      available: commandExists("webkit2gtk-driver"),
      note: "Linux requires webkit2gtk-driver in PATH for tauri-driver sessions.",
    };
  }
  return {
    required: null,
    available: true,
    note: "No local binary preflight required by this script for current platform.",
  };
}

function killProcessTree(child) {
  if (!child || child.killed) return;
  if (process.platform === "win32") {
    spawn("taskkill", ["/PID", String(child.pid), "/T", "/F"], { stdio: "ignore" });
  } else {
    child.kill("SIGTERM");
  }
}

async function main() {
  const host = process.env.TAURI_DRIVER_HOST || "127.0.0.1";
  const port = Number(process.env.TAURI_DRIVER_PORT || "4444");
  const readinessTimeoutMs = Number(process.env.TAURI_DRIVER_READY_TIMEOUT_MS || "15000");
  const prereq = checkDriverPrerequisite();

  if (!prereq.available) {
    console.log(
      JSON.stringify(
        {
          ok: false,
          skipped: true,
          reason: `missing prerequisite '${prereq.required}' in PATH`,
          note: prereq.note,
        },
        null,
        2
      )
    );
    return;
  }

  const child = spawn("pnpm", ["exec", "tauri-driver", "--port", String(port)], {
    stdio: "pipe",
    shell: true,
    env: process.env,
  });

  let stderr = "";
  child.stderr.on("data", (chunk) => {
    stderr += chunk.toString();
  });

  try {
    await Promise.race([
      waitTauriDriverReady(host, port, 200),
      wait(readinessTimeoutMs).then(() => {
        throw new Error(
          `tauri-driver did not become ready on ${host}:${port} within ${readinessTimeoutMs}ms`
        );
      }),
    ]);
    const res = await fetch(`http://${host}:${port}/status`);
    if (!res.ok) {
      throw new Error(`driver status endpoint returned ${res.status}`);
    }
    const body = await res.json();
    const parsed = StatusSchema.parse(body);
    console.log(
      JSON.stringify(
        {
          ok: true,
          host,
          port,
          ready: parsed.value.ready ?? null,
          message: parsed.value.message ?? null,
        },
        null,
        2
      )
    );
  } finally {
    killProcessTree(child);
    await wait(200);
  }

  if (stderr.length > 0) {
    // Keep stderr visible for troubleshooting without failing by default.
    process.stderr.write(stderr);
  }
}

main().catch((error) => {
  console.error(`[test:tauri-driver] ${error.message}`);
  process.exit(1);
});
