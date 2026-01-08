import test, { expect } from '@playwright/test';

test('alertHandle', async({browser})=> {
    const context=await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://selenium.qabible.in/javascript-alert.php");



    //await page.on('dialog', dialog=>dialog.accept());  //to click ok in pop up message
    //await page.on('dialog', dialog=>dialog.dismiss());  //to cancel the pop up message

    //we need to handle the pop up first and then write the code to click the button.
    page.on('dialog', async (dialog)=>{
        console.log(dialog.message());   //to print the message shown in pop up
        await dialog.accept()
        }
    )
    const btn = page.locator('.btn.btn-warning');
    await btn.click()

    await page.pause()

})
