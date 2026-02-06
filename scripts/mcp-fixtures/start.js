#!/usr/bin/env node
"use strict";

const path = require("path");
const { spawnSync } = require("child_process");
const {
  parseArgs,
  readState,
  writeState,
  clearState,
  isProcessAlive,
  spawnDetachedServer,
  waitForHealth,
  terminateProcess,
  fixturesRoot,
  stateFilePath,
} = require("./lib");

function formatOutput(jsonMode, payload, fallbackText) {
  if (jsonMode) {
    process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);
  } else {
    process.stdout.write(`${fallbackText}\n`);
  }
}

async function main() {
  const cli = parseArgs(process.argv);
  const httpPort = Number(process.env.MCP_HTTP_FIXTURE_PORT || 8787);
  const failingPort = Number(process.env.MCP_FAILING_FIXTURE_PORT || 8788);
  const httpHealthUrl = `http://127.0.0.1:${httpPort}/health`;
  const failingHealthUrl = `http://127.0.0.1:${failingPort}/health`;

  const existingState = readState();
  if (existingState) {
    const httpAlive = isProcessAlive(existingState.fixtures?.http?.pid);
    const failingAlive = isProcessAlive(existingState.fixtures?.failing?.pid);
    if (httpAlive && failingAlive) {
      formatOutput(
        cli.json,
        {
          status: "already-running",
          stateFile: stateFilePath,
          state: existingState,
        },
        "Fixtures already running. Use `pnpm run debug:fixtures:stop` first if needed.",
      );
      return;
    }

    // Stale state: best-effort cleanup before restart.
    terminateProcess(existingState.fixtures?.http?.pid);
    terminateProcess(existingState.fixtures?.failing?.pid);
    clearState();
  }

  const stdioScript = path.join(fixturesRoot, "server-stdio.js");
  const stdioSelfTest = spawnSync(process.execPath, [stdioScript, "--self-test"], {
    encoding: "utf8",
  });
  if (stdioSelfTest.status !== 0) {
    process.stderr.write(
      `stdio fixture self-test failed:\n${stdioSelfTest.stderr || stdioSelfTest.stdout}\n`,
    );
    process.exit(1);
  }

  const httpFixture = spawnDetachedServer("http", path.join(fixturesRoot, "server-http.js"), {
    MCP_HTTP_FIXTURE_PORT: String(httpPort),
  });
  const failingFixture = spawnDetachedServer(
    "failing",
    path.join(fixturesRoot, "server-failing.js"),
    {
      MCP_FAILING_FIXTURE_PORT: String(failingPort),
    },
  );

  let httpHealth;
  let failingHealth;
  try {
    httpHealth = await waitForHealth(httpHealthUrl);
    failingHealth = await waitForHealth(failingHealthUrl);
  } catch (error) {
    terminateProcess(httpFixture.pid);
    terminateProcess(failingFixture.pid);
    clearState();
    process.stderr.write(`Fixture health check failed: ${error.message}\n`);
    process.exit(1);
  }

  const state = {
    schemaVersion: "1.0",
    startedAt: new Date().toISOString(),
    fixtures: {
      stdio: {
        script: stdioScript,
        selfTestStatus: "ok",
      },
      http: {
        pid: httpFixture.pid,
        port: httpPort,
        healthUrl: httpHealthUrl,
        stdoutPath: httpFixture.stdoutPath,
        stderrPath: httpFixture.stderrPath,
      },
      failing: {
        pid: failingFixture.pid,
        port: failingPort,
        healthUrl: failingHealthUrl,
        stdoutPath: failingFixture.stdoutPath,
        stderrPath: failingFixture.stderrPath,
      },
    },
  };
  writeState(state);

  formatOutput(
    cli.json,
    {
      status: "started",
      stateFile: stateFilePath,
      health: {
        http: httpHealth,
        failing: failingHealth,
      },
      state,
    },
    [
      "Started MCP fixtures (v1).",
      `- stdio fixture script: ${stdioScript}`,
      `- http fixture pid=${httpFixture.pid} health=${httpHealthUrl}`,
      `- failing fixture pid=${failingFixture.pid} health=${failingHealthUrl}`,
      `- state file: ${stateFilePath}`,
    ].join("\n"),
  );
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exit(1);
});

