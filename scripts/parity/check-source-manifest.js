#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..", "..");
const sourceManifestPath = path.join(root, "docs", "parity", "source-manifest.json");

function main() {
  const manifest = JSON.parse(fs.readFileSync(sourceManifestPath, "utf8"));
  const requiredSources = Array.isArray(manifest.requiredSources) ? manifest.requiredSources : [];
  const missingSources = requiredSources.filter((source) => source.extractionStatus === "missing");
  const unresolvedSources = requiredSources.filter((source) => !source.selectedPath);
  const missingFiles = requiredSources.filter(
    (source) => source.selectedPath && !fs.existsSync(path.join(root, source.selectedPath)),
  );

  const report = {
    extractedAt: new Date().toISOString(),
    source: path.relative(root, sourceManifestPath),
    requiredSourceCount: requiredSources.length,
    missingSourceCount: missingSources.length,
    unresolvedSourceCount: unresolvedSources.length,
    missingFileCount: missingFiles.length,
    missingSources: missingSources.map((source) => source.id),
    unresolvedSources: unresolvedSources.map((source) => source.id),
    missingFiles: missingFiles.map((source) => source.selectedPath),
  };

  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  if (missingSources.length > 0 || unresolvedSources.length > 0 || missingFiles.length > 0) {
    process.exitCode = 1;
  }
}

try {
  main();
} catch (error) {
  process.stderr.write(`[parity:check-source-manifest] ${error.message}\n`);
  process.exit(1);
}
