#!/usr/bin/env node
/*
 * Main-process debug hook loaded from scripts/electron-debug-entry.js.
 * - Traces ipcMain handlers/listeners and webContents outbound sends
 * - Captures renderer console messages
 * - Emits redacted NDJSON telemetry for audit tooling
 * - Auto-opens renderer DevTools (optional)
 */
const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");

let redactForLogging = (value) => value;
try {
  ({ redactForLogging } = require("./debug-redaction"));
} catch {
  // Redaction support is optional; fallback keeps debug hook functional.
}

const isElectron = Boolean(process.versions && process.versions.electron);
const processType = process.type || "browser";

if (!isElectron || processType !== "browser") {
  return;
}

const electron = require("electron");

const schemaVersion = process.env.CODEX_DEBUG_SCHEMA_VERSION || "1.0";
const runId = process.env.CODEX_DEBUG_RUN_ID || randomUUID();
const sessionId = process.env.CODEX_DEBUG_SESSION_ID || runId;
const appFlavor = process.env.CODEX_DEBUG_APP_FLAVOR || process.env.BUILD_FLAVOR || "unknown";
const logFile = process.env.CODEX_DEBUG_LOG_FILE || path.join(process.cwd(), "logs", "codex-debug.log");
const ndjsonLogFile =
  process.env.CODEX_DEBUG_NDJSON_LOG_FILE ||
  path.join(process.cwd(), "logs", `codex-debug-${runId}.ndjson`);
const traceEnabled = process.env.CODEX_DEBUG_TRACE !== "0";
const traceIpc = process.env.CODEX_DEBUG_TRACE_IPC !== "0";
const openDevTools = process.env.CODEX_DEBUG_OPEN_DEVTOOLS === "1";
const maxPayloadChars = Number(process.env.CODEX_DEBUG_MAX_PAYLOAD_CHARS || "3000");
const rendererInspectPort = process.env.CODEX_DEBUG_RENDERER_INSPECT_PORT || "9223";
const appServerFromViewChannel = "codex_desktop:message-from-view";
const appServerForViewChannel = "codex_desktop:message-for-view";
const appServerWorkerPrefix = "codex_desktop:worker:";

try {
  electron.app.commandLine.appendSwitch("remote-debugging-port", String(rendererInspectPort));
  electron.app.commandLine.appendSwitch("enable-logging");
} catch {
  // Ignore and continue if switches cannot be set this early.
}

function normalizeId(value) {
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }
  return null;
}

function pickString(value) {
  return typeof value === "string" && value.length > 0 ? value : null;
}

function flattenMessages(payload) {
  const root = Array.isArray(payload) ? payload : [payload];
  const flat = [];
  for (const item of root) {
    if (Array.isArray(item)) {
      flat.push(...item);
    } else {
      flat.push(item);
    }
  }
  return flat;
}

function maybeExtractParams(item) {
  if (!item || typeof item !== "object") return null;
  if (item.params && typeof item.params === "object") return item.params;
  if (item.request && item.request.params && typeof item.request.params === "object") {
    return item.request.params;
  }
  if (item.notification && item.notification.params && typeof item.notification.params === "object") {
    return item.notification.params;
  }
  return null;
}

function extractSignalFields(payload) {
  const fields = {
    method: null,
    type: null,
    threadId: null,
    turnId: null,
    requestId: null,
    status: null,
  };

  const messages = flattenMessages(payload);
  for (const item of messages) {
    if (!item || typeof item !== "object") continue;

    fields.type = fields.type ?? pickString(item.type);
    fields.method = fields.method ?? pickString(item.method);
    fields.requestId = fields.requestId ?? normalizeId(item.id);

    if (item.request && typeof item.request === "object") {
      fields.method = fields.method ?? pickString(item.request.method);
      fields.requestId = fields.requestId ?? normalizeId(item.request.id);
    }

    if (item.notification && typeof item.notification === "object") {
      fields.method = fields.method ?? pickString(item.notification.method);
    }

    if (item.response && typeof item.response === "object") {
      fields.requestId = fields.requestId ?? normalizeId(item.response.id);
      fields.method = fields.method ?? pickString(item.response.method);
    }

    const params = maybeExtractParams(item);
    if (params) {
      fields.threadId =
        fields.threadId ?? pickString(params.threadId) ?? pickString(params.conversationId);
      fields.turnId =
        fields.turnId ??
        pickString(params.turnId) ??
        (params.turn && typeof params.turn === "object" ? pickString(params.turn.id) : null);
      fields.status =
        fields.status ??
        pickString(params.status) ??
        (params.turn && typeof params.turn === "object" ? pickString(params.turn.status) : null);
    }

    fields.threadId =
      fields.threadId ?? pickString(item.threadId) ?? pickString(item.conversationId);
    fields.turnId =
      fields.turnId ??
      pickString(item.turnId) ??
      (item.turn && typeof item.turn === "object" ? pickString(item.turn.id) : null);
    fields.status =
      fields.status ??
      pickString(item.status) ??
      (item.turn && typeof item.turn === "object" ? pickString(item.turn.status) : null);
  }

  return fields;
}

function safePreview(value) {
  try {
    const redactedValue = redactForLogging(value);
    const text = JSON.stringify(redactedValue);
    if (typeof text !== "string") return String(redactedValue);
    if (text.length <= maxPayloadChars) return text;
    return `${text.slice(0, maxPayloadChars)}...<truncated>`;
  } catch {
    try {
      const text = redactForLogging(String(value));
      if (typeof text !== "string") return "<unprintable>";
      if (text.length <= maxPayloadChars) return text;
      return `${text.slice(0, maxPayloadChars)}...<truncated>`;
    } catch {
      return "<unprintable>";
    }
  }
}

function writeLog(line) {
  const prefix = `[codex-debug ${new Date().toISOString()}] `;
  const fullLine = `${prefix}${line}\n`;
  try {
    fs.mkdirSync(path.dirname(logFile), { recursive: true });
    fs.appendFileSync(logFile, fullLine, "utf8");
  } catch {
    // Avoid crashing debug session when logging fails.
  }
}

function emitNdjson(partialEvent) {
  const event = {
    schemaVersion,
    runId,
    sessionId,
    pid: process.pid,
    appFlavor,
    ts: new Date().toISOString(),
    direction: null,
    channel: null,
    method: null,
    type: null,
    threadId: null,
    turnId: null,
    requestId: null,
    status: null,
    rawPreview: null,
    ...partialEvent,
  };

  try {
    fs.mkdirSync(path.dirname(ndjsonLogFile), { recursive: true });
    fs.appendFileSync(ndjsonLogFile, `${JSON.stringify(redactForLogging(event))}\n`, "utf8");
  } catch {
    // Avoid crashing debug session when NDJSON logging fails.
  }
}

function log(line) {
  writeLog(line);
}

function summarizeAppServerPayload(payload) {
  const input = Array.isArray(payload) ? payload : [payload];
  const summary = [];

  for (const item of input) {
    if (!item || typeof item !== "object") continue;

    const type = typeof item.type === "string" ? item.type : null;
    const method = typeof item.method === "string" ? item.method : null;
    const hasId =
      typeof item.id === "string" || typeof item.id === "number" || item.id === null;

    if (type && method) {
      summary.push(`${type}:${method}`);
      continue;
    }

    if (type === "mcp-request") {
      const nestedMethod =
        item.request && typeof item.request === "object" ? item.request.method : null;
      if (typeof nestedMethod === "string") {
        summary.push(`request:${nestedMethod}`);
        continue;
      }
    }

    if (type === "mcp-notification") {
      const nestedMethod =
        item.notification && typeof item.notification === "object"
          ? item.notification.method
          : null;
      if (typeof nestedMethod === "string") {
        summary.push(`notification:${nestedMethod}`);
        continue;
      }
    }

    if (type === "mcp-response") {
      const messageId =
        item.message && typeof item.message === "object" ? item.message.id : undefined;
      if (typeof messageId === "string" || typeof messageId === "number") {
        summary.push(`response:${messageId}`);
        continue;
      }
    }

    if (type === "worker-request") {
      const workerId = typeof item.workerId === "string" ? item.workerId : "unknown";
      const nestedMethod =
        item.request && typeof item.request === "object" ? item.request.method : null;
      if (typeof nestedMethod === "string") {
        summary.push(`worker-request:${workerId}:${nestedMethod}`);
        continue;
      }
    }

    if (type === "worker-response") {
      const workerId = typeof item.workerId === "string" ? item.workerId : "unknown";
      const nestedMethod =
        item.response && typeof item.response === "object" ? item.response.method : null;
      if (typeof nestedMethod === "string") {
        summary.push(`worker-response:${workerId}:${nestedMethod}`);
        continue;
      }
    }

    if (method) {
      summary.push(`${hasId ? "request" : "notification"}:${method}`);
      continue;
    }
  }

  return summary.length > 0 ? summary.slice(0, 20).join(",") : null;
}

function isAppServerChannel(channel) {
  return (
    channel === appServerFromViewChannel ||
    channel === appServerForViewChannel ||
    (channel.startsWith(appServerWorkerPrefix) &&
      (channel.endsWith(":from-view") || channel.endsWith(":for-view")))
  );
}

function formatPayloadForChannel(channel, args) {
  const preview = safePreview(args);
  if (!isAppServerChannel(channel)) return preview;

  const summary = summarizeAppServerPayload(args.length === 1 ? args[0] : args);
  return summary ? `${preview} appServer=${summary}` : preview;
}

log(
  `debug hook loaded (pid=${process.pid}, logFile=${logFile}, ndjsonLogFile=${ndjsonLogFile}, rendererInspectPort=${rendererInspectPort})`,
);
emitNdjson({
  direction: "lifecycle",
  type: "debug-hook-loaded",
  status: "ready",
  rawPreview: safePreview({
    rendererInspectPort,
    traceEnabled,
    traceIpc,
    openDevTools,
  }),
});

if (traceIpc) {
  const originalHandle = electron.ipcMain.handle.bind(electron.ipcMain);
  const originalOn = electron.ipcMain.on.bind(electron.ipcMain);

  electron.ipcMain.handle = (channel, listener) => {
    const wrapped = async (event, ...args) => {
      const inbound = extractSignalFields(args);
      emitNdjson({
        direction: "ipcMain.handle.in",
        channel,
        ...inbound,
        rawPreview: safePreview(args),
      });
      if (traceEnabled) {
        log(
          `ipcMain.handle <= ${channel} sender=${event.sender.id} payload=${formatPayloadForChannel(
            channel,
            args,
          )}`,
        );
      }
      try {
        const result = await listener(event, ...args);
        const outbound = extractSignalFields([result]);
        emitNdjson({
          direction: "ipcMain.handle.out",
          channel,
          method: outbound.method ?? inbound.method,
          type: outbound.type ?? inbound.type,
          threadId: outbound.threadId ?? inbound.threadId,
          turnId: outbound.turnId ?? inbound.turnId,
          requestId: outbound.requestId ?? inbound.requestId,
          status: outbound.status ?? "ok",
          rawPreview: safePreview(result),
        });
        if (traceEnabled) {
          log(`ipcMain.handle => ${channel} result=${safePreview(result)}`);
        }
        return result;
      } catch (error) {
        emitNdjson({
          direction: "ipcMain.handle.error",
          channel,
          ...inbound,
          status: "error",
          rawPreview: safePreview(error?.stack || error),
        });
        log(`ipcMain.handle !! ${channel} error=${safePreview(error?.stack || error)}`);
        throw error;
      }
    };
    return originalHandle(channel, wrapped);
  };

  electron.ipcMain.on = (channel, listener) => {
    const wrapped = (event, ...args) => {
      const inbound = extractSignalFields(args);
      emitNdjson({
        direction: "ipcMain.on.in",
        channel,
        ...inbound,
        rawPreview: safePreview(args),
      });
      if (traceEnabled) {
        log(
          `ipcMain.on <= ${channel} sender=${event.sender.id} payload=${formatPayloadForChannel(
            channel,
            args,
          )}`,
        );
      }
      try {
        const result = listener(event, ...args);
        emitNdjson({
          direction: "ipcMain.on.out",
          channel,
          ...inbound,
          status: "ok",
          rawPreview: safePreview(result),
        });
        return result;
      } catch (error) {
        emitNdjson({
          direction: "ipcMain.on.error",
          channel,
          ...inbound,
          status: "error",
          rawPreview: safePreview(error?.stack || error),
        });
        log(`ipcMain.on !! ${channel} error=${safePreview(error?.stack || error)}`);
        throw error;
      }
    };
    return originalOn(channel, wrapped);
  };
}

electron.app.on("web-contents-created", (_event, contents) => {
  if (traceIpc) {
    const originalSend = contents.send.bind(contents);
    contents.send = (channel, ...args) => {
      const outbound = extractSignalFields(args);
      emitNdjson({
        direction: "webContents.send.out",
        channel,
        ...outbound,
        status: "sent",
        rawPreview: safePreview(args),
      });
      if (traceEnabled) {
        log(
          `webContents.send => ${channel} target=${contents.id} payload=${formatPayloadForChannel(
            channel,
            args,
          )}`,
        );
      }
      return originalSend(channel, ...args);
    };
  }

  contents.on("console-message", (_e, level, message, line, sourceId) => {
    const renderedMessage = {
      level,
      wc: contents.id,
      sourceId,
      line,
      message,
    };
    emitNdjson({
      direction: "renderer.console",
      type: "renderer.console",
      status: String(level),
      rawPreview: safePreview(renderedMessage),
    });
    log(
      `renderer.console level=${level} wc=${contents.id} source=${safePreview(
        sourceId,
      )}:${line} message=${safePreview(message)}`,
    );
  });
});

electron.app.on("browser-window-created", (_event, window) => {
  emitNdjson({
    direction: "lifecycle",
    type: "browser-window-created",
    status: "ok",
    rawPreview: safePreview({ windowId: window.id }),
  });
  log(`browser-window-created id=${window.id}`);
  if (openDevTools) {
    setTimeout(() => {
      if (!window.isDestroyed()) {
        try {
          window.webContents.openDevTools({ mode: "detach", activate: true });
          emitNdjson({
            direction: "lifecycle",
            type: "devtools-opened",
            status: "ok",
            rawPreview: safePreview({ windowId: window.id }),
          });
          log(`devtools opened for window id=${window.id}`);
        } catch (error) {
          emitNdjson({
            direction: "lifecycle",
            type: "devtools-opened",
            status: "error",
            rawPreview: safePreview(error),
          });
          log(`failed to open devtools for window id=${window.id}: ${safePreview(error)}`);
        }
      }
    }, 750);
  }
});

process.on("uncaughtException", (error) => {
  emitNdjson({
    direction: "process",
    type: "uncaughtException",
    status: "error",
    rawPreview: safePreview(error?.stack || error),
  });
  log(`uncaughtException ${safePreview(error?.stack || error)}`);
});

process.on("unhandledRejection", (error) => {
  emitNdjson({
    direction: "process",
    type: "unhandledRejection",
    status: "error",
    rawPreview: safePreview(error?.stack || error),
  });
  log(`unhandledRejection ${safePreview(error?.stack || error)}`);
});

