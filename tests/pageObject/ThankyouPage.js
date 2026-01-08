import { expect } from "@playwright/test";
export class ThankyouPage {
    constructor(page){
        this.thankMsg = page.locator('h2.complete-header');
    }


    async thankYou() {
        this.thankMsg;
        await expect(this.thankMsg).toHaveText('Thank you for your order!'); //checking that text is present or not
    }
    
}