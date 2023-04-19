const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import FooterPage from "../POM/footer.page";
import TermsConditionsPage from "../POM/terms.conditions.page";

let footerPage = new FooterPage
let termsConditionsPage = new TermsConditionsPage

When("I click on the Website Terms and Conditions button", () => {
  footerPage.footerButtons.eq(1).should('be.visible')
  footerPage.clickWebsiteTermsButton()
})

Then(/^I should see on the page (\w+) (\w+) title named (\'(.+)\')$/, (number, st, title) => {
    termsConditionsPage.checkTitles(number, title)
})