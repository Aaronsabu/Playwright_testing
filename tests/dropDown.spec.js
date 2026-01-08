import test from '@playwright/test';

test('dropDown', async({browser})=> {
    const context=await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://selenium.qabible.in/");

    const inputForm = page.locator('a[href="simple-form-demo.php"]');
    await inputForm.click();

    const selectInput = page.locator('a[href="select-input.php"]');
    await selectInput.click();

    const selectColor = page.locator('#single-input-field');
    await selectColor.selectOption('Red');   //to select from the dropbox

    await page.pause();
})