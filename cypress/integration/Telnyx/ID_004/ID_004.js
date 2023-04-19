const { Then } = require("@badeball/cypress-cucumber-preprocessor");

import DataPrivacyPage from "../../POM/data.privacy.page";

let dataPrivacyPage = new DataPrivacyPage

Then(/^I should see the (\w+) Product Updates button in the 'Jump to' block$/, (buttonText) => {
  dataPrivacyPage.linksButtonBlock.find('a').eq(0)
                                            .should('contain', buttonText)
                                            .should('be.visible')
})

Then(/^I should see the (\w+) Frequently Asked Questions button in the 'Jump to' block$/, (buttonText) => {
  dataPrivacyPage.linksButtonBlock.find('a').eq(1)
                                            .should('contain', buttonText)
                                            .should('be.visible')
})
Then(/^I should see the (\w+) button in the 'Jump to' block$/, (buttonText) => {
  dataPrivacyPage.linksButtonBlock.find('a').eq(2)
                                            .should('contain', buttonText)
                                            .should('be.visible')
})
Then(/^I should see the (\w+) Transfer Impact Assessment button in the 'Jump to' block$/, (buttonText) => {
  dataPrivacyPage.linksButtonBlock.find('a').eq(3)
                                            .should('contain', buttonText)
                                            .should('be.visible')
})