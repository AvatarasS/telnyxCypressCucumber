const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import CareersPage from "../POM/careers.page";

let careersPage = new CareersPage

When("I scroll down to the EMPLOYEE SPOTLIGHT block", () => {
    careersPage.employeeSpotlightBlock.scrollIntoView()
})

Then("I should see the 'See employee spotlights' button", () => {
    careersPage.checkEmployeeSpotlightButton()
})
