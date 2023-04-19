const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import MainPage from "../../POM/main.page";

let mainPage = new MainPage

When("I scroll down to the Company logos block", () => {
    mainPage.companyLogos.scrollIntoView()
})

Then(/^I should see the (\w+) company logos$/, (quantity) => {
  mainPage.companyLogos.find('img').should('have.length', quantity)
})