const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import SmsApiPage from "../POM/sms.api.page";

let smsApiPage = new SmsApiPage

When("I scroll to How It Works block", () => {
    smsApiPage.scrollToHowItWorksBlock()
})

Then(/^I should see (\'(.+)\') with the correct inner text$/, (tab) => {
    cy.fixture('testData.json').then((testData) => {
        smsApiPage.checkTabButtonValue(testData.howItWorksBlock[tab].number,
            testData.howItWorksBlock[tab].value)
    })
})

Then(/^I should see the correct (\'(.+)\') Video$/, (tab) => {
    cy.fixture('testData.json').then((testData) => {
        smsApiPage.checkTabButtonVideo(testData.howItWorksBlock[tab].number,
            testData.howItWorksBlock[tab].vidSource)
    })
})

When(/^I click the (\'(.+)\') tab button$/, (tab) => {
    cy.fixture('testData.json').then((testData) => {
        smsApiPage.clickTabButton(testData.howItWorksBlock[tab].number)
    })
})
