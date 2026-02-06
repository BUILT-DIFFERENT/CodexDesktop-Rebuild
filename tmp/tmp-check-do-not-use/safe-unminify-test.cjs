const fs = require('fs-extra');
const path = require('node:path');
const { runTransformationRules, transformationRules } = require('@wakaru/unminify');

const forbidden = new Set(['un-esm', 'un-type-constructor', 'un-async-await']);
const safeRuleIds = transformationRules.map(rule => rule.id).filter(id => !forbidden.has(id));

const [inputPath, outputPath] = process.argv.slice(2);
if (!inputPath || !outputPath) {
  console.error('usage: node safe-unminify-test.cjs <input> <output>');
  process.exit(1);
}

(async () => {
  const source = await fs.readFile(inputPath, 'utf8');
  const fileInfo = { path: inputPath, source };
  const { code } = await runTransformationRules(fileInfo, safeRuleIds, {});
  await fs.ensureDir(path.dirname(outputPath));
  await fs.writeFile(outputPath, code, 'utf8');
  console.log('ok');
})();
