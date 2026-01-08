import test from "@playwright/test";

test('demoTest', async({browser})=> {
    const context=await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://www.google.com");

    await page.pause();
})