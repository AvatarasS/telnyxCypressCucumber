const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import DataPrivacyPage from "../POM/data.privacy.page"

let dataPrivacyPage = new DataPrivacyPage

When("I scroll down to the GDPR Frequently Asked Questions dropdown menu block", () => {
    dataPrivacyPage.dropdownListBlock.scrollIntoView().should('be.visible')
})

When("I click on the 'Does Telnyx process personal data?' dropdown button", () => {
    dataPrivacyPage.clickDoesTelnyxProcessButton()
})

Then("I should see the inner text of the 'Does Telnyx process personal data?' dropdown button", () => {
    dataPrivacyPage.checkInnerTextDoesTelnyxButton()
})

Then(/^I should see (\w+) scroll-to buttons over the 'Telnyx Product Updates' block$/, (quantity) => {
    dataPrivacyPage.linksButtonBlock.should('have.length', quantity)
})

Then(/^I should see the (\w+) Product Updates button in the scroll-to buttons block$/, (buttonText) => {
    dataPrivacyPage.linksButtonBlock.eq(0)
        .should('contain', buttonText)
        .should('be.visible')
})

Then(/^I should see the (\w+) Frequently Asked Questions button in the scroll-to buttons block$/, (buttonText) => {
    dataPrivacyPage.linksButtonBlock.eq(3)
        .should('contain', buttonText)
        .should('be.visible')
})
Then(/^I should see the (\w+) button in the scroll-to buttons block$/, (buttonText) => {
    dataPrivacyPage.linksButtonBlock.eq(1)
        .should('contain', buttonText)
        .should('be.visible')
})
Then(/^I should see the (\w+) Transfer Impact Assessment button in the scroll-to buttons block$/, (buttonText) => {
    dataPrivacyPage.linksButtonBlock.eq(2)
        .should('contain', buttonText)
        .should('be.visible')
})