const { test, expect } = require("@playwright/test");
const { spawnSync } = require("node:child_process");
const path = require("node:path");

test("tauri-driver smoke command is healthy", async () => {
  const repoRoot = path.resolve(__dirname, "..", "..");
  const result = spawnSync("pnpm", ["run", "test:tauri-driver"], {
    cwd: repoRoot,
    shell: true,
    encoding: "utf8",
  });

  expect(result.status, `test:tauri-driver failed\n${result.stdout}\n${result.stderr}`).toBe(0);
});
