import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const globalsCssPath = path.join(projectRoot, "app", "globals.css");
const navPath = path.join(projectRoot, "components", "layout", "Navigation.tsx");

const globalsCss = fs.readFileSync(globalsCssPath, "utf8");
const navigation = fs.readFileSync(navPath, "utf8");

const checks = [
  {
    label: "html scroll-padding-top variable",
    ok: /scroll-padding-top:\s*var\(--anchor-offset\)/.test(globalsCss),
  },
  {
    label: "id scroll-margin-top variable",
    ok: /\[id\]\s*\{[\s\S]*scroll-margin-top:\s*var\(--anchor-offset\)/.test(globalsCss),
  },
  {
    label: "mobile anchor offset variable",
    ok: /--anchor-offset:\s*6\.5rem/.test(globalsCss),
  },
  {
    label: "desktop anchor offset variable",
    ok: /@media\s*\(min-width:\s*768px\)[\s\S]*--anchor-offset:\s*5\.5rem/.test(globalsCss),
  },
  {
    label: "navbar links use hash hrefs",
    ok: /href:\s*"#home"/.test(navigation) && /href:\s*"#contact"/.test(navigation),
  },
];

const failed = checks.filter((check) => !check.ok);

if (failed.length) {
  console.error("Anchor offset smoke test failed:");
  for (const item of failed) {
    console.error(`- ${item.label}`);
  }
  process.exit(1);
}

console.log("Anchor offset smoke test passed.");
