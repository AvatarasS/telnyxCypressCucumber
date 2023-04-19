const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import DataPrivacyPage from "../POM/data.privacy.page";
import FooterPage from "../POM/footer.page";
import HeaderPage from "../POM/header.page";
import MainPage from "../POM/main.page";
import MessagingPricingPage from "../POM/messaging.page";
import ReleaseNotesPage from "../POM/release.notes.page";
import ReportAbusePage from "../POM/report.abuse.page";
import SmsApiPage from "../POM/sms.api.page";
import TermsConditionsPage from "../POM/terms.conditions.page";

let mainPage = new MainPage
let footerPage = new FooterPage
let dataPrivacyPage = new DataPrivacyPage
let reportAbusePage = new ReportAbusePage
let termsConditionsPage = new TermsConditionsPage
let releaseNotesPage = new ReleaseNotesPage
let headerPage = new HeaderPage
let messagingPricingPage = new MessagingPricingPage
let smsApiPage = new SmsApiPage

Given("I visited the Telnyx Main page", () => {
  mainPage.visitTelnyx()
  mainPage.closeCookie()
});

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

When(/^I click on the (\'(.+)\') button$/, (button) => {
  cy.fixture('testData.json').then((testData) => {
      headerPage.clickMenuItemButton(testData.headerMenuitem[button], testData.headerMenuitemHref[button])
  })
})

When("I scroll down to the Download Pricing form", () => {
  messagingPricingPage.scrollToPricingForm()
})

When("I scroll to How It Works block", () => {
  smsApiPage.scrollToHowItWorksBlock()
})

When(/^I fill the (\w+) field with (\'(.+)\')$/, (field, value) => {
  cy.fixture('testData.json').then((testData) => {
      messagingPricingPage.pricingForm.find('input')
          .eq(testData.pricingField[field])
          .type(value)
          .should('have.value', value)
  })
})

When(/^I click (\w+) button$/, (submit) => {
  cy.contains(submit).should('be.visible').click()
})

Then(/^I should see (\'(.+)\') with the correct inner text$/, (tab) => {
  cy.fixture('testData.json').then((testData) => {
      smsApiPage.checkTabButtonValue(testData.howItWorksBlock[tab].number,
          testData.howItWorksBlock[tab].value)
  })
})

Then(/^I should see the correct (\'(.+)\') Video$/, (tab) => {
  cy.fixture('testData.json').then((testData) => {
      smsApiPage.checkTabButtonVideo(testData.howItWorksBlock[tab].number,
          testData.howItWorksBlock[tab].vidSource)
  })
})