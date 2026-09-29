import {test, expect} from 'playwright/test';

test("Hidden Dropdowns", async ({ page }) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {
        waitUntil: "domcontentloaded"
    });

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", {type: 'submit'}).click();

    await page.click("//span[normalize-space()='PIM']");
    await page.click("//label[normalize-space()='Job Title']/../../div/div[@class='oxd-select-wrapper']/div/div[normalize-space()='-- Select --']");
    // await page.click("//span[normalize-space()='Account Assistant']");

    await page.waitForTimeout(3000);
    const options = await page.$$("//div[@role='listbox']//span");
    for(let option of options){
        const jobTitle = await option.textContent();
        // console.log(jobTitle);
        if(jobTitle.includes("Sales Representative")){
            await option.click();
            break;
        }
    }
    
    await page.waitForTimeout(5000);
});