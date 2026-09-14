import {test, expect} from '@playwright/test';

test.only("Locators test", async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');

  await page.click("//a[@id='login2']");
  await page.fill("#loginusername", "pavanol");
  await page.type("#loginpassword", "test@123");
  await page.click("//button[normalize-space()='Log in']");

  await expect(page.locator("#logout2")).toBeVisible();
  await page.pause();
});