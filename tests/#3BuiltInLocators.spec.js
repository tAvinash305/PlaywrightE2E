import {test, expect} from 'playwright/test';

test("Built In Locators", async ({ page }) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {
        waitUntil: "domcontentloaded"
    });

    const logo = await page.getByAltText("company-branding");
    await expect(logo).toBeVisible();

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");

    await page.getByRole("button", {type: 'submit'}).click();
    
    const username = await page.locator(".oxd-userdropdown-name").textContent();
    console.log(username);
    await expect(await page.getByText(username)).toBeVisible();
});