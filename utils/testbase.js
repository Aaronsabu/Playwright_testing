import {test} from '@playwright/test';

exports.customTest = test.extend({  //custom fixtures
    dataForOrder: {
    uName: "standard_user",
    password: "secret_sauce",
    prodName: "Sauce Labs Backpack",
    firstName: "Aaron",
    lastName: "Joseph",
    }
})