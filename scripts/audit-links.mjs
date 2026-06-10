import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const scanRoots = ["app", "components", "lib", "README.md", "ROADMAP.md"];
const textExtensions = new Set([".ts", ".tsx", ".md"]);
const assetPrefixRegex = /^\/(?:images|documents)\//;
const externalRegex = /^https?:\/\//;
const ignoredInternalPrefixes = ["/_next/", "/favicon.ico"];

function walk(entryPath, files = []) {
  const stats = fs.statSync(entryPath);

  if (stats.isFile()) {
    if (textExtensions.has(path.extname(entryPath))) {
      files.push(entryPath);
    }
    return files;
  }

  for (const entry of fs.readdirSync(entryPath, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    walk(path.join(entryPath, entry.name), files);
  }

  return files;
}

function collectFiles() {
  return scanRoots
    .map((root) => path.join(projectRoot, root))
    .filter((rootPath) => fs.existsSync(rootPath))
    .flatMap((rootPath) => walk(rootPath));
}

function routeFromPage(filePath) {
  const relative = path
    .relative(path.join(projectRoot, "app"), filePath)
    .replaceAll(path.sep, "/");
  const route = relative
    .replace(/\/page\.tsx$/, "")
    .replace(/\/route\.ts$/, "")
    .replace(/^page\.tsx$/, "")
    .replace(/^route\.ts$/, "");

  return `/${route}`.replace(/\/$/, "") || "/";
}

function dynamicRouteToRegex(route) {
  const pattern = route
    .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    .replace(/\\\[\.{3}[^/]+\\\]/g, ".+")
    .replace(/\\\[[^/]+\\\]/g, "[^/]+");

  return new RegExp(`^${pattern}$`);
}

function collectAppRoutes() {
  const appPath = path.join(projectRoot, "app");
  const routeFiles = walk(appPath).filter((file) =>
    /[\\\/](page\.tsx|route\.ts)$/.test(file),
  );
  const routes = routeFiles.map(routeFromPage);

  return {
    staticRoutes: new Set(routes.filter((route) => !route.includes("["))),
    dynamicRoutes: routes
      .filter((route) => route.includes("["))
      .map(dynamicRouteToRegex),
  };
}

function collectIds(files) {
  const ids = new Set();
  const idRegex = /\bid=["']([^"']+)["']/g;

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    for (const match of content.matchAll(idRegex)) {
      ids.add(match[1]);
    }
  }

  return ids;
}

function collectReferences(files) {
  const references = [];
  const patterns = [
    /\b(?:href|src)=["']([^"']+)["']/g,
    /\b(?:href|src)=\{["'`]([^"'`]+)["'`]\}/g,
    /\b(?:href|url|src):\s*["']([^"']+)["']/g,
    /(https?:\/\/[^\s"'<>`)]+)/g,
    /(\/(?:images|documents)\/[A-Za-z0-9._\-/]+)/g,
  ];

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    const relativeFile = path.relative(projectRoot, file);

    for (const pattern of patterns) {
      for (const match of content.matchAll(pattern)) {
        const value = match[1].trim();
        if (!value || value.includes("${")) {
          continue;
        }

        references.push({ file: relativeFile, value });
      }
    }
  }

  return references;
}

function normalizeInternalPath(value) {
  const withoutQuery = value.split("?")[0];
  const [routePart, hashPart] = withoutQuery.split("#");

  return {
    route: routePart || "/",
    hash: hashPart || "",
  };
}

function routeExists(route, appRoutes) {
  if (appRoutes.staticRoutes.has(route)) {
    return true;
  }

  return appRoutes.dynamicRoutes.some((pattern) => pattern.test(route));
}

const files = collectFiles();
const ids = collectIds(files);
const appRoutes = collectAppRoutes();
const references = collectReferences(files);
const seen = new Set();
const failures = [];
const external = new Set();

for (const reference of references) {
  const key = `${reference.file}:${reference.value}`;
  if (seen.has(key)) {
    continue;
  }
  seen.add(key);

  const { value, file } = reference;

  if (externalRegex.test(value)) {
    external.add(value);
    continue;
  }

  if (value.startsWith("mailto:") || value.startsWith("tel:")) {
    continue;
  }

  if (assetPrefixRegex.test(value)) {
    const localPath = path.join(projectRoot, "public", value.slice(1));
    if (!fs.existsSync(localPath)) {
      failures.push(`${file}: missing asset ${value}`);
    }
    continue;
  }

  if (value.startsWith("#") || value.startsWith("/#")) {
    const hash = value.replace(/^\/?#/, "");
    if (!ids.has(hash)) {
      failures.push(`${file}: missing hash target #${hash}`);
    }
    continue;
  }

  if (!value.startsWith("/")) {
    continue;
  }

  if (ignoredInternalPrefixes.some((prefix) => value.startsWith(prefix))) {
    continue;
  }

  const { route, hash } = normalizeInternalPath(value);
  if (!routeExists(route, appRoutes)) {
    failures.push(`${file}: missing internal route ${route}`);
    continue;
  }

  if (hash && !ids.has(hash)) {
    failures.push(`${file}: missing hash target #${hash}`);
  }
}

if (external.size) {
  console.warn(
    `External URL live checks are non-blocking; discovered ${external.size} outbound URLs.`,
  );
}

if (failures.length) {
  console.error("Link audit failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(
  `Link audit passed. Checked ${seen.size} references across ${files.length} files.`,
);
