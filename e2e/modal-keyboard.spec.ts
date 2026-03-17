import { expect, test } from "@playwright/test";

test.describe("modal keyboard flow", () => {
  test("resume modal can be opened and closed with keyboard", async ({ page }) => {
    await page.goto("/#contact");

    const trigger = page.getByRole("button", { name: /view resume/i });
    await expect(trigger).toBeVisible();
    await trigger.click();

    const modalTitle = page.getByRole("heading", { name: /resume preview/i });
    await expect(modalTitle).toBeVisible();

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");

    await page.keyboard.press("Escape");
    await expect(modalTitle).toBeHidden();
  });
});
