import {test, expect} from '@playwright/test';

test("Locators test", async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');

  await page.click("//a[@id='login2']");
  await page.fill("#loginusername", "pavanol");
  await page.type("#loginpassword", "test@123");
  await page.click("//button[normalize-space()='Log in']");

  await expect(page.locator("#logout2")).toBeVisible();
  
  // Selecting multiple elements using locators
  await page.waitForSelector("//h4/a");
  const products = await page.$$("//h4/a");
  for(const product of products) {
    const productName = await product.textContent();
    console.log(productName);
  }
});