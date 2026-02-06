#!/usr/bin/env node
"use strict";

const http = require("http");
const { URL } = require("url");

const portArgIndex = process.argv.indexOf("--port");
const portArgValue =
  portArgIndex >= 0 && process.argv.length > portArgIndex + 1
    ? Number(process.argv[portArgIndex + 1])
    : null;
const port = Number(process.env.MCP_FAILING_FIXTURE_PORT || portArgValue || 8788);
const defaultMode = process.env.MCP_FAILING_DEFAULT_MODE || "hard-error";
const timeoutMs = Number(process.env.MCP_FAILING_TIMEOUT_MS || 10000);
const retrySuccessThreshold = Number(process.env.MCP_FAILING_RETRY_SUCCESS_THRESHOLD || 3);

const attemptsByKey = new Map();

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

function modeFromRequest(req, body, requestUrl) {
  const queryMode = requestUrl.searchParams.get("mode");
  if (queryMode) return queryMode;
  const headerMode = req.headers["x-failing-mode"];
  if (typeof headerMode === "string" && headerMode.length > 0) return headerMode;
  const bodyMode = body?.params?.mode;
  if (typeof bodyMode === "string" && bodyMode.length > 0) return bodyMode;
  return defaultMode;
}

function rpcResult(id, result) {
  return {
    jsonrpc: "2.0",
    id: id ?? null,
    result,
  };
}

function rpcError(id, code, message) {
  return {
    jsonrpc: "2.0",
    id: id ?? null,
    error: { code, message },
  };
}

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url || "/", `http://127.0.0.1:${port}`);

  if (requestUrl.pathname === "/health") {
    sendJson(res, 200, {
      ok: true,
      fixture: "failing",
      port,
      defaultMode,
      timeoutMs,
      retrySuccessThreshold,
    });
    return;
  }

  if (requestUrl.pathname !== "/mcp" || req.method !== "POST") {
    sendJson(res, 404, {
      ok: false,
      error: "Not found",
    });
    return;
  }

  let body;
  try {
    body = await readJsonBody(req);
  } catch {
    sendJson(res, 400, { ok: false, error: "Invalid JSON body" });
    return;
  }

  const mode = modeFromRequest(req, body, requestUrl);
  const requestId = body?.id ?? "no-id";
  const requestKey = `${mode}:${requestId}`;
  const attempt = (attemptsByKey.get(requestKey) || 0) + 1;
  attemptsByKey.set(requestKey, attempt);

  if (mode === "hard-error") {
    sendJson(res, 503, {
      ok: false,
      mode,
      attempt,
      error: "Intentional hard failure",
    });
    return;
  }

  if (mode === "timeout") {
    setTimeout(() => {
      if (!res.writableEnded) {
        sendJson(res, 504, {
          ok: false,
          mode,
          attempt,
          error: "Intentional timeout failure",
        });
      }
    }, timeoutMs);
    return;
  }

  if (mode === "retry-then-success") {
    if (attempt < retrySuccessThreshold) {
      sendJson(res, 503, {
        ok: false,
        mode,
        attempt,
        error: "Intentional retry failure",
      });
      return;
    }

    sendJson(
      res,
      200,
      rpcResult(body?.id ?? null, {
        content: [
          {
            type: "text",
            text: `Recovered on attempt ${attempt}`,
          },
        ],
        isError: false,
      }),
    );
    return;
  }

  sendJson(
    res,
    200,
    rpcError(body?.id ?? null, -32602, `Unsupported failing mode: ${String(mode)}`),
  );
});

server.listen(port, "127.0.0.1", () => {
  process.stdout.write(`failing fixture listening on ${port}\n`);
});

