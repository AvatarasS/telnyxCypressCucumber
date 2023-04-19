const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import ReleaseNotesPage from "../../POM/release.notes.page";

let releaseNotesPage = new ReleaseNotesPage

When(/^I check the (\'(.+)\') checkbox at sidebox$/, (checkbox) => {
    cy.fixture('testData.json').then((testData) => {
        releaseNotesPage.checkCheckbox(testData.checkboxesSelect[checkbox])
    })
})

Then(/^I should see (\'(.+)\') unchecked$/, (checkbox) => {
    cy.fixture('testData.json').then((testData) => {
        releaseNotesPage.checkboxes.eq(testData.checkboxesSelect[checkbox]).should('not.be.checked')
    })
})