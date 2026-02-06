const fs = require('fs-extra');
const path = require('node:path');
const os = require('node:os');
const fg = require('fast-glob');
const { runTransformationRules, transformationRules } = require('@wakaru/unminify');

const forbiddenRuleIds = new Set(['un-esm', 'un-type-constructor', 'un-async-await']);
const safeRuleIds = transformationRules
  .map(rule => rule.id)
  .filter(id => !forbiddenRuleIds.has(id));

function parseArgs(argv) {
  const opts = {
    outDir: path.resolve('tmp/codex-wakaru/unminify-safe'),
    concurrency: Math.max(1, Math.floor(os.cpus().length / 2)),
    globs: [],
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--out') {
      opts.outDir = path.resolve(argv[i + 1]);
      i += 1;
      continue;
    }
    if (arg === '--concurrency') {
      opts.concurrency = Math.max(1, Number(argv[i + 1] || '1'));
      i += 1;
      continue;
    }
    opts.globs.push(arg);
  }

  return opts;
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const files = await fg(opts.globs, {
    cwd: process.cwd(),
    absolute: true,
    onlyFiles: true,
    unique: true,
    followSymbolicLinks: false,
  });

  if (files.length === 0) {
    console.error('No input files matched.');
    process.exit(1);
  }

  await fs.ensureDir(opts.outDir);

  let cursor = 0;
  let completed = 0;
  const failures = [];
  const workers = Math.min(opts.concurrency, files.length);

  async function worker() {
    for (;;) {
      const index = cursor;
      cursor += 1;
      if (index >= files.length) return;

      const inputPath = files[index];
      const relPath = path.relative(process.cwd(), inputPath);
      const outputPath = path.join(opts.outDir, relPath);

      const source = await fs.readFile(inputPath, 'utf8');
      try {
        const { code } = await runTransformationRules(
          { path: inputPath, source },
          safeRuleIds,
          {},
        );
        await fs.ensureDir(path.dirname(outputPath));
        await fs.writeFile(outputPath, code, 'utf8');
      }
      catch (err) {
        failures.push({ relPath, err: err && err.message ? err.message : String(err) });
        await fs.ensureDir(path.dirname(outputPath));
        await fs.writeFile(outputPath, source, 'utf8');
      }

      completed += 1;
      if (completed % 25 === 0 || completed === files.length) {
        console.log(`[${completed}/${files.length}] ${relPath}`);
      }
    }
  }

  await Promise.all(Array.from({ length: workers }, () => worker()));

  console.log(`\nDone. Wrote ${files.length} files to ${opts.outDir}`);
  if (failures.length > 0) {
    console.log(`Encountered ${failures.length} parse/transform failures; original source was copied for those files.`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
