import test from "node:test";
import assert from "node:assert/strict";
import { isCertificationExpired } from "../lib/certification-expiry.mjs";

test("certifications without an expiry date are treated as active", () => {
  assert.equal(isCertificationExpired({ name: "No expiry" }), false);
});

test("invalid expiry dates are treated as active instead of failing closed", () => {
  assert.equal(
    isCertificationExpired(
      { expiresOn: "not a date" },
      new Date("2026-06-10T00:00:00Z"),
    ),
    false,
  );
});

test("certification remains active through the end of its expiry date", () => {
  assert.equal(
    isCertificationExpired(
      { expiresOn: "June 10, 2026" },
      new Date("2026-06-10T12:00:00"),
    ),
    false,
  );
});

test("certification expires after its expiry date has fully passed", () => {
  assert.equal(
    isCertificationExpired(
      { expiresOn: "June 10, 2026" },
      new Date("2026-06-11T00:00:00"),
    ),
    true,
  );
});
