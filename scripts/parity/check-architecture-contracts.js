const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..");
const mapPath = path.join(repoRoot, "docs", "rewrite", "architecture-contract-map.json");

function readFile(relPath) {
  const absPath = path.join(repoRoot, relPath);
  return fs.readFileSync(absPath, "utf8");
}

function fileExists(relPath) {
  return fs.existsSync(path.join(repoRoot, relPath));
}

function headingRegex(heading) {
  return new RegExp(`^##\\s+${heading.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}$`, "m");
}

const map = JSON.parse(fs.readFileSync(mapPath, "utf8"));
const errors = [];

for (const [docPath, rules] of Object.entries(map.documents)) {
  if (!fileExists(docPath)) {
    errors.push(`Missing required spec doc: ${docPath}`);
    continue;
  }

  const content = readFile(docPath);

  for (const section of rules.requiredSections || []) {
    if (!headingRegex(section).test(content)) {
      errors.push(`${docPath} missing required section: ${section}`);
    }
  }

  for (const ref of rules.requiredRefs || []) {
    if (!content.includes(ref)) {
      errors.push(`${docPath} missing required reference: ${ref}`);
    }
  }
}

const coverageDocs = map.coverageDocs || Object.keys(map.documents);
let coverageContent = "";
for (const docPath of coverageDocs) {
  if (!fileExists(docPath)) {
    errors.push(`Coverage doc missing: ${docPath}`);
    continue;
  }
  coverageContent += `\n${readFile(docPath)}`;
}

for (const artifact of map.requiredArtifacts || []) {
  if (!coverageContent.includes(artifact)) {
    errors.push(`Parity artifact not referenced in coverage docs: ${artifact}`);
  }
}

if (errors.length > 0) {
  console.error("Architecture contract check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Architecture contract check passed.");
