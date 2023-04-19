const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import ReleaseNotesPage from "../../POM/release.notes.page";

let releaseNotesPage = new ReleaseNotesPage

When(/^I type in the search field (\'(.+)\')$/, (searchValue) => {
  releaseNotesPage.searchField.should('have.value', '')
                              .type(searchValue)
})

Then(/^I should see (\'(.+)\') typed in the search field$/, (searchValue) => {
  releaseNotesPage.searchField.should('have.value', searchValue)
})
