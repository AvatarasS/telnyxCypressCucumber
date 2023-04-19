const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import DataPrivacyPage from "../../POM/data.privacy.page";

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
