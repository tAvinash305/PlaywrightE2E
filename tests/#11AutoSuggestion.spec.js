import {test, expect} from '@playwright/test';

test("Handle Auto Suggestions", async ({ page }) => {
    await page.goto("https://www.redbus.in/");

    await page.locator("#srcinput").fill('Delhi');
    await page.waitForSelector("//div[contains(@class, 'suggestion-item')]/div[1]");
    await page.click("//div[contains(@class, 'listHeader___90a8b7') and normalize-space()='ISBT Kashmiri Gate, Delhi']");

    await expect(page.locator("#srcinput")).toHaveAttribute("value", "ISBT Kashmiri Gate, Delhi");
    await page.waitForTimeout(5000);
});