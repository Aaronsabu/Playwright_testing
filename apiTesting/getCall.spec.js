import {test,expect} from '@playwright/test';

test('apiGetCall', async({request})=> {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1')
    //console.log(response);

    const resBody = await response.body();
    //console.log(resBody);

    const resJson = await response.json();
    console.log(resJson);

    const resHeader = response.headers();
    //console.log(resHeader);

    const status = response.status();
    console.log(status);

    const statusText = response.statusText();
    console.log(statusText);

    const headerArry = response.headersArray();
    //console.log(headerArry);

    expect(status).toBe(200);
    expect(response.ok()).toBeTruthy();
    expect(resJson).toHaveProperty("userId",1); //checks whether this property is true or not
    expect(resJson.body).toContain("quia");
})