const { test, expect } = require("@playwright/test");
const { spawnSync } = require("node:child_process");
const path = require("node:path");

function run(command, args, cwd) {
  return spawnSync(command, args, {
    cwd,
    shell: true,
    encoding: "utf8",
  });
}

test("parity extraction and gate checks pass", async () => {
  const repoRoot = path.resolve(__dirname, "..", "..");

  const extract = run("pnpm", ["run", "parity:extract"], repoRoot);
  expect(extract.status, `parity:extract failed\n${extract.stdout}\n${extract.stderr}`).toBe(0);

  const gate = run("pnpm", ["run", "parity:check"], repoRoot);
  expect(gate.status, `parity:check failed\n${gate.stdout}\n${gate.stderr}`).toBe(0);
});
