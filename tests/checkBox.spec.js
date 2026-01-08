import {test, expect} from "@playwright/test";

test('checkBox', async({browser})=> {
    const context=await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://selenium.qabible.in/check-box-demo.php");

    const checkBox=page.locator('#gridCheck');
    await checkBox.check();
    await expect(checkBox).toBeChecked();
    const check = await checkBox.isChecked();  //return a boolean value
    expect(check).toBeTruthy();  //it will work only if it is true

    await checkBox.uncheck();
    //await expect(checkBox).toBeChecked();  //it will fail as we unchecked the check box
    const checked = await checkBox.isChecked();   //it return boolean value
    console.log(checked);

    expect(checked).toBeFalsy()  //it will work only if it is false

    const pageTitle = await page.title();  // gives the title of the page
    console.log(pageTitle); 
    
    await expect(page).toHaveTitle(pageTitle);  //it checks the value of pageTitle is correct or not
    
    //await page.pause();

});