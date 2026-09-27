import {test, expect} from '@playwright/test';

test("Handle Dropdown", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const dropdownSelector = await page.locator("#country");
    const dropdownOptions1 = await page.locator("#country option");
    const dropdownOptions2 = await page.$$("#country option");
    const content = await dropdownSelector.textContent();

    // Selecting Options from Dropdown
    await dropdownSelector.selectOption("Japan");
    await dropdownSelector.selectOption({label: "India"});
    await dropdownSelector.selectOption({value: "uk"});
    await dropdownSelector.selectOption({index: 2});
    await page.selectOption("#country", "India");
    for(const options of dropdownOptions2){
        const value = await options.textContent();
        if(value.includes("France")){
            await page.selectOption("#country", options);
            break;
        }
    }

    // Count the total number of options 
    await expect(await dropdownOptions1).toHaveCount(10);
    console.log("Number of Options: ", dropdownOptions2.length);
    await expect(dropdownOptions2.length).toBe(10);

    // Check the presence of Value
    await expect(await content.includes("India")).toBeTruthy();

    var status = false;
    for(const option of dropdownOptions2){
        console.log(await option.textContent());
        const countryValue = await option.textContent();
        if(countryValue.includes("France")){
            status = true;
            break;
        }
    }
    await expect(status).toBeTruthy();
});