import { expect, test } from "@playwright/test";

const roleAnchors = [
  {
    hash: "sre",
    heading: "Site Reliability Engineer",
    cta: "Discuss an SRE role",
  },
  {
    hash: "observability",
    heading: "Observability Engineer",
    cta: "Discuss an observability role",
  },
  {
    hash: "solutions-architect",
    heading: "Reliability-Focused Solutions Architect",
    cta: "Discuss an architecture role",
  },
];

test.describe("hire page", () => {
  test("renders recruiter role anchors and role-specific contact context", async ({
    page,
  }) => {
    await page.goto("/hire");

    await expect(
      page.getByRole("heading", {
        name: "Hire for reliability work that reaches production.",
      }),
    ).toBeVisible();

    for (const role of roleAnchors) {
      await page.goto(`/hire#${role.hash}`);
      const heading = page.getByRole("heading", { name: role.heading });
      await expect(heading).toBeVisible();
      const headingTop = (await heading.boundingBox())?.y ?? 0;
      expect(headingTop).toBeGreaterThan(50);
    }

    await page.goto("/hire#sre");
    await page.getByRole("button", { name: roleAnchors[0].cta }).click();

    await expect(
      page.getByRole("heading", { name: "Discuss a role" }),
    ).toBeVisible();
    await expect(page.getByPlaceholder("Role focus")).toHaveValue(
      roleAnchors[0].heading,
    );
    await expect(page.getByPlaceholder("Team context")).toBeVisible();
    await expect(page.getByPlaceholder("Current stack")).toBeVisible();
  });
});
