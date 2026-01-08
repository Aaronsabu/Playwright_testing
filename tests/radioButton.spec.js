import test from '@playwright/test';

test('radioButton', async({browser})=> {
    const context=await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://selenium.qabible.in/radio-button-demo.php");

    const maleButton = page.locator('#inlineRadio1');
    await maleButton.check();  //to check the radio button

    await page.pause();

})