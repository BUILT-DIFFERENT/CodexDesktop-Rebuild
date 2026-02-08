#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..", "..");
const parityWorkerMethodsPath = path.join(root, "docs", "parity", "worker-git-methods.json");
const gitWorkerPath = path.join(root, "crates", "git-worker", "src", "lib.rs");

function main() {
  const manifest = JSON.parse(fs.readFileSync(parityWorkerMethodsPath, "utf8"));
  const gitWorker = fs.readFileSync(gitWorkerPath, "utf8");

  const expectedMethods = Array.isArray(manifest.methods) ? manifest.methods : [];
  const implementedMethods = Array.from(gitWorker.matchAll(/"([a-z0-9\-\/]+)"\s*=>/g), (item) => item[1]);
  const implementedSet = new Set(implementedMethods);
  const missingMethods = expectedMethods.filter((method) => !implementedSet.has(method));
  const hasUnimplementedFallback =
    gitWorker.includes("unimplemented") || gitWorker.includes("not yet fully implemented");

  const report = {
    extractedAt: new Date().toISOString(),
    source: {
      parityManifest: path.relative(root, parityWorkerMethodsPath),
      gitWorker: path.relative(root, gitWorkerPath),
    },
    expectedMethodCount: expectedMethods.length,
    implementedMethodCount: expectedMethods.length - missingMethods.length,
    missingMethods,
    warnings: {
      hasUnimplementedFallback,
    },
  };

  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);

  if (missingMethods.length > 0 || hasUnimplementedFallback) {
    process.exitCode = 1;
  }
}

try {
  main();
} catch (error) {
  process.stderr.write(`[parity:check-worker-coverage] ${error.message}\n`);
  process.exit(1);
}
