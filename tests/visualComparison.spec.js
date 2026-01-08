import {test, expect} from '@playwright/test';

test('visualComparison', async({browser})=> {
    const context=await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://www.google.com");

    expect(await page.screenshot()).toMatchSnapshot('google1.png') //takes screenshot and checks google1.png is there or not (1st it will fail and then we run, it will pass)

})