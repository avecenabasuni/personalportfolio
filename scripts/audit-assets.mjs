import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const scanRoots = ["app", "components", "lib"];
const textExtensions = new Set([".ts", ".tsx", ".md"]);
const refRegex = /\/(images|documents)\/[A-Za-z0-9._\-/]+/g;

function walk(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
      continue;
    }

    if (textExtensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

const files = scanRoots
  .map((root) => path.join(projectRoot, root))
  .filter((root) => fs.existsSync(root))
  .flatMap((root) => walk(root));

const references = new Set();
for (const file of files) {
  const content = fs.readFileSync(file, "utf8");
  const matches = content.match(refRegex) ?? [];
  for (const match of matches) {
    references.add(match);
  }
}

const missing = [];
for (const ref of references) {
  const localPath = path.join(projectRoot, "public", ref.replace(/^\//, ""));
  if (!fs.existsSync(localPath)) {
    missing.push(ref);
  }
}

if (missing.length) {
  console.error("Missing referenced assets:");
  for (const item of missing) {
    console.error(`- ${item}`);
  }
  process.exit(1);
}

console.log(`Asset audit passed. Checked ${references.size} referenced paths.`);
