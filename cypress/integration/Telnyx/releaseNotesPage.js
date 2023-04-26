const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import ReleaseNotesPage from "../POM/release.notes.page";

let releaseNotesPage = new ReleaseNotesPage

When(/^I type in the search field (\'(.+)\')$/, (searchValue) => {
    releaseNotesPage.searchField.should('have.value', '')
        .type(searchValue)
})

Then(/^I should see (\'(.+)\') typed in the search field$/, (searchValue) => {
    releaseNotesPage.searchField.should('have.value', searchValue)
})

When("I click on the Read More button in the 'Integrate your systems using HTTP requests in TeXML bin' paragraph", () => {
    releaseNotesPage.clickReadMoreButton()
    releaseNotesPage.title.should('be.visible')
})

Then(/^I should see the (\'(.+)\') title on the page$/, (titleName) => {
    releaseNotesPage.title.should('have.text', titleName)
})

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