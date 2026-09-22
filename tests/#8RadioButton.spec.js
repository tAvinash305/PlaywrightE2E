import {test, expect} from '@playwright/test';

test.only("Radio Buttons", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const femaleField = await page.locator("//input[@id='female']");
    const maleField = await page.locator("//input[@id='male']");

    await expect(femaleField).not.toBeChecked();
    await expect(maleField).not.toBeChecked();

    await maleField.check();
    await expect(await maleField.isChecked()).toBeTruthy();
    await expect(await femaleField.isChecked()).toBeFalsy();

    await femaleField.check();
    await expect(await femaleField.isChecked()).toBeTruthy();
    await expect(await maleField.isChecked()).toBeFalsy();
});