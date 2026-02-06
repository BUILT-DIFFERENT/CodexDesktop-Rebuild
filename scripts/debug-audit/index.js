#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const AUDIT_SCHEMA_VERSION = "1.0";
const REQUIRED_NDJSON_KEYS = [
  "schemaVersion",
  "runId",
  "sessionId",
  "pid",
  "appFlavor",
  "ts",
  "direction",
  "channel",
  "method",
  "type",
  "threadId",
  "turnId",
  "requestId",
  "status",
  "rawPreview",
];

const KNOWN_METHODS = [
  "thread/start",
  "thread/resume",
  "thread/list",
  "thread/read",
  "thread/archive",
  "thread/unarchive",
  "turn/start",
  "turn/interrupt",
  "turn/completed",
  "item/agentMessage/delta",
  "item/commandExecution/requestApproval",
  "item/fileChange/requestApproval",
  "getAuthStatus",
  "mcpServerStatus/list",
];

const APPROVAL_REQUEST_METHODS = new Set([
  "item/commandExecution/requestApproval",
  "item/fileChange/requestApproval",
]);

function isApprovalResponseSignal(event, previewLower) {
  const direction = typeof event.direction === "string" ? event.direction : "";
  const method = typeof event.method === "string" ? event.method : "";
  const type = typeof event.type === "string" ? event.type.toLowerCase() : "";

  if (APPROVAL_REQUEST_METHODS.has(method) && direction.endsWith(".out")) {
    return true;
  }

  if (type === "mcp-response") {
    if (
      previewLower.includes("execcommandapproval") ||
      previewLower.includes("applypatchapproval") ||
      previewLower.includes("approvalresponse")
    ) {
      return true;
    }
  }

  return false;
}

function printUsage() {
  process.stdout.write(
    [
      "Usage: node scripts/debug-audit/index.js --log <path-to-ndjson-or-dir> [--json]",
      "",
      "Options:",
      "  --log <path>   NDJSON file path or directory containing NDJSON logs",
      "  --json         Emit machine-readable JSON report",
      "  --help         Show this help message",
    ].join("\n"),
  );
  process.stdout.write("\n");
}

function parseArgs(argv) {
  const result = {
    logPath: null,
    json: false,
    help: false,
  };

  for (let index = 2; index < argv.length; index += 1) {
    const current = argv[index];
    if (current === "--json") {
      result.json = true;
      continue;
    }
    if (current === "--help" || current === "-h") {
      result.help = true;
      continue;
    }
    if (current === "--log") {
      result.logPath = argv[index + 1] || null;
      index += 1;
      continue;
    }
  }

  return result;
}

function resolveLogPath(logPath) {
  const absolute = path.resolve(logPath);
  const stats = fs.statSync(absolute);
  if (stats.isFile()) {
    return absolute;
  }
  if (!stats.isDirectory()) {
    throw new Error(`Unsupported --log path: ${absolute}`);
  }

  const entries = fs
    .readdirSync(absolute, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".ndjson"))
    .map((entry) => {
      const fullPath = path.join(absolute, entry.name);
      const fileStats = fs.statSync(fullPath);
      return {
        fullPath,
        mtimeMs: fileStats.mtimeMs,
      };
    })
    .sort((a, b) => b.mtimeMs - a.mtimeMs);

  if (entries.length === 0) {
    throw new Error(`No NDJSON files found in directory: ${absolute}`);
  }

  return entries[0].fullPath;
}

function loadEvents(logFilePath) {
  const events = [];
  const parseErrors = [];
  const lines = fs.readFileSync(logFilePath, "utf8").split(/\r?\n/);

  lines.forEach((line, index) => {
    const lineNo = index + 1;
    const trimmed = line.trim();
    if (trimmed.length === 0) return;
    try {
      const parsed = JSON.parse(trimmed);
      if (parsed && typeof parsed === "object") {
        events.push({ lineNo, event: parsed });
      } else {
        parseErrors.push({ lineNo, reason: "JSON parsed to a non-object value" });
      }
    } catch (error) {
      parseErrors.push({ lineNo, reason: error.message });
    }
  });

  return { events, parseErrors };
}

function pushEvidence(map, token, eventRecord) {
  if (!map.has(token)) {
    map.set(token, []);
  }
  map.get(token).push({
    line: eventRecord.lineNo,
    ts: eventRecord.event.ts ?? null,
    method: eventRecord.event.method ?? null,
    type: eventRecord.event.type ?? null,
    status: eventRecord.event.status ?? null,
  });
}

function collectObservations(events) {
  const tokenSet = new Set();
  const evidence = new Map();

  for (const record of events) {
    const event = record.event;
    if (typeof event.method === "string" && event.method.length > 0) {
      const token = `method:${event.method}`;
      tokenSet.add(token);
      pushEvidence(evidence, token, record);
    }
    if (typeof event.type === "string" && event.type.length > 0) {
      const token = `type:${event.type}`;
      tokenSet.add(token);
      pushEvidence(evidence, token, record);
    }
    if (typeof event.channel === "string" && event.channel.length > 0) {
      const token = `channel:${event.channel}`;
      tokenSet.add(token);
      pushEvidence(evidence, token, record);
    }

    if (typeof event.rawPreview === "string" && event.rawPreview.length > 0) {
      const previewLower = event.rawPreview.toLowerCase();
      if (isApprovalResponseSignal(event, previewLower)) {
        const token = "response:approval";
        tokenSet.add(token);
        pushEvidence(evidence, token, record);
      }
      if (previewLower.includes("unauthorized") || previewLower.includes(" 401")) {
        const token = "token:mcp-auth-unauthorized";
        tokenSet.add(token);
        pushEvidence(evidence, token, record);
      }
      if (
        previewLower.includes("authmode:header") ||
        previewLower.includes("authmode:bearer") ||
        previewLower.includes("authorized")
      ) {
        const token = "token:mcp-auth-authorized";
        tokenSet.add(token);
        pushEvidence(evidence, token, record);
      }

      for (const method of KNOWN_METHODS) {
        if (event.rawPreview.includes(method)) {
          const token = `method:${method}`;
          tokenSet.add(token);
          pushEvidence(evidence, token, record);
        }
      }
    }
  }

  return { tokenSet, evidence };
}

function evaluateSignalCheck(id, requiredSignals, observations) {
  const matchedSignals = requiredSignals.filter((signal) => observations.tokenSet.has(signal));
  const missingSignals = requiredSignals.filter((signal) => !observations.tokenSet.has(signal));

  const evidence = matchedSignals.map((signal) => ({
    signal,
    lines: (observations.evidence.get(signal) || []).slice(0, 5),
  }));

  return {
    id,
    status: missingSignals.length === 0 ? "pass" : "fail",
    requiredSignals,
    matchedSignals,
    missingSignals,
    evidence,
  };
}

function evaluateSchemaContractCheck(events, parseErrors) {
  const versionMismatches = [];
  const missingKeyRows = [];

  for (const record of events) {
    const event = record.event;
    if (event.schemaVersion !== AUDIT_SCHEMA_VERSION) {
      versionMismatches.push({
        line: record.lineNo,
        found: event.schemaVersion ?? null,
      });
    }
    const missingKeys = REQUIRED_NDJSON_KEYS.filter(
      (key) => !Object.prototype.hasOwnProperty.call(event, key),
    );
    if (missingKeys.length > 0) {
      missingKeyRows.push({
        line: record.lineNo,
        missingKeys,
      });
    }
  }

  const requiredSignals = ["schemaVersion:1.0", "contract:required-keys"];
  const matchedSignals = [];
  const missingSignals = [];

  if (versionMismatches.length === 0) {
    matchedSignals.push("schemaVersion:1.0");
  } else {
    missingSignals.push("schemaVersion:1.0");
  }

  if (missingKeyRows.length === 0) {
    matchedSignals.push("contract:required-keys");
  } else {
    missingSignals.push("contract:required-keys");
  }

  const status = missingSignals.length === 0 ? "pass" : "fail";
  const evidence = [
    {
      signal: "schemaVersion:1.0",
      details: versionMismatches.slice(0, 10),
    },
    {
      signal: "contract:required-keys",
      details: missingKeyRows.slice(0, 10),
    },
    {
      signal: "parse-errors",
      details: parseErrors.slice(0, 10),
    },
  ];

  return {
    id: "schema-contract",
    status,
    requiredSignals,
    matchedSignals,
    missingSignals,
    evidence,
  };
}

function summarizeChecks(checks) {
  const passed = checks.filter((check) => check.status === "pass").length;
  const failed = checks.length - passed;
  return {
    totalChecks: checks.length,
    passed,
    failed,
    status: failed === 0 ? "pass" : "fail",
  };
}

function printHumanReport(report) {
  const summary = report.summary;
  process.stdout.write(`Audit report for ${report.logPath}\n`);
  process.stdout.write(`Run ID: ${report.runId || "unknown"}\n`);
  process.stdout.write(
    `Checks: ${summary.passed}/${summary.totalChecks} passed (${summary.failed} failed)\n`,
  );
  process.stdout.write(`Events parsed: ${summary.eventCount}\n`);
  if (summary.parseErrors > 0) {
    process.stdout.write(`Parse errors: ${summary.parseErrors}\n`);
  }
  process.stdout.write("\n");

  for (const check of report.checks) {
    process.stdout.write(`[${check.status.toUpperCase()}] ${check.id}\n`);
    process.stdout.write(`  required: ${check.requiredSignals.join(", ")}\n`);
    process.stdout.write(`  matched: ${check.matchedSignals.join(", ") || "(none)"}\n`);
    if (check.missingSignals.length > 0) {
      process.stdout.write(`  missing: ${check.missingSignals.join(", ")}\n`);
    }
    process.stdout.write("\n");
  }
}

function main() {
  const args = parseArgs(process.argv);
  if (args.help) {
    printUsage();
    return;
  }
  if (!args.logPath) {
    printUsage();
    process.exit(1);
  }

  const resolvedLogPath = resolveLogPath(args.logPath);
  const loaded = loadEvents(resolvedLogPath);
  if (loaded.events.length === 0) {
    throw new Error(`No events parsed from ${resolvedLogPath}`);
  }

  const observations = collectObservations(loaded.events);
  const checks = [
    evaluateSchemaContractCheck(loaded.events, loaded.parseErrors),
    evaluateSignalCheck(
      "thread-lifecycle",
      [
        "method:thread/start",
        "method:thread/resume",
        "method:thread/list",
        "method:thread/read",
        "method:thread/archive",
        "method:thread/unarchive",
      ],
      observations,
    ),
    evaluateSignalCheck(
      "turn-lifecycle",
      [
        "method:turn/start",
        "method:turn/interrupt",
        "method:turn/completed",
        "method:item/agentMessage/delta",
      ],
      observations,
    ),
    evaluateSignalCheck(
      "approval-lifecycle",
      [
        "method:item/commandExecution/requestApproval",
        "method:item/fileChange/requestApproval",
        "response:approval",
      ],
      observations,
    ),
    evaluateSignalCheck(
      "mcp-auth-status",
      [
        "method:getAuthStatus",
        "method:mcpServerStatus/list",
        "token:mcp-auth-authorized",
        "token:mcp-auth-unauthorized",
      ],
      observations,
    ),
  ];

  const summary = summarizeChecks(checks);
  const runId = loaded.events[0]?.event?.runId ?? null;
  const report = {
    schemaVersion: AUDIT_SCHEMA_VERSION,
    runId,
    logPath: resolvedLogPath,
    summary: {
      ...summary,
      eventCount: loaded.events.length,
      parseErrors: loaded.parseErrors.length,
    },
    checks,
  };

  if (args.json) {
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  } else {
    printHumanReport(report);
  }

  if (summary.failed > 0) {
    process.exitCode = 1;
  }
}

try {
  main();
} catch (error) {
  process.stderr.write(`debug:audit failed: ${error.message}\n`);
  process.exit(1);
}
