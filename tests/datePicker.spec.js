import test from '@playwright/test';

test('datePicker', async({browser})=> {
    const context=await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://selenium.qabible.in/");

    await page.getByRole('link', {name:"Date Pickers"}).click();
    await page.locator('#single-input-field').click()
    
    const year=2026;
    const month = 5;
    const date = 3;

    const datePickerMonth =  page.locator('.datepicker-days .datepicker-switch')
    await datePickerMonth.click()

    const yearPicker = page.locator('.datepicker-months .datepicker-switch');
    await yearPicker.click();

    while(true) 
    {
        const yearRange = await page.locator('.datepicker-years .datepicker-switch').textContent();
        console.log(yearRange);
        const startYear = parseInt(yearRange.split('-'),0)  //splites the value with - and gets from 0th index
        console.log(startYear);

        if(year>=startYear&&year<=startYear+9)
        {
            break;
        } 
        else if(year>=startYear+9) {
            await page.locator('.datepicker-years .next').click() 
        }
        else{
            await page.locator('.datepicker-years .prev').click()  //clicking prev button in calender
        }
        //await page.locator('.datepicker-years .prev').click()      //clicking prev button in calender
    }

    await page.locator('.datepicker-years .year', { hasText: year.toString() }).click();
    await page.locator('.month').nth(month-1).click()  //since in page it starts with 0
    await page.getByText(date.toString(),{exact:true}).first().click()
    await page.locator('#button-one').click();

    // await page.locator('.datepicker-years .year', { hasText: year.toString() }).click();
    // // Then select the month
    // await page.locator('.month').nth(month - 1).click();
    // // Finally select the date
    // await page.locator('.day', { hasText: date.toString() }).click();

    await page.pause();

})
