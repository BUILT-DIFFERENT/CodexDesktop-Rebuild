#!/usr/bin/env node
"use strict";

const readline = require("readline");

const SERVER_INFO = {
  name: "codex-debug-stdio-fixture",
  version: "1.0.0",
};

function createJsonRpcError(id, code, message) {
  return {
    jsonrpc: "2.0",
    id: id ?? null,
    error: { code, message },
  };
}

function createJsonRpcResult(id, result) {
  return {
    jsonrpc: "2.0",
    id: id ?? null,
    result,
  };
}

function listToolsResult() {
  return {
    tools: [
      {
        name: "echo",
        description: "Echoes the provided text back to the caller.",
        inputSchema: {
          type: "object",
          properties: {
            text: { type: "string" },
          },
          required: ["text"],
        },
      },
      {
        name: "health",
        description: "Returns fixture health details.",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
    ],
  };
}

function handleRpcRequest(request) {
  if (!request || typeof request !== "object") {
    return createJsonRpcError(null, -32600, "Invalid request payload");
  }

  const id = request.id ?? null;
  const method = request.method;
  const params = request.params && typeof request.params === "object" ? request.params : {};

  if (typeof method !== "string") {
    return createJsonRpcError(id, -32600, "Missing method");
  }

  switch (method) {
    case "initialize":
      return createJsonRpcResult(id, {
        protocolVersion: "2024-11-05",
        capabilities: {
          tools: {},
        },
        serverInfo: SERVER_INFO,
      });
    case "tools/list":
      return createJsonRpcResult(id, listToolsResult());
    case "tools/call": {
      const toolName = params.name || params.tool;
      const args = params.arguments && typeof params.arguments === "object" ? params.arguments : {};
      if (toolName === "echo") {
        return createJsonRpcResult(id, {
          content: [{ type: "text", text: `echo:${String(args.text ?? "")}` }],
          isError: false,
        });
      }
      if (toolName === "health") {
        return createJsonRpcResult(id, {
          content: [{ type: "text", text: "ok" }],
          isError: false,
        });
      }
      return createJsonRpcError(id, -32601, `Unknown tool: ${String(toolName)}`);
    }
    default:
      return createJsonRpcError(id, -32601, `Unknown method: ${method}`);
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function runSelfTest() {
  const initializeResponse = handleRpcRequest({
    jsonrpc: "2.0",
    id: "init",
    method: "initialize",
    params: {},
  });
  assert(initializeResponse.result?.serverInfo?.name === SERVER_INFO.name, "Initialize failed");

  const toolsResponse = handleRpcRequest({
    jsonrpc: "2.0",
    id: "tools",
    method: "tools/list",
  });
  assert(Array.isArray(toolsResponse.result?.tools), "tools/list failed");

  const echoResponse = handleRpcRequest({
    jsonrpc: "2.0",
    id: "echo",
    method: "tools/call",
    params: {
      name: "echo",
      arguments: { text: "hello" },
    },
  });
  assert(
    echoResponse.result?.content?.[0]?.text === "echo:hello",
    "tools/call echo returned unexpected output",
  );

  process.stdout.write(
    `${JSON.stringify({ ok: true, fixture: "stdio", version: SERVER_INFO.version })}\n`,
  );
}

function runServer() {
  const rl = readline.createInterface({
    input: process.stdin,
    crlfDelay: Infinity,
  });

  rl.on("line", (line) => {
    const trimmed = line.trim();
    if (trimmed.length === 0) {
      return;
    }

    let request;
    try {
      request = JSON.parse(trimmed);
    } catch {
      process.stdout.write(
        `${JSON.stringify(createJsonRpcError(null, -32700, "Invalid JSON payload"))}\n`,
      );
      return;
    }

    const response = handleRpcRequest(request);
    if (response) {
      process.stdout.write(`${JSON.stringify(response)}\n`);
    }
  });
}

if (process.argv.includes("--self-test")) {
  try {
    runSelfTest();
    process.exit(0);
  } catch (error) {
    process.stderr.write(`stdio fixture self-test failed: ${error.message}\n`);
    process.exit(1);
  }
}

runServer();

