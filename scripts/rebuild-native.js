#!/usr/bin/env node
const { spawnSync } = require("child_process");
const path = require("path");

const projectRoot = path.join(__dirname, "..");
const patchScript = path.join(__dirname, "patch-node-pty-spectre.js");

function runNode(scriptPath) {
  const result = spawnSync(process.execPath, [scriptPath], {
    cwd: projectRoot,
    stdio: "inherit",
  });
  if (result.status !== 0) process.exit(result.status || 1);
}

function runElectronRebuild() {
  const command = process.platform === "win32" ? "electron-rebuild.cmd" : "electron-rebuild";
  const result = spawnSync(command, [], {
    cwd: projectRoot,
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

runNode(patchScript);
runElectronRebuild();
