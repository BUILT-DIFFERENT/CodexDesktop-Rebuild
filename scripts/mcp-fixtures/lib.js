#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const http = require("http");
const { spawn } = require("child_process");

const projectRoot = path.join(__dirname, "..", "..");
const fixturesRoot = path.join(projectRoot, "scripts", "mcp-fixtures");
const fixturesLogDir = process.env.MCP_FIXTURES_LOG_DIR
  ? path.resolve(process.env.MCP_FIXTURES_LOG_DIR)
  : path.join(projectRoot, "logs", "mcp-fixtures");
const stateFilePath = process.env.MCP_FIXTURES_STATE_FILE
  ? path.resolve(process.env.MCP_FIXTURES_STATE_FILE)
  : path.join(fixturesLogDir, "state.json");

function parseArgs(argv) {
  const args = new Set(argv.slice(2));
  return {
    json: args.has("--json"),
  };
}

function ensureFixturesDir() {
  fs.mkdirSync(fixturesLogDir, { recursive: true });
}

function readState() {
  try {
    const content = fs.readFileSync(stateFilePath, "utf8");
    return JSON.parse(content);
  } catch {
    return null;
  }
}

function writeState(state) {
  ensureFixturesDir();
  fs.writeFileSync(stateFilePath, `${JSON.stringify(state, null, 2)}\n`, "utf8");
}

function clearState() {
  try {
    fs.unlinkSync(stateFilePath);
  } catch {
    // Ignore missing state files.
  }
}

function isProcessAlive(pid) {
  if (!pid || typeof pid !== "number") {
    return false;
  }
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function terminateProcess(pid) {
  if (!isProcessAlive(pid)) {
    return false;
  }
  try {
    process.kill(pid);
    return true;
  } catch {
    return false;
  }
}

function spawnDetachedServer(name, scriptPath, env = {}) {
  ensureFixturesDir();
  const stdoutPath = path.join(fixturesLogDir, `${name}.out.log`);
  const stderrPath = path.join(fixturesLogDir, `${name}.err.log`);
  const outFd = fs.openSync(stdoutPath, "a");
  const errFd = fs.openSync(stderrPath, "a");

  const child = spawn(process.execPath, [scriptPath], {
    cwd: projectRoot,
    detached: true,
    stdio: ["ignore", outFd, errFd],
    env: {
      ...process.env,
      ...env,
    },
  });

  child.unref();
  fs.closeSync(outFd);
  fs.closeSync(errFd);

  return {
    pid: child.pid,
    stdoutPath,
    stderrPath,
  };
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function httpGetJson(url, timeoutMs = 1200) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, { timeout: timeoutMs }, (res) => {
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => {
        const text = Buffer.concat(chunks).toString("utf8");
        try {
          resolve({
            statusCode: res.statusCode || 0,
            body: text.length > 0 ? JSON.parse(text) : null,
          });
        } catch (error) {
          reject(error);
        }
      });
    });
    req.on("timeout", () => req.destroy(new Error("timeout")));
    req.on("error", reject);
  });
}

async function waitForHealth(url, attempts = 20, intervalMs = 250) {
  for (let index = 0; index < attempts; index += 1) {
    try {
      const response = await httpGetJson(url);
      if (response.statusCode >= 200 && response.statusCode < 300) {
        return response.body;
      }
    } catch {
      // Retry while server boots.
    }
    await sleep(intervalMs);
  }
  throw new Error(`Health check failed for ${url}`);
}

module.exports = {
  clearState,
  ensureFixturesDir,
  fixturesLogDir,
  fixturesRoot,
  httpGetJson,
  isProcessAlive,
  parseArgs,
  projectRoot,
  readState,
  sleep,
  spawnDetachedServer,
  stateFilePath,
  terminateProcess,
  waitForHealth,
  writeState,
};
