import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("navigation and illustrative views work without console errors", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  await expect(page).toHaveTitle(/Eyedence/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Revenue operations",
  );
  await page
    .getByRole("link", { name: "Explore the platform", exact: true })
    .click();
  await expect(page).toHaveURL(/#platform$/);
  await page.getByRole("tab", { name: "Data quality" }).click();
  await expect(page.getByRole("tabpanel")).toContainText("Conflicting details");
  await page.getByRole("tab", { name: "Data quality" }).press("ArrowRight");
  await expect(page.getByRole("tab", { name: "Activity" })).toBeFocused();
  await expect(page.getByRole("tabpanel")).toContainText("Next conversation");
  for (const link of await page.locator('a[href^="#"]').all()) {
    const href = await link.getAttribute("href");
    expect(await page.locator(href!).count()).toBe(1);
  }
  expect(errors).toEqual([]);
});

for (const width of [360, 768, 1440]) {
  test(`layout and accessibility at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      result.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    ).toEqual([]);
    await page.screenshot({
      path: `test-results/eyedence-${width}.png`,
      fullPage: true,
    });
  });
}
