import test from '@playwright/test';
import { request } from 'node:http';

test('postCall', async({request}) => {
    const autData = {  //we need headers
        "username" : "admin",
        "password" : "password123"
    }
    const response = await request.post('https://restful-booker.herokuapp.com/auth', {headers: {'Content-Type': 'application/json'}, data: autData});

    const status = response.status();
    console.log(status);

    const json = await response.json();
    console.log(json); // we get unique token 
})

test.only('post1Call', async({request}) => {
    const bookingData = {
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
 const resp = await request.post('https://restful-booker.herokuapp.com/booking', {headers: {'Content-Type': 'application/json'}, data: bookingData})

 const body = await resp.json();
 console.log(body)
})