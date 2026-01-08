export class CartPage {
    constructor(page) {
        this.checkout = page.locator('#checkout')
        this.firstName = page.locator('[placeholder="First Name"]')
        this.lastName = page.locator('[placeholder="Last Name"]')
        this.zip = page.locator('[placeholder="Zip/Postal Code"]')
        this.continue = page.locator('#continue')
        this.finish = page.locator('#finish')
    }

    async details() {
        await this.checkout.click();
        await this.firstName.fill("Aaron")
        await this.lastName.fill("Joseph")
        await this.zip.fill("68653");
        await this.continue.click();
        await this.finish.click();
    }
}