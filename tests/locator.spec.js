import test from '@playwright/test';

test('locator', async({browser})=> {
    const context=await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://selenium.qabible.in/check-box-demo.php");

    const checkBox = page.getByLabel('Click on this check box');  //here we have connection in the site with for 
    await checkBox.click();
    const radioButton = page.getByRole('link', {name:"Radio Buttons Demo"});  //we located by using role. It is a link and we given the text value
    await radioButton.click();

    const maleRadioButton = page.getByRole('radio', {name: "Male"}).first(); 
    //const maleButton = page.getByRole('radio', {name: "Male", exact:true}).first(); //if we give exact:true then it will check exact value
    await maleRadioButton.check();

    const showSelectBtn = page.getByText("Show Selected Value");
    await showSelectBtn.click();

    //navigate to Form Submit. identify placeholder and locate using it. getByPlaceholder.fill()
    await page.getByRole('link', {name:"Form Submit"}).first().click();
    await page.getByPlaceholder("First name").fill("Aaron");
    await page.getByPlaceholder("Last name").fill("Joseph");
    await page.getByPlaceholder("Username").fill("aaronsabu");
    await page.getByPlaceholder("City").fill("Kottayam");
    await page.getByPlaceholder("State").fill("Kerala");
    await page.getByPlaceholder("Zip").fill("765472");

    await page.getByLabel("Agree to terms and conditions").check();
    await page.getByText('Submit form').click()
    await page.pause();

})