import {test,expect} from "@playwright/test";

test('newTab',async({browser})=>{
const context=await browser.newContext()
const page=await context.newPage()
await page.goto("https://selenium.qabible.in/window-popup.php")
const windowPpBtn = page.locator('a[href="window-popup.php"]');
await  windowPpBtn.click();
//const likeUsonFB=await page.locator('a[href="https://www.facebook.com/obsqurazone/"]');
//const likeUsonFB=await page.locator('.btn.btn-primary.windowSingle');
const likeUsonFB = page.locator('.windowSingle');
const [newChild]=await Promise.all(
    [context.waitForEvent('page'),
        likeUsonFB.click()]);
await newChild.waitForLoadState();  //this method used to wait for the new page to completly load
const c_title=await newChild.title();
console.log(c_title);
await page.pause();
})