import test from "node:test";
import assert from "node:assert/strict";
import {
  buildFallbackItems,
  formatMediumRssItem,
  normalizeCategories,
  normalizePublishedAt,
  stripHtml,
  truncateDescription,
} from "../lib/medium-rss.mjs";

test("normalizes standard RSS pubDate values to ISO strings", () => {
  assert.equal(
    normalizePublishedAt("Wed, 10 Jun 2026 07:30:05 GMT"),
    "2026-06-10T07:30:05.000Z",
  );
});

test("normalizes Medium-style date strings without timezone as UTC", () => {
  assert.equal(
    normalizePublishedAt("2026-06-10 07:30:05"),
    "2026-06-10T07:30:05.000Z",
  );
});

test("returns an empty publishedAt for missing or invalid dates", () => {
  assert.equal(normalizePublishedAt(), "");
  assert.equal(normalizePublishedAt("not a date"), "");
});

test("strips HTML and collapses whitespace from descriptions", () => {
  assert.equal(
    stripHtml("<p>Hello <strong>observability</strong></p>\n<p>team</p>"),
    "Hello observability team",
  );
});

test("truncates long descriptions without changing short copy", () => {
  assert.equal(truncateDescription("short copy", 20), "short copy");
  assert.equal(truncateDescription("one two three four", 11), "one two...");
});

test("formats RSS items with fallback title, link, tags, and description", () => {
  assert.deepEqual(
    formatMediumRssItem({
      pubDate: "2026-06-10 07:30",
      description: "<p>Alert noise cleanup for SRE teams.</p>",
      category: "Observability",
    }),
    {
      title: "Untitled article",
      link: "#",
      publishedAt: "2026-06-10T07:30:00.000Z",
      description: "Alert noise cleanup for SRE teams.",
      tags: ["Observability"],
      thumbnail: "",
    },
  );
});

test("keeps category arrays and normalizes empty categories", () => {
  assert.deepEqual(normalizeCategories(["SRE", "New Relic"]), [
    "SRE",
    "New Relic",
  ]);
  assert.deepEqual(normalizeCategories(), []);
});

test("builds fallback items from configured article links", () => {
  assert.deepEqual(
    buildFallbackItems([{ title: "Post", url: "https://medium.com/post" }]),
    [
      {
        title: "Post",
        link: "https://medium.com/post",
        publishedAt: "",
        description: "",
        tags: [],
        thumbnail: "",
      },
    ],
  );
});
