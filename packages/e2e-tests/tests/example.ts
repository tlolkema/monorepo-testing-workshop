import { test, expect } from "@playwright/test";

export const shouldHaveTitle = () => {
  return test("should have title", async ({ page }) => {
    await page.goto("https://playwright.dev");
    await expect(page).toHaveTitle(/Playwright/);
  });
};
