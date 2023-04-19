const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import HeaderPage from "../../POM/header.page";
import SmsApiPage from "../../POM/sms.api.page";

let headerPage = new HeaderPage
let smsApiPage = new SmsApiPage

When(/^I click on the (\w+) button at header$/, (button) => {
    cy.fixture('testData.json').then((testData) => {
        headerPage.clickHeaderButton(testData.headerButton[button])
    })
})

When(/^I click the (\'(.+)\') tab button$/, (tab) => {
    cy.fixture('testData.json').then((testData) => {
        smsApiPage.clickTabButton(testData.howItWorksBlock[tab].number)
    })
})
