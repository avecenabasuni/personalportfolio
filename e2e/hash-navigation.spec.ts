import { expect, test } from "@playwright/test";

test.describe("hash navigation", () => {
  test("home, work, and contact anchors land with visible section heading", async ({ page }) => {
    await page.goto("/");

    const homeSection = page.locator("#home");
    await expect(homeSection).toBeVisible();

    await page
      .locator("header")
      .getByRole("link", { name: "Work", exact: true })
      .click();
    await expect(page).toHaveURL(/#case-studies$/);

    const caseStudiesHeading = page
      .locator("#case-studies")
      .getByRole("heading", { level: 2 })
      .first();
    await expect(caseStudiesHeading).toBeVisible();
    const workTop = (await caseStudiesHeading.boundingBox())?.y ?? 0;
    expect(workTop).toBeGreaterThan(50);

    await page
      .locator("header")
      .getByRole("link", { name: "Contact", exact: true })
      .click();
    await expect(page).toHaveURL(/#contact$/);

    const contactHeading = page.locator("#contact").getByRole("heading", {
      name: /ready to talk\?/i,
    });
    await expect(contactHeading).toBeVisible();
    const contactTop = (await contactHeading.boundingBox())?.y ?? 0;
    expect(contactTop).toBeGreaterThan(50);
  });
});
