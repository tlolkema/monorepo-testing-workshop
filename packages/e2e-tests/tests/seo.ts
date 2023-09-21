import { test, expect } from "@playwright/test";

export const shouldHavePageTitle = (options: { pageTitle: string }) => {
  return test("should have page title", async ({ page }) => {
    await page.goto("");
    await expect(page).toHaveTitle(options.pageTitle);
  });
};


//QUESTION: Store locators in apps or in testcase?
export const shouldNavigateToContactPage = () => {
  return test("Should navigate to contact page and click me button", async ({ page }) => {
    await page.goto("/contact/");
    await page.locator(`data-testid=contact-button`).click();
  });
};
