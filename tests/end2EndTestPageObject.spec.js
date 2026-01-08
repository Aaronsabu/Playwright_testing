import {test,expect} from "@playwright/test";
import { LoginPage } from "./pageObject/LoginPage.js";
import { ProdPage } from "./pageObject/prodPage.js";
import { CartPage } from "./pageObject/CartPage.js";
import { ThankyouPage } from "./pageObject/thankyouPage.js";
import { ObjectManager } from "./pageObject/ObjectManager.js";

test('end2EndTestPageObject',async({page})=>{     //page fixture is used here
// const context=await browser.newContext()
// const page=await context.newPage()
    const uName = 'standard_user';
    const password = 'secret_sauce';
    const prodName = 'Sauce Labs Backpack';

    const ObjManager = new ObjectManager(page);

    const login = ObjManager.getLoginPage();
    const prod = ObjManager.getProdPage();
    const cart = ObjManager.getCartPage();
    const thank = ObjManager.getThankYouPage()

   
    await login.gotoLogin();  //calling gotoLogin function
    await login.validateLogin(uName, password);

   
    await prod.searchProdCart(prodName); 
    await prod.addToCart();  
    await prod.Cart(prodName);


    await cart.details();

    await thank.thankYou();
    
    await page.pause();

     //const login = new LoginPage(page); //object creation for login page
     // const prodPage = new ProdPage(page); //Object creation for prod page
     // const cartPage = new CartPage(page);
     // const thankPage = new ThankyouPage(page)
})  