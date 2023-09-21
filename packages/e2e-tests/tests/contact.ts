import { test } from "@playwright/test";

export const clickContactButton = () => {
  return test("should have page title", async ({ page }) => {
    await page.goto("/contact");
    await page.locator('[data-testid="contact-button"]').click();
  });
};
