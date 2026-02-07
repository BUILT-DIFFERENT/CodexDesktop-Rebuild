const fs = require("fs-extra");
const path = require("node:path");
const fg = require("fast-glob");
const { runTransformationRules, transformationRules } = require("@wakaru/unminify");

const forbidden = new Set([
  "prettier",
  "prettier-1",
  "un-esm",
  "un-type-constructor",
  "un-async-await",
  "un-undefined",
  "smart-inline",
]);
const slowRules = new Set(["un-indirect-call", "un-optional-chaining"]);
const allRuleIds = transformationRules.map((r) => r.id);

function parseArgs(argv) {
  const opts = {
    outDir: path.resolve("tmp/codex-wakaru/unminify-safe"),
    concurrency: 2,
    metrics: true,
    excludeSlowRules: true,
    extraExcludedRules: [],
    globs: [],
  };

  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === "--out") {
      opts.outDir = path.resolve(argv[i + 1]);
      i += 1;
      continue;
    }
    if (a === "--concurrency") {
      opts.concurrency = Math.max(1, Number(argv[i + 1] || "1"));
      i += 1;
      continue;
    }
    if (a === "--metrics") {
      opts.metrics = true;
      continue;
    }
    if (a === "--no-metrics") {
      opts.metrics = false;
      continue;
    }
    if (a === "--allow-slow-rules") {
      opts.excludeSlowRules = false;
      continue;
    }
    if (a === "--exclude-rule") {
      opts.extraExcludedRules.push(String(argv[i + 1] || "").trim());
      i += 1;
      continue;
    }
    opts.globs.push(a);
  }

  return opts;
}

(async () => {
  const opts = parseArgs(process.argv.slice(2));
  const slowExclusions = opts.excludeSlowRules ? [...slowRules] : [];
  const mergedForbidden = new Set([
    ...forbidden,
    ...slowExclusions,
    ...opts.extraExcludedRules.filter(Boolean),
  ]);
  const safeRuleIds = allRuleIds.filter((id) => !mergedForbidden.has(id));
  if (!safeRuleIds.length) {
    throw new Error("No transformation rules left after exclusions.");
  }
  if (opts.metrics) {
    console.log(
      `Rules enabled: ${safeRuleIds.length}/${allRuleIds.length}; excluded: ${Array.from(mergedForbidden).join(", ")}`,
    );
  }

  const files = await fg(opts.globs, {
    cwd: process.cwd(),
    absolute: true,
    onlyFiles: true,
    unique: true,
    followSymbolicLinks: false,
  });

  if (!files.length) {
    throw new Error("No input files matched.");
  }

  await fs.ensureDir(opts.outDir);

  let cursor = 0;
  let done = 0;
  const runStart = Date.now();
  const workers = Math.min(opts.concurrency, files.length);

  async function worker() {
    for (;;) {
      const idx = cursor;
      cursor += 1;
      if (idx >= files.length) return;

      const inputPath = files[idx];
      const rel = path.relative(process.cwd(), inputPath);
      const outputPath = path.join(opts.outDir, rel);
      const source = await fs.readFile(inputPath, "utf8");
      const startedAt = Date.now();

      if (opts.metrics) {
        console.log(`[start ${idx + 1}/${files.length}] ${rel}`);
      }

      try {
        const { code } = await runTransformationRules(
          { path: inputPath, source },
          safeRuleIds,
          {},
        );
        await fs.ensureDir(path.dirname(outputPath));
        await fs.writeFile(outputPath, code, "utf8");
        if (opts.metrics) {
          console.log(
            `[ok ${idx + 1}/${files.length}] ${rel} (${Date.now() - startedAt} ms)`,
          );
        }
      } catch (e) {
        await fs.ensureDir(path.dirname(outputPath));
        await fs.writeFile(outputPath, source, "utf8");
        if (opts.metrics) {
          const msg = e && e.message ? e.message : String(e);
          console.warn(
            `[fallback ${idx + 1}/${files.length}] ${rel} (${Date.now() - startedAt} ms): ${msg}`,
          );
        }
      }

      done += 1;
      if (done % 10 === 0 || done === files.length) {
        console.log(`[${done}/${files.length}] ${rel}`);
      }
    }
  }

  await Promise.all(Array.from({ length: workers }, () => worker()));
  if (opts.metrics) {
    console.log(`Total time: ${Date.now() - runStart} ms`);
  }
  console.log(`Done. Output: ${opts.outDir}`);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
