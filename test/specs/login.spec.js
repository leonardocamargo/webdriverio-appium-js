const { expect } = require('@wdio/globals');
const fs = require('fs');


describe('Login', () => {
    it('success', async () => {

        const signInButton = await $('~button-sign-in');
        await signInButton.waitForDisplayed();
        await signInButton.click();

    });
});
