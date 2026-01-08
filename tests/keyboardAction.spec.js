import test from "@playwright/test";

test('keyboadAction', async({browser})=> {
    const context=await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://www.saucedemo.com");

    //await page.pause();
    const userName = page.locator('#user-name');  //with id
    const password = page.locator('#password');   //located with id name
    const loginButton = page.locator('[type="submit"]')  //located with attribute name

    await userName.click();
    await page.keyboard.type('standard_user')

    await page.keyboard.press('Control+A')  //select all
    await page.keyboard.press('Control+C')  //copied the value
    await password.click();
    await page.keyboard.press('Control+V');
    await page.keyboard.press('Enter');
    //await loginButton.click();

});