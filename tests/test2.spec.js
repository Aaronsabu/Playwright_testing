import test from '@playwright/test';

test('Test2', async({browser})=> {
    const context=await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://www.saucedemo.com");

    //await page.pause();
    const userName = page.locator('#user-name');  //with id
    const passowrd = page.locator('#password');   //located with id name
    const loginButton = page.locator('[type="submit"]')  //located with attribute name

    await userName.fill('standard_user'); 
    await passowrd.fill('secret_sauce');
    await loginButton.click();

    await userName.fill('');  //to empty the field
})