import test, { expect } from '@playwright/test';

test('assertion', async({browser})=> {
    const context=await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://www.saucedemo.com");

    //await page.pause();
    const userName = page.locator('#user-name');  //with id
    const passowrd = page.locator('#password');   //located with id name
    const loginButton = page.locator('[type="submit"]')  //located with attribute name

    await userName.fill('a-standard_user'); //entered wrong username
    await passowrd.fill('secret_sauce');
    await loginButton.click();

    const errorMsg = page.locator('[data-test="error"]');

    const msg = await errorMsg.textContent();
    console.log(msg);

    await expect(errorMsg).toContainText(' Username and password');  //if it has any value that we specify then it will pass
})