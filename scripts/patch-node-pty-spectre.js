#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

function resolveNodePtyDir() {
  try {
    const pkgJson = require.resolve("node-pty/package.json", {
      paths: [path.join(__dirname, "..")],
    });
    return path.dirname(pkgJson);
  } catch {
    return null;
  }
}

function stripSpectreMitigation(filePath) {
  if (!fs.existsSync(filePath)) return false;
  const original = fs.readFileSync(filePath, "utf8");
  const updated = original.replace(
    /^[ \t]*['"]SpectreMitigation['"]\s*:\s*['"]Spectre['"]\s*,?\s*$/gm,
    "",
  );

  if (updated !== original) {
    fs.writeFileSync(filePath, updated, "utf8");
    console.log(`Patched: ${path.relative(process.cwd(), filePath)}`);
    return true;
  }

  return false;
}

function main() {
  const nodePtyDir = resolveNodePtyDir();
  if (!nodePtyDir) {
    console.log("node-pty is not installed yet, skipping Spectre patch.");
    return;
  }

  const files = [
    path.join(nodePtyDir, "binding.gyp"),
    path.join(nodePtyDir, "deps", "winpty", "src", "winpty.gyp"),
  ];

  let changed = false;
  for (const file of files) {
    changed = stripSpectreMitigation(file) || changed;
  }

  if (!changed) {
    console.log("node-pty Spectre mitigation patch already applied.");
  }
}

main();
