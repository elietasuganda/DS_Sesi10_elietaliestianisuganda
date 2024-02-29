const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');

Given(/^Elieta is on the login page$/, async () => {
    await LoginPage.open()
})

When(/^Elieta login with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username)
})

Then(/^Elieta should see home page$/, async () => {
    await HomePage.validateHomePage()
})

Then (/^Elieta should see error "(.*)"$/, async (message) => {
    await LoginPage.validateLockedOutUserError(message)
})

Then (/^Elieta should see error "(.*)"$/, async (message) => {
    await LoginPage.validateProblemUserError(message)
})

Then (/^Elieta should see error "(.*)"$/, async (message) => {
    await LoginPage.validatePerformanceGlitchUserError(message)
})

Then (/^Elieta should see error "(.*)"$/, async (message) => {
    await LoginPage.validateErrorUserError(message)
})

Then (/^Elieta should see error "(.*)"$/, async (message) => {
    await LoginPage.validateVisualUserError(message)
})