const { When } = require("@badeball/cypress-cucumber-preprocessor");

import DataPrivacyPage from "../POM/data.privacy.page";
import FooterPage from "../POM/footer.page";
import ReleaseNotesPage from "../POM/release.notes.page";
import CareersPage from "../POM/careers.page";

let careersPage = new CareersPage
let footerPage = new FooterPage
let dataPrivacyPage = new DataPrivacyPage
let releaseNotesPage = new ReleaseNotesPage


When("I scroll down to the footer", () => {
    footerPage.scrollToBottom()
})

When("I click on the Data and Privacy button", () => {
    footerPage.footerButtons.eq(0).should('be.visible')
    footerPage.clickDataPrivacyButton()
    dataPrivacyPage.pageTitle.should('be.visible')
})

When("I click on the Release Notes button", () => {
    footerPage.footerButtons.eq(1).should('be.visible')
    footerPage.clickReleaseNotesButton()
    releaseNotesPage.releaseNotesTitle.should('be.visible')
})

When("I click on the Website Terms and Conditions button", () => {
    footerPage.footerButtons.eq(1).should('be.visible')
    footerPage.clickWebsiteTermsButton()
})

When("I click on the Careers button", () => {
    footerPage.footerButtons.eq(1).should('be.visible')
    footerPage.clickCareersButton()
    careersPage.pageTitle.should('be.visible')
})
