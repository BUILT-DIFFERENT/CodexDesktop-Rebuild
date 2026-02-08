#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..", "..");
const docsParityDir = path.join(root, "docs", "parity");
const flowsDir = path.join(docsParityDir, "critical-flows");
fs.mkdirSync(docsParityDir, { recursive: true });
fs.mkdirSync(flowsDir, { recursive: true });

function firstExisting(paths) {
  for (const candidate of paths) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }
  return null;
}

function splitLines(text) {
  return text.split(/\r?\n/);
}

function textStats(text) {
  const lines = splitLines(text);
  let maxLineLength = 0;
  for (const line of lines) {
    if (line.length > maxLineLength) {
      maxLineLength = line.length;
    }
  }
  const lineCount = lines.length;
  const averageLineLength = lineCount === 0 ? 0 : Math.round((text.length / lineCount) * 100) / 100;
  return {
    byteSize: Buffer.byteLength(text, "utf8"),
    lineCount,
    maxLineLength,
    averageLineLength,
  };
}

function isOpaqueStats(stats) {
  if (stats.byteSize < 100_000) {
    return false;
  }
  return (
    stats.maxLineLength >= 50_000 ||
    stats.lineCount <= 30 ||
    stats.averageLineLength >= 4_000
  );
}

function resolveRequiredSource(id, candidates) {
  const existing = candidates.find((candidate) => fs.existsSync(candidate.path)) || null;
  const selectedPath = existing ? existing.path : null;
  const selectedSourceClass = existing ? existing.sourceClass : candidates[0].sourceClass;
  const preferredClass = candidates[0].sourceClass;
  const status = selectedPath
    ? preferredClass === selectedSourceClass
      ? "ok"
      : "fallback"
    : "missing";

  let stats = null;
  if (selectedPath) {
    const text = fs.readFileSync(selectedPath, "utf8");
    stats = textStats(text);
  }

  const extractionStatus = !selectedPath
    ? "missing"
    : isOpaqueStats(stats)
      ? "opaque"
      : status;
  const sourceClass = extractionStatus === "opaque" ? "opaque" : selectedSourceClass;

  return {
    id,
    preferredClass,
    sourceClass,
    selectedSourceClass,
    selectedPath,
    extractionStatus,
    candidates: candidates.map((candidate) => ({
      path: path.relative(root, candidate.path),
      sourceClass: candidate.sourceClass,
      exists: fs.existsSync(candidate.path),
    })),
    stats,
  };
}

function findRendererBundle() {
  return firstExisting([
    path.join(root, "src", "webview", "assets", "index-CgwAo6pj.js"),
    ...fs
      .readdirSync(path.join(root, "src", "webview", "assets"))
      .filter((name) => /^index-.*\.js$/.test(name))
      .map((name) => path.join(root, "src", "webview", "assets", name))
      .sort(),
  ]);
}

function findRendererCss() {
  return firstExisting([
    path.join(root, "src", "webview", "assets", "index-DYqVWCHk.css"),
    ...fs
      .readdirSync(path.join(root, "src", "webview", "assets"))
      .filter((name) => /^index-.*\.css$/.test(name))
      .map((name) => path.join(root, "src", "webview", "assets", name))
      .sort(),
  ]);
}

function readRequired(label, filePath) {
  if (!filePath || !fs.existsSync(filePath)) {
    throw new Error(`missing required file for ${label}`);
  }
  return fs.readFileSync(filePath, "utf8");
}

function extractRoutes(rendererText) {
  const raw = rendererText.match(/["'`]\/[A-Za-z0-9_/:?*.\-]+["'`]/g) || [];
  return Array.from(
    new Set(
      raw
        .map((token) => token.slice(1, -1))
        .filter((token) => token.startsWith("/") && !token.includes("//"))
        .filter((token) => token.length > 1)
        .filter((token) => !token.includes(".js") && !token.includes(".css")),
    ),
  ).sort();
}

function extractByPresence(text, candidates) {
  return candidates.filter((value) => text.includes(`"${value}"`) || text.includes(`'${value}'`)).sort();
}

function extractIpcChannels(preloadText, mainText) {
  const all = `${preloadText}\n${mainText}`;
  const channels = all.match(/codex_desktop:[a-z0-9:-]+/gi) || [];
  const unique = new Set(channels.map((c) => c.toLowerCase()));
  unique.add("codex_desktop:worker:${id}:from-view");
  unique.add("codex_desktop:worker:${id}:for-view");
  return Array.from(unique).sort();
}

function extractKeyframes(cssText) {
  const keys = [];
  const re = /@keyframes\s+([A-Za-z0-9_-]+)/g;
  let match;
  while ((match = re.exec(cssText)) !== null) {
    keys.push(match[1]);
  }
  return Array.from(new Set(keys)).sort();
}

function extractCssVariables(cssText) {
  const vars = cssText.match(/--[A-Za-z0-9_-]+(?=\s*:)/g) || [];
  return Array.from(new Set(vars)).sort();
}

function writeJson(fileName, data) {
  fs.writeFileSync(path.join(docsParityDir, fileName), `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function listOpaqueBundles() {
  const targets = [
    path.join(root, "src", "webview", "assets"),
    path.join(root, "src", ".vite", "build"),
    path.join(root, "tmp", "codex-wakaru", "unminify-safe", "third_party", "CodexDesktop-Rebuild", "src", "webview", "assets"),
    path.join(root, "tmp", "codex-wakaru", "unminify-safe", "third_party", "CodexDesktop-Rebuild", "src", ".vite", "build"),
  ];

  const entries = [];
  for (const target of targets) {
    if (!fs.existsSync(target)) {
      continue;
    }
    const queue = [target];
    while (queue.length > 0) {
      const current = queue.pop();
      const stat = fs.statSync(current);
      if (stat.isDirectory()) {
        for (const child of fs.readdirSync(current)) {
          queue.push(path.join(current, child));
        }
        continue;
      }
      if (!/\.(js|mjs|cjs|css)$/.test(current)) {
        continue;
      }
      const text = fs.readFileSync(current, "utf8");
      const stats = textStats(text);
      const opaque = isOpaqueStats(stats);
      if (!opaque && stats.byteSize < 150_000) {
        continue;
      }
      entries.push({
        path: path.relative(root, current),
        byteSize: stats.byteSize,
        lineCount: stats.lineCount,
        maxLineLength: stats.maxLineLength,
        averageLineLength: stats.averageLineLength,
        opaque,
      });
    }
  }

  entries.sort((a, b) => {
    if (b.maxLineLength !== a.maxLineLength) {
      return b.maxLineLength - a.maxLineLength;
    }
    return b.byteSize - a.byteSize;
  });
  return entries;
}

const rendererBundle = findRendererBundle();
const rendererCss = findRendererCss();
const pdfWorkerBundle = firstExisting([
  path.join(root, "src", "webview", "assets", "pdf.worker.min-qwK7q_zL.mjs"),
  path.join(
    root,
    "tmp",
    "codex-wakaru",
    "unminify-safe",
    "third_party",
    "CodexDesktop-Rebuild",
    "src",
    "webview",
    "assets",
    "pdf.worker.min-qwK7q_zL.mjs",
  ),
]);
const mainBundle = firstExisting([
  path.join(
    root,
    "tmp",
    "codex-wakaru",
    "unminify-safe",
    "third_party",
    "CodexDesktop-Rebuild",
    "src",
    ".vite",
    "build",
    "main-CQwPb0Th.js",
  ),
  path.join(root, "src", ".vite", "build", "main-CQwPb0Th.js"),
]);
const workerBundle = firstExisting([
  path.join(
    root,
    "tmp",
    "codex-wakaru",
    "unminify-safe",
    "third_party",
    "CodexDesktop-Rebuild",
    "src",
    ".vite",
    "build",
    "worker.js",
  ),
  path.join(root, "src", ".vite", "build", "worker.js"),
]);
const preloadBundle = firstExisting([
  path.join(
    root,
    "tmp",
    "codex-wakaru",
    "unminify-safe",
    "third_party",
    "CodexDesktop-Rebuild",
    "src",
    ".vite",
    "build",
    "preload.js",
  ),
  path.join(root, "src", ".vite", "build", "preload.js"),
]);

const rendererText = readRequired("renderer bundle", rendererBundle);
const cssText = readRequired("renderer css", rendererCss);
const pdfWorkerText = readRequired("pdf worker bundle", pdfWorkerBundle);
const mainText = readRequired("main bundle", mainBundle);
const workerText = readRequired("worker bundle", workerBundle);
const preloadText = readRequired("preload bundle", preloadBundle);

const queryCandidates = [
  "account-info",
  "active-workspace-roots",
  "child-processes",
  "codex-home",
  "extension-info",
  "find-files",
  "get-configuration",
  "get-global-state",
  "gh-cli-status",
  "gh-pr-status",
  "git-origins",
  "has-custom-cli-executable",
  "ide-context",
  "inbox-items",
  "is-copilot-api-available",
  "list-automations",
  "list-pending-automation-run-threads",
  "list-pinned-threads",
  "local-environment",
  "local-environments",
  "locale-info",
  "open-in-targets",
  "os-info",
  "paths-exist",
  "pending-automation-runs",
  "read-file",
  "read-file-binary",
  "read-git-file-binary",
  "recommended-skills",
  "third-party-notices",
  "workspace-root-options",
];

const mutationCandidates = [
  "add-workspace-root-option",
  "apply-patch",
  "automation-create",
  "automation-delete",
  "automation-run-delete",
  "automation-run-now",
  "automation-update",
  "generate-pull-request-message",
  "generate-thread-title",
  "gh-pr-create",
  "git-checkout-branch",
  "git-create-branch",
  "git-push",
  "install-recommended-skill",
  "local-environment-config-save",
  "open-file",
  "remove-skill",
  "set-configuration",
  "set-global-state",
  "set-preferred-app",
  "terminal-create",
  "terminal-attach",
  "terminal-write",
  "terminal-resize",
  "terminal-close",
];

const gitWorkerMethodCandidates = [
  "stable-metadata",
  "current-branch",
  "upstream-branch",
  "branch-ahead-count",
  "default-branch",
  "base-branch",
  "recent-branches",
  "branch-changes",
  "status-summary",
  "staged-and-unstaged-changes",
  "untracked-changes",
  "tracked-uncommitted-changes",
  "submodule-paths",
  "cat-file",
  "index-info",
  "config-value",
  "set-config-value",
  "create-worktree",
  "restore-worktree",
  "delete-worktree",
  "apply-changes",
  "commit",
  "list-worktrees",
  "codex-worktree",
  "worktree-snapshot-ref",
  "git-init-repo",
  "invalidate-stable-metadata",
];

const routeMap = extractRoutes(rendererText);
const rpcQueries = extractByPresence(rendererText, queryCandidates);
const rpcMutations = extractByPresence(rendererText, mutationCandidates);
const ipcChannels = extractIpcChannels(preloadText, mainText);
const workerGitMethods = extractByPresence(workerText, gitWorkerMethodCandidates);
const keyframes = extractKeyframes(cssText);
const cssVariables = extractCssVariables(cssText);
const pdfWorkerStats = textStats(pdfWorkerText);

const sourceManifestEntries = [
  resolveRequiredSource("renderer.bundle", [
    {
      sourceClass: "original",
      path: path.join(root, "src", "webview", "assets", "index-CgwAo6pj.js"),
    },
    {
      sourceClass: "unminify-safe",
      path: path.join(
        root,
        "tmp",
        "codex-wakaru",
        "unminify-safe",
        "third_party",
        "CodexDesktop-Rebuild",
        "src",
        "webview",
        "assets",
        "index-CgwAo6pj.js",
      ),
    },
  ]),
  resolveRequiredSource("renderer.css", [
    {
      sourceClass: "original",
      path: path.join(root, "src", "webview", "assets", "index-DYqVWCHk.css"),
    },
    {
      sourceClass: "unminify-safe",
      path: path.join(
        root,
        "tmp",
        "codex-wakaru",
        "unminify-safe",
        "third_party",
        "CodexDesktop-Rebuild",
        "src",
        "webview",
        "assets",
        "index-DYqVWCHk.css",
      ),
    },
  ]),
  resolveRequiredSource("renderer.pdfWorker", [
    {
      sourceClass: "original",
      path: path.join(root, "src", "webview", "assets", "pdf.worker.min-qwK7q_zL.mjs"),
    },
    {
      sourceClass: "unminify-safe",
      path: path.join(
        root,
        "tmp",
        "codex-wakaru",
        "unminify-safe",
        "third_party",
        "CodexDesktop-Rebuild",
        "src",
        "webview",
        "assets",
        "pdf.worker.min-qwK7q_zL.mjs",
      ),
    },
  ]),
  resolveRequiredSource("host.main", [
    {
      sourceClass: "unminify-safe",
      path: path.join(
        root,
        "tmp",
        "codex-wakaru",
        "unminify-safe",
        "third_party",
        "CodexDesktop-Rebuild",
        "src",
        ".vite",
        "build",
        "main-CQwPb0Th.js",
      ),
    },
    {
      sourceClass: "original",
      path: path.join(root, "src", ".vite", "build", "main-CQwPb0Th.js"),
    },
  ]),
  resolveRequiredSource("host.worker", [
    {
      sourceClass: "unminify-safe",
      path: path.join(
        root,
        "tmp",
        "codex-wakaru",
        "unminify-safe",
        "third_party",
        "CodexDesktop-Rebuild",
        "src",
        ".vite",
        "build",
        "worker.js",
      ),
    },
    {
      sourceClass: "original",
      path: path.join(root, "src", ".vite", "build", "worker.js"),
    },
  ]),
  resolveRequiredSource("host.preload", [
    {
      sourceClass: "unminify-safe",
      path: path.join(
        root,
        "tmp",
        "codex-wakaru",
        "unminify-safe",
        "third_party",
        "CodexDesktop-Rebuild",
        "src",
        ".vite",
        "build",
        "preload.js",
      ),
    },
    {
      sourceClass: "original",
      path: path.join(root, "src", ".vite", "build", "preload.js"),
    },
  ]),
];

const missingBlindSpotSources = sourceManifestEntries
  .filter(
    (entry) =>
      entry.id.startsWith("renderer.") &&
      entry.candidates.some((candidate) => candidate.sourceClass === "unminify-safe" && candidate.exists === false),
  )
  .map((entry) => entry.id);

const opaqueEntries = listOpaqueBundles();
const sourceCoverage = {
  total: sourceManifestEntries.length,
  available: sourceManifestEntries.filter((entry) => entry.selectedPath).length,
  missing: sourceManifestEntries.filter((entry) => !entry.selectedPath).length,
  opaque: sourceManifestEntries.filter((entry) => entry.extractionStatus === "opaque").length,
  byClass: {
    original: sourceManifestEntries.filter((entry) => entry.sourceClass === "original").length,
    "unminify-safe": sourceManifestEntries.filter((entry) => entry.sourceClass === "unminify-safe").length,
  },
};

writeJson("routes.json", {
  extractedAt: new Date().toISOString(),
  source: path.relative(root, rendererBundle),
  routes: routeMap,
});
writeJson("rpc-queries.json", {
  extractedAt: new Date().toISOString(),
  source: path.relative(root, rendererBundle),
  methods: rpcQueries,
});
writeJson("rpc-mutations.json", {
  extractedAt: new Date().toISOString(),
  source: path.relative(root, rendererBundle),
  methods: rpcMutations,
});
writeJson("worker-git-methods.json", {
  extractedAt: new Date().toISOString(),
  source: path.relative(root, workerBundle),
  methods: workerGitMethods,
});
writeJson("animations.json", {
  extractedAt: new Date().toISOString(),
  source: path.relative(root, rendererCss),
  keyframes,
  cssVariables,
});
writeJson("ipc-channels.json", {
  extractedAt: new Date().toISOString(),
  sources: [path.relative(root, preloadBundle), path.relative(root, mainBundle)],
  channels: ipcChannels,
});
writeJson("pdf-worker.json", {
  extractedAt: new Date().toISOString(),
  source: path.relative(root, pdfWorkerBundle),
  stats: pdfWorkerStats,
  signals: {
    hasOnMessage: pdfWorkerText.includes("onmessage"),
    postMessageRefs: (pdfWorkerText.match(/postMessage/g) || []).length,
    importScriptsRefs: (pdfWorkerText.match(/importScripts/g) || []).length,
  },
});
writeJson("source-manifest.json", {
  extractedAt: new Date().toISOString(),
  coverage: sourceCoverage,
  requiredSources: sourceManifestEntries.map((entry) => ({
    ...entry,
    selectedPath: entry.selectedPath ? path.relative(root, entry.selectedPath) : null,
  })),
  blindSpots: {
    unminifySafeMissingRendererSources: missingBlindSpotSources,
  },
});
writeJson("opaque-bundles.json", {
  extractedAt: new Date().toISOString(),
  heuristics: {
    byteSizeMin: 100000,
    maxLineLengthOpaque: 50000,
    lineCountOpaqueMax: 30,
    averageLineLengthOpaque: 4000,
  },
  totalEntries: opaqueEntries.length,
  opaqueEntries: opaqueEntries.filter((entry) => entry.opaque),
  largeEntries: opaqueEntries,
});

console.log(`[parity:extract] routes=${routeMap.length}`);
console.log(`[parity:extract] rpc queries=${rpcQueries.length}`);
console.log(`[parity:extract] rpc mutations=${rpcMutations.length}`);
console.log(`[parity:extract] worker git methods=${workerGitMethods.length}`);
console.log(`[parity:extract] keyframes=${keyframes.length} cssVariables=${cssVariables.length}`);
console.log(`[parity:extract] source manifest entries=${sourceManifestEntries.length}`);
console.log(`[parity:extract] opaque bundle entries=${opaqueEntries.length}`);
