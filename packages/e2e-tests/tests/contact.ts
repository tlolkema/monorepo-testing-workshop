import { test } from "@playwright/test";

export const shouldSubmitContactForm = () => {
  return test("should submit contact form", async ({ page }) => {
    await page.goto("");
    await page.getByText("Contact Us!").click();
    await page.getByTestId("contact-button").click();
  });
};
