import {test, expect} from '@playwright/test';

test("Home page should have correct title", async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page).toHaveTitle('STORE');

  const pageTitle = await page.title();
  await expect(pageTitle).toBe('STORE');

  const pageURL = await page.url();
  await expect(page).toHaveURL("https://demoblaze.com/");

  console.log(`Page title: ${pageTitle}`);
  console.log(`Page URL: ${pageURL}`);
});