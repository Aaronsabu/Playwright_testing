import {test,expect} from "@playwright/test";

test('end2EndTest',async({page})=>{     //page fixture is used here
// const context=await browser.newContext()
// const page=await context.newPage()
await page.goto("https://www.saucedemo.com");

    const userName = page.locator('#user-name');  //with id
    const passowrd = page.locator('#password');   //located with id name
    const loginButton = page.locator('[type="submit"]')  //located with attribute name

    await userName.fill('standard_user'); 
    await passowrd.fill('secret_sauce');
    await loginButton.click();
    await page.waitForLoadState();  //to wait for the page to load completly

    const prodTitle = page.locator('.inventory_item_name ');
    await prodTitle.first().waitFor();  //getting the 1st element and wait for the element to load
    const titles = await prodTitle.allTextContents()  //to get details of all prod titles
    console.log(titles);

    const prod = page.locator('.inventory_item_description');
    const prodName = 'Sauce Labs Backpack';
    const count = await prod.count();
    //console.log(count)

    for(let i=0;i<count;i++)
    {
        if(await prod.nth(i).locator('.inventory_item_name').textContent() === prodName)  
        {
            prod.locator(".inventory_item_name:has-text ('Sauce Labs Backpack')")
            console.log(await prod.nth(i).locator('.inventory_item_name').textContent())
            await prod.nth(i).locator("text=Add to cart").click() //checking the cart
            break;
        }
    
    }
        await page.locator('.shopping_cart_link').click();       
        await page.locator('.inventory_item_name').first().waitFor();  //chaining so we give outer class name and space and then child
        const prod_Name = await page.locator(`.inventory_item_name:has-text("${prodName}")`).isVisible();  //using backticks to get the prodName value
        //const prodVisible = await prod_Name.isVisible(); //checking prodName is visible or not(boolean)
        console.log(prod_Name);
        expect(prod_Name).toBeTruthy();  //test passes only when it is true

        await page.locator('#checkout').click();
        await page.locator('[placeholder="First Name"]').fill("Aaron")
        await page.locator('[placeholder="Last Name"]').fill("Joseph")
        await page.locator('[placeholder="Zip/Postal Code"]').fill("68653");
        await page.locator('#continue').click();
        await page.locator('#finish').click();

        const thankMsg = page.locator('h2.complete-header');
        await expect(thankMsg).toHaveText('Thank you for your order!'); //checking that text is present or not
    
    await page.pause();
})