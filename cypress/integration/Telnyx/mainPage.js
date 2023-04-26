const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import MainPage from "../POM/main.page";

let mainPage = new MainPage

Given("I visited the Telnyx Main page", () => {
  mainPage.visitTelnyx()
  mainPage.closeCookie()
});

When("I scroll down to the footer video", () => {
    mainPage.logoVideo.scrollIntoView()
})

Then("I should see the correct video playback", () => {
    mainPage.logoVideo.find('source')
                      .should('have.attr', 'src', '/images/home/logo-pattern.mp4')
})

When("I scroll down to the Company logos block", () => {
    mainPage.companyLogos.scrollIntoView()
})

Then(/^I should see the (\w+) company logos$/, (quantity) => {
  mainPage.companyLogos.find('img').should('have.length', quantity)
})

Then(/^I should see (\'(.+)\') that has the correct href (\'(.+)\')$/, (button, href) =>{
    cy.contains(button).should('be.visible')
                       .should('have.attr', 'href', href)
})

When(/^I click (\w+) button$/, (submit) => {
  cy.contains(submit).should('be.visible').click()
})



