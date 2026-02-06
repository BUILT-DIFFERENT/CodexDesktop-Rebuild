#!/usr/bin/env node
/**
 * Debug development startup script.
 * - Starts Electron with Node inspector enabled for main process
 * - Uses debug entrypoint that loads main-process tracing hook
 * - Streams main stdout/stderr to terminal and logs/dev-debug-*.log
 */

const { spawn } = require("child_process");
const path = require("path");
const os = require("os");
const fs = require("fs");

const projectRoot = path.join(__dirname, "..");

const platform = process.platform;
const arch = os.arch();

const platformMap = {
  darwin: { x64: "darwin-x64", arm64: "darwin-arm64" },
  linux: { x64: "linux-x64", arm64: "linux-arm64" },
  win32: { x64: "win32-x64" },
};

const binDir = platformMap[platform]?.[arch];
if (!binDir) {
  console.error(`[dev:debug] Unsupported platform/arch: ${platform}/${arch}`);
  process.exit(1);
}

const targetTripleMap = {
  "darwin-arm64": "aarch64-apple-darwin",
  "darwin-x64": "x86_64-apple-darwin",
  "linux-arm64": "aarch64-unknown-linux-musl",
  "linux-x64": "x86_64-unknown-linux-musl",
  "win32-x64": "x86_64-pc-windows-msvc",
};

function resolveCliPath() {
  const cliName = platform === "win32" ? "codex.exe" : "codex";
  const platformArch = `${platform}-${arch}`;

  const localPath = path.join(projectRoot, "resources", "bin", binDir, cliName);
  if (fs.existsSync(localPath)) {
    return localPath;
  }

  const targetTriple = targetTripleMap[platformArch];
  if (targetTriple) {
    const npmPath = path.join(
      projectRoot,
      "node_modules",
      "@cometix",
      "codex",
      "vendor",
      targetTriple,
      "codex",
      cliName,
    );
    if (fs.existsSync(npmPath)) {
      return npmPath;
    }
  }

  return null;
}

const cliPath = resolveCliPath();
if (!cliPath) {
  console.error("[dev:debug] CLI not found in resources/bin or node_modules/@cometix/codex");
  process.exit(1);
}

const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const logDir = path.join(projectRoot, "logs");
fs.mkdirSync(logDir, { recursive: true });
const logFile = path.join(logDir, `dev-debug-${timestamp}.log`);
const logStream = fs.createWriteStream(logFile, { flags: "a" });

const inspectPort = process.env.CODEX_DEBUG_INSPECT_PORT || "9229";
const rendererInspectPort = process.env.CODEX_DEBUG_RENDERER_INSPECT_PORT || "9223";
const debugEntryPath = path.join(__dirname, "electron-debug-entry.js");
const nodeOptions = process.env.NODE_OPTIONS || "";

const electronBin = require("electron");

console.log(`[dev:debug] Platform: ${platform}, Arch: ${arch}`);
console.log(`[dev:debug] CLI Path: ${cliPath}`);
console.log(`[dev:debug] Main inspector: ws://127.0.0.1:${inspectPort}`);
console.log(`[dev:debug] Renderer inspector: http://127.0.0.1:${rendererInspectPort}`);
console.log(`[dev:debug] Log file: ${logFile}`);

function writeLog(text) {
  const line = String(text);
  logStream.write(line);
}

const child = spawn(electronBin, [`--inspect=${inspectPort}`, debugEntryPath], {
  cwd: projectRoot,
  stdio: ["ignore", "pipe", "pipe"],
  env: {
    ...process.env,
    CODEX_CLI_PATH: cliPath,
    BUILD_FLAVOR: process.env.BUILD_FLAVOR || "dev",
    ELECTRON_RENDERER_URL: process.env.ELECTRON_RENDERER_URL || "app://-/index.html",
    NODE_OPTIONS: nodeOptions,
    ELECTRON_ENABLE_LOGGING: process.env.ELECTRON_ENABLE_LOGGING || "1",
    ELECTRON_ENABLE_STACK_DUMPING: process.env.ELECTRON_ENABLE_STACK_DUMPING || "1",
    CODEX_DEBUG_TRACE: process.env.CODEX_DEBUG_TRACE || "1",
    CODEX_DEBUG_TRACE_IPC: process.env.CODEX_DEBUG_TRACE_IPC || "1",
    CODEX_DEBUG_OPEN_DEVTOOLS: process.env.CODEX_DEBUG_OPEN_DEVTOOLS || "1",
    CODEX_DEBUG_RENDERER_INSPECT_PORT: rendererInspectPort,
    CODEX_DEBUG_LOG_FILE: process.env.CODEX_DEBUG_LOG_FILE || logFile,
  },
});

child.stdout.on("data", (chunk) => {
  process.stdout.write(chunk);
  writeLog(chunk);
});

child.stderr.on("data", (chunk) => {
  process.stderr.write(chunk);
  writeLog(chunk);
});

child.on("error", (error) => {
  console.error(`[dev:debug] Failed to launch Electron: ${error.message}`);
  writeLog(`[dev:debug] launch error: ${error.stack || error}\n`);
  logStream.end();
  process.exit(1);
});

child.on("close", (code) => {
  writeLog(`\n[dev:debug] Electron exited with code ${code}\n`);
  logStream.end();
  process.exit(code || 0);
});
