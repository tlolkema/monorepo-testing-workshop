import { test, expect } from "@playwright/test";

export const shouldHavePageTitle = (options: { pageTitle: string }) => {
  return test("should have page title", async ({ page }) => {
    await page.goto("");
    await expect(page).toHaveTitle(options.pageTitle);
  });
};
