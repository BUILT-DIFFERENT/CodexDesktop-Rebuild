#!/usr/bin/env node
"use strict";

const assert = require("assert");
const fs = require("fs");
const path = require("path");
const http = require("http");
const { spawnSync } = require("child_process");
const { REDACTED, redactForLogging, redactString } = require("./debug-redaction");

const projectRoot = path.join(__dirname, "..");
const fixturesStartScript = path.join(projectRoot, "scripts", "mcp-fixtures", "start.js");
const fixturesStopScript = path.join(projectRoot, "scripts", "mcp-fixtures", "stop.js");
const auditScript = path.join(projectRoot, "scripts", "debug-audit", "index.js");
const tempLogDir = path.join(projectRoot, "logs", "debug-harness-verify");
const verifyFixturesLogDir = path.join(tempLogDir, "fixtures");
const verifyFixturesStateFile = path.join(verifyFixturesLogDir, "state.json");

function runNodeScript(scriptPath, args = [], options = {}) {
  return spawnSync(process.execPath, [scriptPath, ...args], {
    cwd: projectRoot,
    encoding: "utf8",
    env: {
      ...process.env,
      ...(options.env || {}),
    },
  });
}

function parseJsonOrThrow(name, text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error(`${name} did not emit valid JSON: ${error.message}\n${text}`);
  }
}

function requestJson({ method, port, pathname, headers = {}, payload = null, timeoutMs = 3000 }) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        host: "127.0.0.1",
        port,
        method,
        path: pathname,
        headers: {
          "content-type": "application/json",
          ...headers,
        },
        timeout: timeoutMs,
      },
      (res) => {
        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => {
          const bodyText = Buffer.concat(chunks).toString("utf8");
          let bodyJson = null;
          const trimmed = bodyText.trim();
          if (trimmed.length > 0) {
            try {
              bodyJson = JSON.parse(trimmed);
            } catch {
              bodyJson = null;
            }
          }
          resolve({
            statusCode: res.statusCode || 0,
            bodyText,
            bodyJson,
          });
        });
      },
    );

    req.on("error", reject);
    req.on("timeout", () => req.destroy(new Error(`request timeout: ${method} ${pathname}`)));

    if (payload !== null) {
      req.write(JSON.stringify(payload));
    }
    req.end();
  });
}

function requestSseReady({ port, headers = {} }) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        host: "127.0.0.1",
        port,
        method: "GET",
        path: "/mcp/stream",
        headers,
        timeout: 3000,
      },
      (res) => {
        const statusCode = res.statusCode || 0;
        if (statusCode !== 200) {
          const chunks = [];
          res.on("data", (chunk) => chunks.push(chunk));
          res.on("end", () => {
            resolve({
              statusCode,
              bodyText: Buffer.concat(chunks).toString("utf8"),
            });
          });
          return;
        }

        const chunks = [];
        const finalize = () => {
          const bodyText = Buffer.concat(chunks).toString("utf8");
          resolve({ statusCode, bodyText });
          req.destroy();
        };

        res.on("data", (chunk) => {
          chunks.push(chunk);
          const text = Buffer.concat(chunks).toString("utf8");
          if (text.includes("event: ready")) {
            finalize();
          }
        });
        res.on("end", finalize);
      },
    );

    req.on("error", reject);
    req.on("timeout", () => req.destroy(new Error("SSE request timeout")));
    req.end();
  });
}

function createBaseEvent(partial = {}) {
  return {
    schemaVersion: "1.0",
    runId: "verify-run-1",
    sessionId: "verify-session-1",
    pid: process.pid,
    appFlavor: "dev",
    ts: new Date().toISOString(),
    direction: "ipcMain.handle.in",
    channel: "codex_desktop:message-from-view",
    method: null,
    type: null,
    threadId: "thread-1",
    turnId: "turn-1",
    requestId: "req-1",
    status: "ok",
    rawPreview: "{\"ok\":true}",
    ...partial,
  };
}

function writeNdjson(filePath, events) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  const data = events.map((event) => JSON.stringify(event)).join("\n");
  fs.writeFileSync(filePath, `${data}\n`, "utf8");
}

function verifyRedaction() {
  const redactedHeaders = redactForLogging({
    Authorization: "Bearer very-secret-token",
    Cookie: "sid=abc123; theme=dark",
    "X-API-Key": "top-secret-api-key",
  });
  assert.strictEqual(redactedHeaders.Authorization, "Bearer <redacted>");
  assert.strictEqual(redactedHeaders.Cookie, "sid=<redacted>; theme=<redacted>");
  assert.strictEqual(redactedHeaders["X-API-Key"], REDACTED);

  const redactedNested = redactForLogging({
    credentials: {
      apiKey: "abcdef1234567890",
      password: "hunter2",
    },
    value: "Bearer some.long.token.value",
    jwt: "eyJhbGciOiJub25lIn0.eyJzdWIiOiJhYmMifQ.aaaaaaaaaaaaaaaa",
  });

  const nestedString = JSON.stringify(redactedNested);
  assert(!nestedString.includes("hunter2"), "password should not leak");
  assert(!nestedString.includes("abcdef1234567890"), "api key should not leak");
  assert(!nestedString.includes("some.long.token.value"), "bearer token should not leak");
  assert(!nestedString.includes("eyJhbGciOiJub25lIn0"), "JWT should not leak");

  const redactedCookie = redactString("cookie: sid=abc; theme=dark");
  assert(redactedCookie.includes("sid=<redacted>"), "cookie key should be preserved");
  assert(redactedCookie.includes("theme=<redacted>"), "cookie values should be masked");
}

async function verifyFixtures() {
  const randomBasePort = 9200 + Math.floor(Math.random() * 300);
  const env = {
    MCP_HTTP_FIXTURE_PORT: String(randomBasePort),
    MCP_FAILING_FIXTURE_PORT: String(randomBasePort + 1),
    MCP_HTTP_REQUIRED_HEADER: "verify-header-token",
    MCP_HTTP_BEARER_TOKEN: "verify-bearer-token",
    MCP_FAILING_TIMEOUT_MS: "150",
    MCP_FAILING_RETRY_SUCCESS_THRESHOLD: "3",
    MCP_FIXTURES_LOG_DIR: verifyFixturesLogDir,
    MCP_FIXTURES_STATE_FILE: verifyFixturesStateFile,
  };

  // Best-effort cleanup in case prior local runs left state behind.
  runNodeScript(fixturesStopScript, ["--json"], { env });

  const startResult = runNodeScript(fixturesStartScript, ["--json"], { env });
  if (startResult.status !== 0) {
    throw new Error(`fixtures start failed:\n${startResult.stderr || startResult.stdout}`);
  }
  const startPayload = parseJsonOrThrow("fixtures:start", startResult.stdout);
  assert.strictEqual(startPayload.status, "started");
  assert.strictEqual(startPayload.state.fixtures.http.port, randomBasePort);
  assert.strictEqual(startPayload.state.fixtures.failing.port, randomBasePort + 1);

  try {
    const unauthorized = await requestJson({
      method: "POST",
      port: randomBasePort,
      pathname: "/mcp",
      payload: { jsonrpc: "2.0", id: "unauth-1", method: "initialize", params: {} },
    });
    assert.strictEqual(unauthorized.statusCode, 401);

    const headerAuthed = await requestJson({
      method: "POST",
      port: randomBasePort,
      pathname: "/mcp",
      headers: { "x-debug-auth": env.MCP_HTTP_REQUIRED_HEADER },
      payload: {
        jsonrpc: "2.0",
        id: "whoami-header",
        method: "tools/call",
        params: { name: "whoami", arguments: {} },
      },
    });
    assert.strictEqual(headerAuthed.statusCode, 200);
    assert.strictEqual(
      headerAuthed.bodyJson?.result?.content?.[0]?.text,
      "authMode:header",
      "header auth mode should be reported",
    );

    const bearerAuthed = await requestJson({
      method: "POST",
      port: randomBasePort,
      pathname: "/mcp",
      headers: { Authorization: `Bearer ${env.MCP_HTTP_BEARER_TOKEN}` },
      payload: {
        jsonrpc: "2.0",
        id: "whoami-bearer",
        method: "tools/call",
        params: { name: "whoami", arguments: {} },
      },
    });
    assert.strictEqual(bearerAuthed.statusCode, 200);
    assert.strictEqual(
      bearerAuthed.bodyJson?.result?.content?.[0]?.text,
      "authMode:bearer",
      "bearer auth mode should be reported",
    );

    const explicitError = await requestJson({
      method: "POST",
      port: randomBasePort,
      pathname: "/mcp",
      headers: {
        "x-debug-auth": env.MCP_HTTP_REQUIRED_HEADER,
        "x-fixture-error": "1",
      },
      payload: { jsonrpc: "2.0", id: "transport-error", method: "tools/list", params: {} },
    });
    assert.strictEqual(explicitError.statusCode, 500);

    const unauthorizedStream = await requestSseReady({
      port: randomBasePort,
    });
    assert.strictEqual(unauthorizedStream.statusCode, 401);

    const authorizedStream = await requestSseReady({
      port: randomBasePort,
      headers: { "x-debug-auth": env.MCP_HTTP_REQUIRED_HEADER },
    });
    assert.strictEqual(authorizedStream.statusCode, 200);
    assert(authorizedStream.bodyText.includes("event: ready"));

    const hardError = await requestJson({
      method: "POST",
      port: randomBasePort + 1,
      pathname: "/mcp?mode=hard-error",
      payload: { jsonrpc: "2.0", id: "fail-hard", method: "tools/call", params: {} },
    });
    assert.strictEqual(hardError.statusCode, 503);

    const timeoutError = await requestJson({
      method: "POST",
      port: randomBasePort + 1,
      pathname: "/mcp?mode=timeout",
      payload: { jsonrpc: "2.0", id: "fail-timeout", method: "tools/call", params: {} },
      timeoutMs: 4000,
    });
    assert.strictEqual(timeoutError.statusCode, 504);

    const retryOne = await requestJson({
      method: "POST",
      port: randomBasePort + 1,
      pathname: "/mcp?mode=retry-then-success",
      payload: { jsonrpc: "2.0", id: "retry-case", method: "tools/call", params: {} },
    });
    const retryTwo = await requestJson({
      method: "POST",
      port: randomBasePort + 1,
      pathname: "/mcp?mode=retry-then-success",
      payload: { jsonrpc: "2.0", id: "retry-case", method: "tools/call", params: {} },
    });
    const retryThree = await requestJson({
      method: "POST",
      port: randomBasePort + 1,
      pathname: "/mcp?mode=retry-then-success",
      payload: { jsonrpc: "2.0", id: "retry-case", method: "tools/call", params: {} },
    });

    assert.strictEqual(retryOne.statusCode, 503);
    assert.strictEqual(retryTwo.statusCode, 503);
    assert.strictEqual(retryThree.statusCode, 200);
    assert(
      retryThree.bodyJson?.result?.content?.[0]?.text?.includes("Recovered on attempt 3"),
      "retry mode should recover on third attempt",
    );
  } finally {
    const stopResult = runNodeScript(fixturesStopScript, ["--json"], { env });
    if (stopResult.status !== 0) {
      throw new Error(`fixtures stop failed:\n${stopResult.stderr || stopResult.stdout}`);
    }
    const stopPayload = parseJsonOrThrow("fixtures:stop", stopResult.stdout);
    assert(
      stopPayload.status === "stopped" || stopPayload.status === "not-running",
      "fixtures stop should succeed",
    );
  }
}

function verifyAudit() {
  const passingLogPath = path.join(tempLogDir, "audit-pass.ndjson");
  const failingLogPath = path.join(tempLogDir, "audit-fail.ndjson");

  const passingEvents = [
    createBaseEvent({ method: "thread/start", requestId: "t1" }),
    createBaseEvent({ method: "thread/resume", requestId: "t2" }),
    createBaseEvent({ method: "thread/list", requestId: "t3" }),
    createBaseEvent({ method: "thread/read", requestId: "t4" }),
    createBaseEvent({ method: "thread/archive", requestId: "t5" }),
    createBaseEvent({ method: "thread/unarchive", requestId: "t6" }),
    createBaseEvent({ method: "turn/start", requestId: "u1", turnId: "turn-2" }),
    createBaseEvent({ method: "turn/interrupt", requestId: "u2", turnId: "turn-2" }),
    createBaseEvent({ method: "turn/completed", requestId: "u3", turnId: "turn-2" }),
    createBaseEvent({ method: "item/agentMessage/delta", requestId: "u4", turnId: "turn-2" }),
    createBaseEvent({
      method: "item/commandExecution/requestApproval",
      direction: "ipcMain.handle.in",
      requestId: "a1",
    }),
    createBaseEvent({
      method: "item/fileChange/requestApproval",
      direction: "ipcMain.handle.in",
      requestId: "a2",
    }),
    createBaseEvent({
      method: "item/commandExecution/requestApproval",
      direction: "ipcMain.handle.out",
      requestId: "a1",
      type: "mcp-response",
      rawPreview: "{\"method\":\"execCommandApproval\",\"approved\":true}",
    }),
    createBaseEvent({ method: "getAuthStatus", requestId: "m1" }),
    createBaseEvent({ method: "mcpServerStatus/list", requestId: "m2" }),
    createBaseEvent({
      method: null,
      requestId: "m3",
      rawPreview: "{\"error\":\"401 Unauthorized\"}",
      status: "error",
    }),
    createBaseEvent({
      method: null,
      requestId: "m4",
      rawPreview: "{\"content\":[{\"text\":\"authMode:bearer\"}]}",
      status: "ok",
    }),
  ];

  writeNdjson(passingLogPath, passingEvents);

  const passResult = runNodeScript(auditScript, ["--log", passingLogPath, "--json"]);
  if (passResult.status !== 0) {
    throw new Error(`audit pass case failed:\n${passResult.stderr || passResult.stdout}`);
  }
  const passPayload = parseJsonOrThrow("debug:audit pass", passResult.stdout);
  assert.strictEqual(passPayload.schemaVersion, "1.0");
  assert.strictEqual(passPayload.runId, "verify-run-1");
  assert(passPayload.summary, "summary must exist");
  assert(Array.isArray(passPayload.checks), "checks must be an array");
  assert.strictEqual(passPayload.summary.failed, 0, "pass fixture log should pass all checks");

  const mismatchEvents = passingEvents.map((event) => ({ ...event }));
  mismatchEvents[0] = { ...mismatchEvents[0], schemaVersion: "0.9" };
  writeNdjson(failingLogPath, mismatchEvents);

  const failResult = runNodeScript(auditScript, ["--log", failingLogPath, "--json"]);
  assert.notStrictEqual(failResult.status, 0, "schema mismatch should fail audit");
  const failPayload = parseJsonOrThrow("debug:audit fail", failResult.stdout);
  const schemaCheck = failPayload.checks.find((check) => check.id === "schema-contract");
  assert(schemaCheck, "schema-contract check must exist");
  assert(schemaCheck.missingSignals.includes("schemaVersion:1.0"));
}

async function main() {
  verifyRedaction();
  await verifyFixtures();
  verifyAudit();
  process.stdout.write("debug harness verify: all checks passed\n");
}

main().catch((error) => {
  process.stderr.write(`debug harness verify failed: ${error.stack || error.message}\n`);
  process.exit(1);
});
