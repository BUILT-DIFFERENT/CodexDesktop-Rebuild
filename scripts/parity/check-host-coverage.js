#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..", "..");
const hostApiPath = path.join(root, "crates", "host-api", "src", "lib.rs");
const mainPath = path.join(root, "apps", "desktop-tauri", "src-tauri", "src", "main.rs");

function parseConstArray(source, constName) {
  const startMarker = `pub const ${constName}`;
  const startIndex = source.indexOf(startMarker);
  if (startIndex === -1) return [];
  const arrayStart = source.indexOf("&[", startIndex);
  if (arrayStart === -1) return [];
  const arrayEnd = source.indexOf("];", arrayStart);
  if (arrayEnd === -1) return [];
  const section = source.slice(arrayStart, arrayEnd + 2);
  return Array.from(section.matchAll(/"([^"]+)"/g), (item) => item[1]);
}

function asSet(values) {
  return new Set(values);
}

function toSortedArray(values) {
  return Array.from(values).sort((a, b) => a.localeCompare(b));
}

function main() {
  const hostApi = fs.readFileSync(hostApiPath, "utf8");
  const mainSrc = fs.readFileSync(mainPath, "utf8");

  const expectedQueries = parseConstArray(hostApi, "QUERY_METHODS");
  const expectedMutations = parseConstArray(hostApi, "MUTATION_METHODS");
  const explicitMethods = Array.from(mainSrc.matchAll(/"([a-z0-9\-\/]+)"\s*=>/g), (item) => item[1]);
  const explicitSet = asSet(explicitMethods);

  const hasKnownQueryFallback =
    mainSrc.includes("is_known_query_method(&request.method)") ||
    mainSrc.includes("QUERY_METHODS.contains");
  const hasKnownMutationFallback =
    mainSrc.includes("is_known_mutation_method(&request.method)") ||
    mainSrc.includes("MUTATION_METHODS.contains");

  const implementedQuerySet = hasKnownQueryFallback ? asSet(expectedQueries) : explicitSet;
  const implementedMutationSet = hasKnownMutationFallback ? asSet(expectedMutations) : explicitSet;

  const missingQueries = expectedQueries.filter((method) => !implementedQuerySet.has(method));
  const missingMutations = expectedMutations.filter((method) => !implementedMutationSet.has(method));

  const report = {
    extractedAt: new Date().toISOString(),
    source: {
      hostApi: path.relative(root, hostApiPath),
      main: path.relative(root, mainPath),
    },
    expected: {
      queryMethods: expectedQueries.length,
      mutationMethods: expectedMutations.length,
    },
    coverage: {
      queryMethods: expectedQueries.length - missingQueries.length,
      mutationMethods: expectedMutations.length - missingMutations.length,
    },
    missing: {
      queryMethods: missingQueries,
      mutationMethods: missingMutations,
    },
    warnings: {
      hasNotImplementedFallback:
        mainSrc.includes("query_not_implemented") || mainSrc.includes("mutation_not_implemented"),
    },
  };

  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);

  const failed =
    missingQueries.length > 0 ||
    missingMutations.length > 0 ||
    report.warnings.hasNotImplementedFallback;
  if (failed) {
    process.exitCode = 1;
  }
}

try {
  main();
} catch (error) {
  process.stderr.write(`[parity:check-host-coverage] ${error.message}\n`);
  process.exit(1);
}
