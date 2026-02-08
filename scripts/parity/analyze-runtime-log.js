#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

function parseArgs(argv) {
  const result = {
    logPath: "logs",
  };
  for (let i = 2; i < argv.length; i += 1) {
    if (argv[i] === "--log" && argv[i + 1]) {
      result.logPath = argv[i + 1];
      i += 1;
    }
  }
  return result;
}

function resolveNdjson(inputPath) {
  const abs = path.resolve(inputPath);
  const stats = fs.statSync(abs);
  if (stats.isFile()) return abs;
  const files = fs
    .readdirSync(abs)
    .filter((name) => name.endsWith(".ndjson"))
    .map((name) => {
      const fullPath = path.join(abs, name);
      return { fullPath, mtime: fs.statSync(fullPath).mtimeMs };
    })
    .sort((a, b) => b.mtime - a.mtime);
  if (files.length === 0) {
    throw new Error(`no .ndjson files found in ${abs}`);
  }
  return files[0].fullPath;
}

function loadEvents(ndjsonPath) {
  const lines = fs.readFileSync(ndjsonPath, "utf8").split(/\r?\n/);
  const events = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    try {
      events.push(JSON.parse(trimmed));
    } catch {
      // ignore malformed lines
    }
  }
  return events;
}

function collectShape(value, depth = 0) {
  if (depth > 3) return "truncated";
  if (value === null) return "null";
  if (Array.isArray(value)) {
    if (value.length === 0) return ["empty"];
    return [collectShape(value[0], depth + 1)];
  }
  if (typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      out[k] = collectShape(v, depth + 1);
    }
    return out;
  }
  return typeof value;
}

function parseRawPreview(rawPreview) {
  if (typeof rawPreview !== "string" || rawPreview.length === 0) {
    return null;
  }
  const trimmed = rawPreview.trim();
  if (!(trimmed.startsWith("{") || trimmed.startsWith("["))) {
    return null;
  }
  const safe = trimmed.replace(/\.\.\.<truncated>$/, "");
  try {
    return JSON.parse(safe);
  } catch {
    return null;
  }
}

function summarizeSchemas(events) {
  const schemas = new Map();
  for (const event of events) {
    const key = [
      event.direction || "unknown",
      event.channel || "unknown",
      event.method || "unknown",
      event.type || "unknown",
    ].join("|");
    if (!schemas.has(key)) {
      schemas.set(key, { count: 0, rawPreviewShape: null, examples: [] });
    }
    const item = schemas.get(key);
    item.count += 1;
    const parsed = parseRawPreview(event.rawPreview);
    if (parsed !== null && item.rawPreviewShape === null) {
      item.rawPreviewShape = collectShape(parsed);
      if (item.examples.length < 2) {
        item.examples.push(parsed);
      }
    }
  }
  return schemas;
}

function toFlowMarkdown(title, description, events) {
  const lines = [
    `# ${title}`,
    "",
    description,
    "",
    "| ts | direction | channel | method | type | status |",
    "|---|---|---|---|---|---|",
  ];
  for (const event of events.slice(0, 200)) {
    lines.push(
      `| ${event.ts || ""} | ${event.direction || ""} | ${event.channel || ""} | ${event.method || ""} | ${event.type || ""} | ${event.status || ""} |`,
    );
  }
  lines.push("");
  return lines.join("\n");
}

function filterByMethods(events, prefixes) {
  return events.filter((event) => {
    const method = typeof event.method === "string" ? event.method : "";
    return prefixes.some((prefix) => method.startsWith(prefix));
  });
}

function main() {
  const args = parseArgs(process.argv);
  const root = path.resolve(__dirname, "..", "..");
  const docsParityDir = path.join(root, "docs", "parity");
  const flowsDir = path.join(docsParityDir, "critical-flows");
  fs.mkdirSync(docsParityDir, { recursive: true });
  fs.mkdirSync(flowsDir, { recursive: true });

  const ndjsonPath = resolveNdjson(path.resolve(root, args.logPath));
  const events = loadEvents(ndjsonPath);
  if (events.length === 0) {
    throw new Error(`no events parsed from ${ndjsonPath}`);
  }

  const schemas = summarizeSchemas(events);
  const schemaData = {
    extractedAt: new Date().toISOString(),
    source: path.relative(root, ndjsonPath),
    eventCount: events.length,
    channels: Array.from(
      new Set(events.map((event) => event.channel).filter((channel) => typeof channel === "string" && channel.length > 0)),
    ).sort(),
    schemaEntries: Array.from(schemas.entries()).map(([key, value]) => ({
      key,
      count: value.count,
      rawPreviewShape: value.rawPreviewShape,
      examples: value.examples,
    })),
  };
  fs.writeFileSync(path.join(docsParityDir, "runtime-schemas.json"), `${JSON.stringify(schemaData, null, 2)}\n`);

  const loginFlow = filterByMethods(events, ["getAuthStatus", "mcpServerStatus/list", "auth/"]);
  const threadFlow = filterByMethods(events, ["thread/", "turn/", "item/agentMessage/delta"]);
  const automationFlow = filterByMethods(events, ["automation"]);
  const gitFlow = filterByMethods(events, ["git-", "git/", "current-branch", "status-summary", "branch-"]);

  fs.writeFileSync(
    path.join(flowsDir, "login.md"),
    toFlowMarkdown("Login Flow", "Runtime-derived event sequence for auth/login related methods.", loginFlow),
    "utf8",
  );
  fs.writeFileSync(
    path.join(flowsDir, "thread-turn.md"),
    toFlowMarkdown("Thread + Turn Flow", "Runtime-derived sequence for thread lifecycle and turn streaming.", threadFlow),
    "utf8",
  );
  fs.writeFileSync(
    path.join(flowsDir, "automations.md"),
    toFlowMarkdown("Automation Flow", "Runtime-derived sequence for automation methods/events.", automationFlow),
    "utf8",
  );
  fs.writeFileSync(
    path.join(flowsDir, "git.md"),
    toFlowMarkdown("Git Flow", "Runtime-derived sequence for git-related methods/events.", gitFlow),
    "utf8",
  );

  console.log(`[parity:runtime] source=${path.relative(root, ndjsonPath)}`);
  console.log(`[parity:runtime] events=${events.length}`);
  console.log(`[parity:runtime] schemaEntries=${schemaData.schemaEntries.length}`);
}

try {
  main();
} catch (error) {
  console.error(`[parity:runtime] failed: ${error.message}`);
  process.exit(1);
}
