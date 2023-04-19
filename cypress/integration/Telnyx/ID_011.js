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

When("I click on the First Name field", () => {
    messagingPricingPage.clickFirstNameField()
})

When("I click on the Last Name field", () => {
    messagingPricingPage.clickLastNameField()
})

When("I click on the Business email field", () => {
    messagingPricingPage.clickBusinessEmailNameField()
})

Then(/^I should see a red error border around the (\'(.+)\') field$/, (field) => {
    cy.fixture('testData.json').then((testData) => {
        messagingPricingPage.pricingForm.find('input').eq(testData.pricingField[field])
            .should('have.attr', 'aria-describedby', 'ValidMsg' + field)
    })
})
