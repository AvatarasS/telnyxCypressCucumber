const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import CareersPage from "../../POM/careers.page";
import FooterPage from "../../POM/footer.page";

let footerPage = new FooterPage
let careersPage = new CareersPage

When("I click on the Careers button", () => {
    footerPage.footerButtons.eq(1).should('be.visible')
    footerPage.clickCareersButton()
    careersPage.pageTitle.should('be.visible')
})

When("I scroll down to the EMPLOYEE SPOTLIGHT block", () => {
    careersPage.employeeSpotlightBlock.scrollIntoView()
})

Then("I should see the 'See employee spotlights' button", () => {
    careersPage.checkEmployeeSpotlightButton()
})
