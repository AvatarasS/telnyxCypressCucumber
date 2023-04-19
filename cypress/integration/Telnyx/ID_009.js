const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import ReleaseNotesPage from "../POM/release.notes.page";

let releaseNotesPage = new ReleaseNotesPage

When("I click on the Read More button in the 'Integrate your systems using HTTP requests in TeXML bin' paragraph", () => {
    releaseNotesPage.clickReadMoreButton()
    releaseNotesPage.title.should('be.visible')
})

Then(/^I should see the (\'(.+)\') title on the page$/, (titleName) => {
    releaseNotesPage.title.should('have.text', titleName)
})
