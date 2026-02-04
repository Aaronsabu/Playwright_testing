import {Given, When, Then} from "@cucumber/cucumber"
 
 Given('Login to e-commerce application with {string}  and {string}',{timeout:100*1000}, async function (username, password) {
            const login = this.ObjManager.getLoginPage();
            await login.gotoLogin();  //calling gotoLogin function
            await login.validateLogin(username, password);
         });

 When('Add {string} to cart', async function (prodName) {
           // Write code here that turns the phrase above into concrete actions
            const prod = this.ObjManager.getProdPage();
            await prod.searchProdCart(prodName); 
            await prod.addToCart();  
         });

Then('Verify {string} in cart page', async function (prodName) {
           // Write code here that turns the phrase above into concrete actions
            const prod = this.ObjManager.getProdPage();
            await prod.Cart(prodName);
            
         });

 When('Place the order', async function () {
           // Write code here that turns the phrase above into concrete actions
           const cart = this.ObjManager.getCartPage();
           await cart.details();
         });

Then('Verify {string} is displaying', async function (thankyou) {
           // Write code here that turns the phrase above into concrete actions
            const thank = this.ObjManager.getThankYouPage()
            await thank.thankYou(thankyou);
         });