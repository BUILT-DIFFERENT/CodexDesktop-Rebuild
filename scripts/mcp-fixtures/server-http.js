#!/usr/bin/env node
"use strict";

const http = require("http");
const { URL } = require("url");

const portArgIndex = process.argv.indexOf("--port");
const portArgValue =
  portArgIndex >= 0 && process.argv.length > portArgIndex + 1
    ? Number(process.argv[portArgIndex + 1])
    : null;
const port = Number(process.env.MCP_HTTP_FIXTURE_PORT || portArgValue || 8787);
const requiredHeaderToken = process.env.MCP_HTTP_REQUIRED_HEADER || "fixture-header-secret";
const requiredBearerToken = process.env.MCP_HTTP_BEARER_TOKEN || "fixture-bearer-secret";

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
  });
  res.end(`${JSON.stringify(payload)}\n`);
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8").trim();
      if (raw.length === 0) {
        resolve(null);
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function getAuthMode(req) {
  const headerToken = req.headers["x-debug-auth"];
  if (typeof headerToken === "string" && headerToken === requiredHeaderToken) {
    return "header";
  }

  const authorization = req.headers.authorization;
  if (typeof authorization === "string") {
    const match = authorization.match(/^Bearer\s+(.+)$/i);
    if (match && match[1] === requiredBearerToken) {
      return "bearer";
    }
  }

  return null;
}

function createRpcError(id, code, message) {
  return {
    jsonrpc: "2.0",
    id: id ?? null,
    error: { code, message },
  };
}

function createRpcResult(id, result) {
  return {
    jsonrpc: "2.0",
    id: id ?? null,
    result,
  };
}

function handleRpcRequest(request, authMode) {
  if (!request || typeof request !== "object") {
    return createRpcError(null, -32600, "Invalid request payload");
  }

  const id = request.id ?? null;
  const method = request.method;
  const params = request.params && typeof request.params === "object" ? request.params : {};

  if (typeof method !== "string") {
    return createRpcError(id, -32600, "Missing method");
  }

  switch (method) {
    case "initialize":
      return createRpcResult(id, {
        protocolVersion: "2024-11-05",
        capabilities: { tools: {} },
        serverInfo: { name: "codex-debug-http-fixture", version: "1.0.0" },
      });
    case "tools/list":
      return createRpcResult(id, {
        tools: [
          {
            name: "echo",
            description: "Echo text payload.",
            inputSchema: {
              type: "object",
              properties: { text: { type: "string" } },
              required: ["text"],
            },
          },
          {
            name: "whoami",
            description: "Returns the active auth mode for this request.",
            inputSchema: {
              type: "object",
              properties: {},
            },
          },
          {
            name: "force_error",
            description: "Returns an intentional error response.",
            inputSchema: {
              type: "object",
              properties: {},
            },
          },
        ],
      });
    case "tools/call": {
      const toolName = params.name || params.tool;
      const args = params.arguments && typeof params.arguments === "object" ? params.arguments : {};

      if (toolName === "echo") {
        return createRpcResult(id, {
          content: [{ type: "text", text: `echo:${String(args.text ?? "")}` }],
          isError: false,
        });
      }
      if (toolName === "whoami") {
        return createRpcResult(id, {
          content: [{ type: "text", text: `authMode:${authMode}` }],
          isError: false,
        });
      }
      if (toolName === "force_error") {
        return createRpcError(id, -32000, "Intentional fixture error");
      }
      return createRpcError(id, -32601, `Unknown tool: ${String(toolName)}`);
    }
    default:
      return createRpcError(id, -32601, `Unknown method: ${method}`);
  }
}

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url || "/", `http://127.0.0.1:${port}`);

  if (requestUrl.pathname === "/health") {
    sendJson(res, 200, {
      ok: true,
      fixture: "http",
      port,
    });
    return;
  }

  if (requestUrl.pathname === "/mcp/stream") {
    const authMode = getAuthMode(req);
    if (!authMode) {
      sendJson(res, 401, { ok: false, error: "Unauthorized" });
      return;
    }

    res.writeHead(200, {
      "content-type": "text/event-stream; charset=utf-8",
      "cache-control": "no-cache",
      connection: "keep-alive",
    });
    res.write(`event: ready\ndata: ${JSON.stringify({ authMode })}\n\n`);
    const interval = setInterval(() => {
      res.write(`event: ping\ndata: ${JSON.stringify({ ts: Date.now() })}\n\n`);
    }, 15000);
    req.on("close", () => clearInterval(interval));
    return;
  }

  if (requestUrl.pathname !== "/mcp" || req.method !== "POST") {
    sendJson(res, 404, {
      ok: false,
      error: "Not found",
    });
    return;
  }

  const authMode = getAuthMode(req);
  if (!authMode) {
    sendJson(res, 401, { ok: false, error: "Unauthorized" });
    return;
  }

  if (req.headers["x-fixture-error"] === "1") {
    sendJson(res, 500, { ok: false, error: "Intentional fixture transport error" });
    return;
  }

  let body;
  try {
    body = await readJsonBody(req);
  } catch {
    sendJson(res, 400, { ok: false, error: "Invalid JSON body" });
    return;
  }

  if (Array.isArray(body)) {
    const responses = body.map((entry) => handleRpcRequest(entry, authMode));
    sendJson(res, 200, responses);
    return;
  }

  const response = handleRpcRequest(body, authMode);
  sendJson(res, 200, response);
});

server.listen(port, "127.0.0.1", () => {
  // This log goes to the fixture stdout file created by the manager.
  process.stdout.write(`http fixture listening on ${port}\n`);
});

