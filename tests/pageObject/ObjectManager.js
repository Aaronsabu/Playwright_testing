import { LoginPage } from "./LoginPage.js";
import { ProdPage } from "./prodPage.js";
import { CartPage } from "./CartPage.js";
import { ThankyouPage } from "./thankyouPage.js";

export class ObjectManager {
    constructor(page) {
        this.page = page
        this.login = new LoginPage(page); //object creation for login page
        this.prodPage = new ProdPage(page); //Object creation for prod page
        this.cartPage = new CartPage(page);
        this.thankPage = new ThankyouPage(page)
    }

    getLoginPage() {
        return this.login //reference variable
    }

    getProdPage() {
        return this.prodPage
    }

    getCartPage() {
        return this.cartPage;
    }

    getThankYouPage() {
        return this.thankPage;
    }

}
