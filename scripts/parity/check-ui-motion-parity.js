#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..", "..");
const animationsPath = path.join(root, "docs", "parity", "animations.json");

function extractKeyframes(cssText) {
  const re = /@keyframes\s+([A-Za-z0-9_-]+)/g;
  const values = new Set();
  for (const match of cssText.matchAll(re)) {
    values.add(match[1]);
  }
  return Array.from(values).sort();
}

function extractCssVariables(cssText) {
  const values = new Set();
  for (const match of cssText.matchAll(/--[A-Za-z0-9_-]+(?=\s*:)/g)) {
    values.add(match[0]);
  }
  return Array.from(values).sort();
}

function diff(expected, actual) {
  const expectedSet = new Set(expected);
  const actualSet = new Set(actual);
  return {
    missing: expected.filter((item) => !actualSet.has(item)),
    extra: actual.filter((item) => !expectedSet.has(item)),
  };
}

function main() {
  const baseline = JSON.parse(fs.readFileSync(animationsPath, "utf8"));
  const sourcePath = path.join(root, baseline.source || "");
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`animation source does not exist: ${sourcePath}`);
  }

  const cssText = fs.readFileSync(sourcePath, "utf8");
  const currentKeyframes = extractKeyframes(cssText);
  const currentCssVariables = extractCssVariables(cssText);
  const expectedKeyframes = Array.isArray(baseline.keyframes) ? baseline.keyframes : [];
  const expectedCssVariables = Array.isArray(baseline.cssVariables) ? baseline.cssVariables : [];

  const keyframesDiff = diff(expectedKeyframes, currentKeyframes);
  const cssVariablesDiff = diff(expectedCssVariables, currentCssVariables);
  const report = {
    extractedAt: new Date().toISOString(),
    source: {
      baseline: path.relative(root, animationsPath),
      css: path.relative(root, sourcePath),
    },
    counts: {
      expectedKeyframes: expectedKeyframes.length,
      currentKeyframes: currentKeyframes.length,
      expectedCssVariables: expectedCssVariables.length,
      currentCssVariables: currentCssVariables.length,
    },
    diff: {
      keyframes: keyframesDiff,
      cssVariables: cssVariablesDiff,
    },
  };

  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  if (
    keyframesDiff.missing.length > 0 ||
    keyframesDiff.extra.length > 0 ||
    cssVariablesDiff.missing.length > 0 ||
    cssVariablesDiff.extra.length > 0
  ) {
    process.exitCode = 1;
  }
}

try {
  main();
} catch (error) {
  process.stderr.write(`[parity:check-ui-motion-parity] ${error.message}\n`);
  process.exit(1);
}
