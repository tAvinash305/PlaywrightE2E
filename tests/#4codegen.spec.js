import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // to generate code automatically in playwright
  // npx playwright codegen

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
    waitUntil: 'domcontentloaded'
  });
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  const username = await page.locator(".oxd-userdropdown-name").textContent();
  console.log(username);
  await expect(await page.getByText(username)).toBeVisible();
});