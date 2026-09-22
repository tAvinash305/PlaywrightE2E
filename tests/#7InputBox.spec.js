import {test, expect} from '@playwright/test';

test("Input Box", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const nameField = await page.locator("//input[@id='name']");
    await expect(nameField).toBeVisible();
    await expect(nameField).toBeEmpty();
    await expect(nameField).toBeEditable();
    await expect(nameField).toBeEnabled();

    await page.fill("//input[@id='name']", "Avinash");
});