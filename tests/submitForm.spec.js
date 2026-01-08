import test from "@playwright/test";

test('submitForm', async({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://selenium.qabible.in/");

    await page.locator('a[href="simple-form-demo.php"]').click();
    await page.locator('a[href="form-submit.php"]').click();
    await page.locator('#validationCustom01').fill('Aaron');
    await page.locator('#validationCustom02').fill('Joseph');
    await page.locator('#validationCustomUsername').fill('aaronsabu');
    await page.locator('#validationCustom03').fill('Kottayam');
    await page.locator('#validationCustom04').fill('Aaron');
    await page.locator('[placeholder="Zip"]').fill('67890');
    await page.locator('[type="checkbox"]').check();
    await page.locator('[type="submit"]').click();
    
    await page.pause();
})