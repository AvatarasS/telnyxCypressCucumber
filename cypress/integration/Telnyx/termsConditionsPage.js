const { Then } = require("@badeball/cypress-cucumber-preprocessor");

import TermsConditionsPage from "../POM/terms.conditions.page";

let termsConditionsPage = new TermsConditionsPage

Then(/^I should see on the page (\w+) (\w+) title named (\'(.+)\')$/, (number, st, title) => {
    termsConditionsPage.checkTitles(number, title)
})