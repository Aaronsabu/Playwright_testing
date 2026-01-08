import test, { expect } from "@playwright/test";

test('dragAndDrop', async({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://selenium.qabible.in/");

    await page.locator('#others').click();

    const source = page.locator("span:has-text('Draggable n°1')");
    const target = page.locator("#mydropzone");
    await source.dragTo(target);
    const sourceText = await source.textContent();
    console.log(sourceText);

    //need to check as assertion whether that drag is coming in the drop items list. can use textContent()
    const draggedBox = page.locator('#mylist span');  //locating the span inside a div whih has an id
    const draggedText = await draggedBox.textContent();
    console.log(draggedText);
    expect(sourceText).toBe(draggedText);

     //await page.pause()
});