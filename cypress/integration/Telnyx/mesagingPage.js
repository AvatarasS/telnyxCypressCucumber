const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import MessagingPricingPage from "../POM/messaging.page";

let messagingPricingPage = new MessagingPricingPage

When("I scroll down to the Download Pricing form", () => {
    messagingPricingPage.scrollToPricingForm()
})

When(/^I fill the (\w+) field with (\'(.+)\')$/, (field, value) => {
    cy.fixture('testData.json').then((testData) => {
        messagingPricingPage.pricingForm.find('input')
            .eq(testData.pricingField[field])
            .type(value)
            .should('have.value', value)
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

Then(/^I should see completing message (\'(.+)\')$/, (message) => {
    messagingPricingPage.checkCompletePricingFormMessage(message)
})

Then(/^I should see the Email error message (\'(.+)\')$/, (message) => {
    messagingPricingPage.checkEmailErrorMessage(message)
})