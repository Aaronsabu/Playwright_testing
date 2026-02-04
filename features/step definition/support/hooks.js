import { After, AfterStep, Before, BeforeStep, Status } from '@cucumber/cucumber'
import {ObjectManager} from "../../../tests/pageObject/ObjectManager.js";
import { chromium } from "@playwright/test";

Before(async function () {
    //before hook runs at 1st step of each scenerio
        const browser = await chromium.launch({headless: false});  //defined browser as chrome
        const context = await browser.newContext()
        this.page = await context.newPage();
        this.ObjManager = new ObjectManager(this.page);
})

BeforeStep(async function({}) {
    
})

AfterStep(async function({result}) {
    //this will execute after each step
    //to take screenshot after each test fails
    if(result.status === Status.FAILED) {
        await this.page.screenshot({path:'demo.png'})
    }
})

After(async function() {   //after hook will execute after evrythinge
    if(this.page )
    {
        await this.page.close();
    }
    if(this.context) 
    {
        await this.context.close();
    }
    if(this.browser)
    {
        await this.browser.close();
    }
    console.log('closed')

})