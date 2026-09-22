import {test, expect} from '@playwright/test';

test("Soft Assertions", async ({page}) => {
    await page.goto("https://demoblaze.com/");

    // Hard Assertions
    await expect(page).toHaveURL("https://demoblaze.com/");
    await expect(page).toHaveTitle("STORE");
    await expect(page.locator(".navbar-brand").first()).toBeVisible();

    // Soft Assertion
    await expect.soft(page).toHaveURL("https://demoblaze.com/");
    await expect.soft(page).toHaveTitle("STORE123");
    await expect.soft(page.locator(".navbar-brand").first()).toBeVisible();
});