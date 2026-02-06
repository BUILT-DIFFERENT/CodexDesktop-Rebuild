#!/usr/bin/env node
/*
 * Main-process debug hook loaded from scripts/electron-debug-entry.js.
 * - Traces ipcMain handlers/listeners and webContents outbound sends
 * - Captures renderer console messages
 * - Auto-opens renderer DevTools (optional)
 */
const fs = require("fs");
const path = require("path");

const isElectron = Boolean(process.versions && process.versions.electron);
const processType = process.type || "browser";

if (!isElectron || processType !== "browser") {
  return;
}

const electron = require("electron");

const logFile =
  process.env.CODEX_DEBUG_LOG_FILE ||
  path.join(process.cwd(), "logs", "codex-debug.log");
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

function safePreview(value) {
  try {
    const text = JSON.stringify(value);
    if (typeof text !== "string") return String(value);
    if (text.length <= maxPayloadChars) return text;
    return `${text.slice(0, maxPayloadChars)}...<truncated>`;
  } catch {
    try {
      const text = String(value);
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
  `debug hook loaded (pid=${process.pid}, logFile=${logFile}, rendererInspectPort=${rendererInspectPort})`,
);

if (traceIpc) {
  const originalHandle = electron.ipcMain.handle.bind(electron.ipcMain);
  const originalOn = electron.ipcMain.on.bind(electron.ipcMain);

  electron.ipcMain.handle = (channel, listener) => {
    const wrapped = async (event, ...args) => {
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
        if (traceEnabled) {
          log(`ipcMain.handle => ${channel} result=${safePreview(result)}`);
        }
        return result;
      } catch (error) {
        log(`ipcMain.handle !! ${channel} error=${safePreview(error?.stack || error)}`);
        throw error;
      }
    };
    return originalHandle(channel, wrapped);
  };

  electron.ipcMain.on = (channel, listener) => {
    const wrapped = (event, ...args) => {
      if (traceEnabled) {
          log(
          `ipcMain.on <= ${channel} sender=${event.sender.id} payload=${formatPayloadForChannel(
            channel,
            args,
          )}`,
        );
      }
      try {
        return listener(event, ...args);
      } catch (error) {
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
    log(
      `renderer.console level=${level} wc=${contents.id} source=${safePreview(
        sourceId,
      )}:${line} message=${safePreview(message)}`,
    );
  });
});

electron.app.on("browser-window-created", (_event, window) => {
  log(`browser-window-created id=${window.id}`);
  if (openDevTools) {
    setTimeout(() => {
      if (!window.isDestroyed()) {
        try {
          window.webContents.openDevTools({ mode: "detach", activate: true });
          log(`devtools opened for window id=${window.id}`);
        } catch (error) {
          log(`failed to open devtools for window id=${window.id}: ${safePreview(error)}`);
        }
      }
    }, 750);
  }
});

process.on("uncaughtException", (error) => {
  log(`uncaughtException ${safePreview(error?.stack || error)}`);
});

process.on("unhandledRejection", (error) => {
  log(`unhandledRejection ${safePreview(error?.stack || error)}`);
});
