const { expect } = require('@wdio/globals');
const fs = require('fs');


describe('Signup', () => {
    it('success', async () => {
        const elementButton = await $('~button-signin');
        await elementButton.waitForDisplayed();
        await elementButton.click();

        const next = await $('~button-next');
        await next.waitForDisplayed();
        await next.click();
    });

    it('not success', async () => {
        const elementButton = await $('~button-sign');
        await elementButton.waitForDisplayed();
        await elementButton.click();

        const next = await $('~button-next');
        await next.waitForDisplayed();
        await next.click();
    });
});
