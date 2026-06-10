import fs from "node:fs";
import path from "node:path";
import { normalizeExternalUrl } from "./link-normalization.mjs";

const projectRoot = process.cwd();
const scanRoots = ["app", "components", "lib", "README.md", "ROADMAP.md"];
const textExtensions = new Set([".ts", ".tsx", ".md"]);
const externalRegex = /https?:\/\/[^\s"'<>`)]+/g;
const timeoutMs = 8_000;
const concurrency = 5;
const isMarkdown = process.argv.includes("--markdown");
const isStrict = process.argv.includes("--strict");

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

function collectExternalUrls(files) {
  const urls = new Map();

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    const relativeFile = path.relative(projectRoot, file);
    const matches = content.match(externalRegex) ?? [];

    for (const match of matches) {
      const url = normalizeExternalUrl(match);
      if (url.includes("${")) {
        continue;
      }
      const sources = urls.get(url) ?? new Set();
      sources.add(relativeFile);
      urls.set(url, sources);
    }
  }

  return Array.from(urls, ([url, sources]) => ({
    url,
    sources: Array.from(sources).sort(),
  })).sort((a, b) => a.url.localeCompare(b.url));
}

async function fetchWithMethod(url, method) {
  const response = await fetch(url, {
    method,
    redirect: "follow",
    signal: AbortSignal.timeout(timeoutMs),
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; portfolio-link-health/1.0; +https://avecenabasuni.my.id)",
    },
  });

  const isRestrictedButReachable = [401, 403, 429].includes(response.status);

  return {
    ok: (response.status >= 200 && response.status < 400) || isRestrictedButReachable,
    status: response.status,
    finalUrl: response.url,
    restricted: isRestrictedButReachable,
  };
}

async function checkUrl(item) {
  const startedAt = Date.now();

  try {
    let result = await fetchWithMethod(item.url, "HEAD");

    if (!result.ok || result.status === 405) {
      result = await fetchWithMethod(item.url, "GET");
    }

    return {
      ...item,
      ...result,
      durationMs: Date.now() - startedAt,
    };
  } catch (error) {
    return {
      ...item,
      ok: false,
      status: "ERR",
      finalUrl: item.url,
      durationMs: Date.now() - startedAt,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

async function runPool(items) {
  const results = [];
  let index = 0;

  async function worker() {
    while (index < items.length) {
      const item = items[index];
      index += 1;
      results.push(await checkUrl(item));
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, () => worker()),
  );

  return results.sort((a, b) => a.url.localeCompare(b.url));
}

function formatMarkdown(results) {
  const healthy = results.filter((result) => result.ok);
  const restricted = results.filter((result) => result.restricted);
  const unhealthy = results.filter((result) => !result.ok);
  const lines = [
    "# External Link Health",
    "",
    `Checked ${results.length} external URLs.`,
    `Healthy: ${healthy.length}. Restricted but reachable: ${restricted.length}. Attention needed: ${unhealthy.length}.`,
    "",
  ];

  if (unhealthy.length) {
    lines.push("## Attention Needed", "");
    lines.push("| Status | URL | Source |");
    lines.push("| --- | --- | --- |");
    for (const result of unhealthy) {
      lines.push(
        `| ${result.status} | ${result.url} | ${result.sources.join("<br>")} |`,
      );
    }
    lines.push("");
  }

  lines.push("## All Checked URLs", "");
  lines.push("| Status | Duration | URL |");
  lines.push("| --- | ---: | --- |");
  for (const result of results) {
    lines.push(
      `| ${result.restricted ? `${result.status} restricted` : result.ok ? "OK" : result.status} | ${result.durationMs}ms | ${result.url} |`,
    );
  }

  return lines.join("\n");
}

function formatText(results) {
  const unhealthy = results.filter((result) => !result.ok);
  const restricted = results.filter((result) => result.restricted);
  const lines = [
    `External link health checked ${results.length} URLs.`,
    `Restricted but reachable: ${restricted.length}. Attention needed: ${unhealthy.length}.`,
  ];

  for (const result of unhealthy) {
    lines.push(
      `- ${result.status} ${result.url} (${result.sources.join(", ")})`,
    );
  }

  return lines.join("\n");
}

const urls = collectExternalUrls(collectFiles());
const results = await runPool(urls);
const unhealthy = results.filter((result) => !result.ok);

console.log(isMarkdown ? formatMarkdown(results) : formatText(results));

if (isStrict && unhealthy.length) {
  process.exit(1);
}
