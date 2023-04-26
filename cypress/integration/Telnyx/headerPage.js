const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import HeaderPage from "../POM/header.page";

let headerPage = new HeaderPage

When(/^I click on the (\w+) button at the header$/, (button) => {
    cy.fixture('testData.json').then((testData) => {
        headerPage.clickHeaderButton(testData.headerButton[button])
    })
})

When(/^I click on the (\'(.+)\') button$/, (button) => {
    cy.fixture('testData.json').then((testData) => {
        headerPage.clickMenuItemButton(testData.headerMenuitem[button], testData.headerMenuitemHref[button])
    })
})