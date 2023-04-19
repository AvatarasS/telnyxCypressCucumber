const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import HeaderPage from "../POM/header.page";
import MessagingPricingPage from "../POM/messaging.page";

let headerPage = new HeaderPage
let messagingPricingPage = new MessagingPricingPage

When(/^I click on the (\w+) button at header$/, (button) => {
    cy.fixture('testData.json').then((testData) => {
        headerPage.clickHeaderButton(testData.headerButton[button])
    })
})

Then(/^I should see the Email error message (\'(.+)\')$/, (message) => {
    messagingPricingPage.checkEmailErrorMessage(message)
})