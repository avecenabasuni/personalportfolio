import test from "node:test";
import assert from "node:assert/strict";
import {
  normalizeExternalUrl,
  normalizeInternalPath,
} from "../scripts/link-normalization.mjs";

test("normalizes internal routes by removing query strings", () => {
  assert.deepEqual(normalizeInternalPath("/case-studies?ref=home"), {
    route: "/case-studies",
    hash: "",
  });
});

test("preserves hash fragments after internal route query strings", () => {
  assert.deepEqual(
    normalizeInternalPath("/case-studies/fullstack-observability?ref=home#outcome"),
    {
      route: "/case-studies/fullstack-observability",
      hash: "outcome",
    },
  );
});

test("normalizes root hash links", () => {
  assert.deepEqual(normalizeInternalPath("/#contact"), {
    route: "/",
    hash: "contact",
  });
});

test("normalizes external URLs by dropping trailing punctuation and anchors", () => {
  assert.equal(
    normalizeExternalUrl("https://example.com/docs?q=observability#section)."),
    "https://example.com/docs?q=observability",
  );
});
