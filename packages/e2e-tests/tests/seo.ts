import { test, expect } from "@playwright/test";

export const shouldHavePageTitle = (options: { pageTitle: string }) => {
  return test("should have page title", async ({ page }) => {
    await page.goto("");
    await expect(page).toHaveTitle(options.pageTitle);
  });
};

export const navigateToLinkAndCheckTitle = (options: { linkName: string, pageTitle: string }) => {
  return test("navigate to and check title", async ({ page }) => {
    const link = await page.getByText(options.linkName);
    await link.click();

    await expect(page).toHaveTitle(options.pageTitle);
  });
};
