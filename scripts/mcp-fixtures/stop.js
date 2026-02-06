#!/usr/bin/env node
"use strict";

const { parseArgs, readState, clearState, terminateProcess, isProcessAlive, stateFilePath } = require("./lib");

function outputResult(asJson, payload, fallbackText) {
  if (asJson) {
    process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);
  } else {
    process.stdout.write(`${fallbackText}\n`);
  }
}

function main() {
  const cli = parseArgs(process.argv);
  const state = readState();
  if (!state) {
    outputResult(
      cli.json,
      {
        status: "not-running",
        stateFile: stateFilePath,
      },
      "No fixture state found. Nothing to stop.",
    );
    return;
  }

  const httpPid = state.fixtures?.http?.pid;
  const failingPid = state.fixtures?.failing?.pid;

  const results = {
    http: {
      pid: httpPid ?? null,
      wasAlive: isProcessAlive(httpPid),
      terminated: terminateProcess(httpPid),
    },
    failing: {
      pid: failingPid ?? null,
      wasAlive: isProcessAlive(failingPid),
      terminated: terminateProcess(failingPid),
    },
  };

  clearState();

  outputResult(
    cli.json,
    {
      status: "stopped",
      stateFile: stateFilePath,
      results,
    },
    [
      "Stopped MCP fixtures.",
      `- http pid=${results.http.pid ?? "n/a"} terminated=${results.http.terminated}`,
      `- failing pid=${results.failing.pid ?? "n/a"} terminated=${results.failing.terminated}`,
      `- state file removed: ${stateFilePath}`,
    ].join("\n"),
  );
}

main();

