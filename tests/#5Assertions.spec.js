import {test, expect} from '@playwright/test';

test("Assertions", async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // 1 toHaveURL
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // 1.1 Negative .not.toHaveURL()
    await expect(page).not.toHaveURL("https://opensource-demo.o.com/web/index.php/auth/login");

    // 2 tohaveTitle
    await expect(page).toHaveTitle("OrangeHRM");

    // 3 toBeVisible
    await expect(await page.locator(".orangehrm-login-branding")).toBeVisible();

    // 4 toBeEnabled
    await expect(await page.getByRole("button", {type:'submit'})).toBeEnabled();

    // Login Scenario
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", {type: 'submit'}).click();

    // 5 toHaveAttribute
    const searchBox = await page.locator(".oxd-main-menu-search input");
    await expect(searchBox).toHaveAttribute('placeholder', 'Search');

    // 6 toHaveText()  ----- To match text
    const dashboardText = await page.locator("span h6");
    await expect(dashboardText).toHaveText("Dashboard");

    // 7 toContainText()  ------ To contain text
    await expect(dashboardText).toContainText("Dash");

    // 8 toHaveValue   ----- Input has a value
    await searchBox.fill("demo");
    await expect(searchBox).toHaveValue("demo");

    // 9 toHaveCount 
    const actions = await page.locator(".orangehrm-todo-list-item");
    await expect(actions).toHaveCount(2);
})