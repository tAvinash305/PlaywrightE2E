import {test, expect} from '@playwright/test';

test("Handle MultiSelect Dropdown", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.selectOption("#colors", ['Blue', 'Red', 'Yellow']);

    // Assertions
    // 1 Verify the count of options present
    const options = await page.locator("#colors option");
    await expect(options).toHaveCount(7);

    // 2 Using JS length
    const options2 = await page.$$("#colors option");
    console.log("Number of Items: ", options2.length);
    await expect(options2.length).toBe(7);

    // 3 Verify the presence of an item
    const dropdownValues = await page.locator("#colors").textContent();
    console.log("Values in the dropdown: ", dropdownValues);
    await expect(dropdownValues.includes("Red")).toBeTruthy();
    await expect(dropdownValues.includes("Black")).toBeFalsy();

    await page.waitForTimeout(5000);
});