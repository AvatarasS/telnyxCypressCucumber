const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import MainPage from "../../POM/main.page";

let mainPage = new MainPage

When("I scroll down to the footer video", () => {
    mainPage.logoVideo.scrollIntoView()
})

Then("I should see the correct video playback", () => {
    mainPage.logoVideo.find('source')
                      .should('have.attr', 'src', '/images/home/logo-pattern.mp4')
})