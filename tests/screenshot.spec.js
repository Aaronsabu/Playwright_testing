import {test,expect} from "@playwright/test";
test('pageLaunch',async({browser})=>{
const context=await browser.newContext()
const page=await context.newPage()
await page.goto("https://www.saucedemo.com");
// const loginbutton = page.locator('[type="submit"]');
// await loginbutton.click();
//await page.screenshot({path:"screenshot1.png"})//page level screenshot
//await loginbutton.screenshot({path:"screenshotbtn.png"})//element level Screenshot
//--error msg locate cheyth tobe visible
//const errorMsg = page.locator('.error-message-container error')
//expect(errorMsg).toBeVisible;

//-------------------------------------------------------------------------
//After successfull login checks whether error message is not present there
const username= page.locator('#user-name');//locate with id
const password= page.locator('#password');//locate with id
const loginbutton= page.locator('[type="submit"]');//locate with type
await page.screenshot({path:"screenshot1.png"})//element level assertion
await username.fill('standard_user');
await password.fill('secret_sauce');
await loginbutton.click();
const errorMsg = page.locator('.error-message-container .error');
await expect(errorMsg).not.toBeVisible(); //checks error msg not there
await page.pause();
})