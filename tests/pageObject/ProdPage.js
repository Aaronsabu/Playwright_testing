import { expect } from "@playwright/test";
export class ProdPage {
    constructor(page) {
        this.page = page;
         this.prodTitle = page.locator('.inventory_item_name');
         this.prod = page.locator('.inventory_item_description');
        this.cart = page.locator('.shopping_cart_link')
         
    }

    async searchProdCart(prodName) {
        await this.prodTitle.first().waitFor();  //getting the 1st element and wait for the element to load
        const titles = await this.prodTitle.allTextContents()  //to get details of all prod titles
        console.log(this.prodTitle)
        console.log(titles);

        await this.page.locator('.inventory_item').first().waitFor();
        const count = await this.prod.count();
        console.log("total count",count)
        for(let i=0;i<count;i++)
        {
            if(await this.prod.nth(i).locator('.inventory_item_name').textContent() === prodName)  
            {
                this.prod.locator(`.inventory_item_name:has-text("${prodName}")`)
                console.log(await this.prod.nth(i).locator('.inventory_item_name').textContent())
                await this.prod.nth(i).locator("text=Add to cart").click() //checking the cart
                break;
            }
        
        }
    }

    async addToCart() {
        await this.cart.click();  
        
    }

    async Cart(prodName) {
        await this.prodTitle.first().waitFor();  //chaining so we give outer class name and space and then child
        const prod_Name = await this.page.locator(`.inventory_item_name:has-text("${prodName}")`).isVisible();  //using backticks to get the prodName value
        //const prodVisible = await prod_Name.isVisible(); //checking prodName is visible or not(boolean)
        console.log(prod_Name);
        expect(prod_Name).toBeTruthy();  //test passes only when it is true
    }

        
}