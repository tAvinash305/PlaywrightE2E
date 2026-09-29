import {test, expect} from '@playwright/test';

test.skip("Alert with OK", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        dialog.accept();
    })

    await page.click("#alertBtn");
    await page.waitForTimeout(5000);
});

test.skip("Confirmation Box Alert with OK and Cancel Buttons", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        dialog.accept();  // Accept using OK button
        // dialog.dismiss(); // Dismiss using Cancel button
    })

    await page.click('#confirmBtn');
    await expect(page.locator('#demo')).toHaveText('You pressed OK!');
    await page.waitForTimeout(5000);
});

test("Prompt Box", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        dialog.accept('Avinash');  // Accept using OK button
        // dialog.dismiss(); // Dismiss using Cancel button
    })

    await page.click('#promptBtn');
    await expect(page.locator('#demo')).toContainText('Avinash');
    await page.waitForTimeout(5000);
});