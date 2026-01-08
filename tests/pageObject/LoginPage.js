export class LoginPage {
    constructor(page){
        this.page = page;
        this.userName = page.locator('#user-name');  //with id
        this.passowrd = page.locator('#password');   //located with id name
        this.loginButton = page.locator('[type="submit"]')  //located with attribute name
    }

    async gotoLogin(){
        await this.page.goto("https://www.saucedemo.com");
    }

    async validateLogin(uName, password) {
        await this.userName.fill(uName); 
        await this.passowrd.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState();  //to wait for the page to load completly
    }
}