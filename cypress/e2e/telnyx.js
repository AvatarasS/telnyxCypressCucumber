const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
import DataPrivacyPage from "./POM/data.privacy.page";
import FooterPage from "./POM/footer.page";
import HeaderPage from "./POM/header.pag";
import MainPage from "./POM/main.page";
import MessagingPricingPage from "./POM/messaging.page";
import ReleaseNotesPage from "./POM/release.notes.page";
import ReportAbusePage from "./POM/report.abuse.page";
import SmsApiPage from "./POM/sms.api.page";
import TermsConditionsPage from "./POM/terms.conditions.page";

let mainPage = new MainPage
let footerPage = new FooterPage
let dataPrivacyPage = new DataPrivacyPage
let reportAbusePage = new ReportAbusePage
let termsConditionsPage = new TermsConditionsPage
let releaseNotesPage = new ReleaseNotesPage
let headerPage = new HeaderPage
let messagingPricingPage = new MessagingPricingPage
let smsApiPage = new SmsApiPage

Given("I visited Telnyx Main page", () => {
  mainPage.visitTelnyx()
  mainPage.closeCookie()
});

When("I scroll down", () => {
  mainPage.logoVideo.scrollIntoView()
})

Then("I should see a correct video playback", () => {
  mainPage.logoVideo.find('source')
                    .should('have.attr', 'src', '/images/home/logo-pattern.mp4')
})

When("I scroll down to the Company logos block", () => {
  mainPage.companyLogos.scrollIntoView()
})

Then(/^I should see the (\w+) company logos$/, (quantity) => {
  mainPage.companyLogos.find('img').should('have.length', quantity)
})

When("I scroll down to the bottom", () => {
  footerPage.scrollToBottom()
})

Then(/^I should see (\'(.+)\') that have correct href (\'(.+)\')$/, (button, href) =>{
    cy.contains(button).should('be.visible')
                               .should('have.attr', 'href', href)
})

When("I click on the Data and Privacy button", () => {
  footerPage.footerButtons.eq(0).should('be.visible')
  footerPage.clickDataPrivacyButton()
})

Then(/^I should see (\w+) Product Updates button in 'Jump to' block$/, (buttonText) => {
  dataPrivacyPage.linksButtonBlock.find('a').eq(0)
                                            .should('contain', buttonText)
                                            .should('be.visible')
})

Then(/^I should see (\w+) Frequently Asked Questions button in 'Jump to' block$/, (buttonText) => {
  dataPrivacyPage.linksButtonBlock.find('a').eq(1)
                                            .should('contain', buttonText)
                                            .should('be.visible')
})
Then(/^I should see (\w+) button in 'Jump to' block$/, (buttonText) => {
  dataPrivacyPage.linksButtonBlock.find('a').eq(2)
                                            .should('contain', buttonText)
                                            .should('be.visible')
})
Then(/^I should see (\w+) Transfer Impact Assessment button in 'Jump to' block$/, (buttonText) => {
  dataPrivacyPage.linksButtonBlock.find('a').eq(3)
                                            .should('contain', buttonText)
                                            .should('be.visible')
})

When("I click on the Report Abuse button", () => {
  footerPage.footerButtons.eq(0).should('be.visible')
  footerPage.clickReportAbuseButton()
})


When("I leave required Subject field blank in form", () => {
  reportAbusePage.subjectField.should('be.empty')
})

When("I leave required Phone Number Abusive field blank in form", () => {
  reportAbusePage.abusiveField.should('be.empty')
})

When("I leave required Phone Number Received Abuse field blank in form", () => {
  reportAbusePage.abusedField.should('be.empty')
})

When(/^I click (\w+) button$/, (submit) => {
  cy.contains(submit).should('be.visible').click()
})

Then("I should see error message for Subject field", () => {
  cy.fixture('testData.json').then((testData) => {
    reportAbusePage.checkFieldError(testData.subjectFieldNumber)
  })
})

Then("I should see error message for Phone Number (Abusive) field", () => {
  cy.fixture('testData.json').then((testData) => {
    reportAbusePage.checkFieldError(testData.abusiveFieldNumber)
  })
})

Then("I should see error message for Phone Number (Received Abuse) field", () => {
  cy.fixture('testData.json').then((testData) => {
    reportAbusePage.checkFieldError(testData.abusedFieldNumber)
  })
})

When(/^I fill Subject field with (\w+)$/, (credential) => {
  reportAbusePage.subjectField.should('be.empty')
  reportAbusePage.fillSubjectField(credential)
})

When(/^I fill Phone Number Abusive field with (\w+)$/, (credential) => {
  reportAbusePage.abusiveField.should('be.empty')
  reportAbusePage.fillAbusiveField(credential)
})

When(/^I fill Phone Number Received Abuse field with (\w+)$/, (credential) => {
  reportAbusePage.abusedField.should('be.empty')
  reportAbusePage.fillAbusedField(credential)
})

Then(/^I should see Subject field filled with (\w+)$/, (credential) => {
  reportAbusePage.subjectField.should('have.value', credential)
})

Then(/^I should see Phone Number Abusive field field filled with (\w+)$/, (credential) => {
  reportAbusePage.abusiveField.should('have.value', credential)
})

Then(/^I should see Phone Number Received Abuse field filled with (\w+)$/, (credential) => {
  reportAbusePage.abusedField.should('have.value', credential)
})

When("I click on the Website Terms and Conditions button", () => {
  footerPage.footerButtons.eq(1).should('be.visible')
  footerPage.clickWebsiteTermsButton()
})

Then(/^I should see at the page (\w+) (\w+) title named (\'(.+)\')$/, (number, st, title) => {
    termsConditionsPage.checkTitles(number, title)
})

When("I click on the Release Notes button", () => {
  footerPage.footerButtons.eq(1).should('be.visible')
  footerPage.clickReleaseNotesButton()
})

When(/^I type in search field (\'(.+)\')$/, (searchValue) => {
  releaseNotesPage.searchField.should('have.value', '')
                              .type(searchValue)
})

Then(/^I should see (\'(.+)\') typed in search field$/, (searchValue) => {
  releaseNotesPage.searchField.should('have.value', searchValue)
})

When("I click on Read More button in 'Integrate your systems using HTTP requests in TeXML bin' paragraph", () => {
  releaseNotesPage.clickReadMoreButton()
})

Then(/^I should see (\'(.+)\') title at page$/, (titleName) => {
  releaseNotesPage.title.should('have.text', titleName)
})

When(/^I check (\'(.+)\') checkbox at sidebox$/, (checkbox) => {
  cy.fixture('testData.json').then((testData) => {
    releaseNotesPage.checkCheckbox(testData.checkboxesSelect[checkbox])
  })
})

Then(/^I should see (\'(.+)\') unchecked$/, (checkbox) => {
  cy.fixture('testData.json').then((testData) => {
    releaseNotesPage.checkboxes.eq(testData.checkboxesSelect[checkbox]).should('not.be.checked')
  })
})

When(/^I click on the (\w+) button at header$/, (button) => {
  cy.fixture('testData.json').then((testData) => {
    headerPage.clickHeaderButton(testData.headerButton[button])
  })  
})

When(/^I click on the (\'(.+)\') button$/, (button) => {
  cy.fixture('testData.json').then((testData) => {
    headerPage.clickMenuItemButton(testData.headerMenuitem[button], testData.headerMenuitemHref[button])
  })
})

When("I scroll down to the Download Pricing form", () => {
  messagingPricingPage.scrollToPricingForm()
})

When("I click on First Name field", () => {
  messagingPricingPage.clickFirstNameField()
})

When("I click on Last Name field", () => {
  messagingPricingPage.clickLastNameField()
})

When("I click on Business email field", () => {
  messagingPricingPage.clickBusinessEmailNameField()
})

Then(/^I should see red error border around (\'(.+)\') field$/, (field) => {
  cy.fixture('testData.json').then((testData) => {
    messagingPricingPage.pricingForm.find('input').eq(testData.pricingField[field])
                                                  .should('have.attr', 'aria-describedby', 'ValidMsg'+field)
  })
})

When(/^I fill (\w+) field with (\'(.+)\')$/, (field, value) => {
  cy.fixture('testData.json').then((testData) => {
    messagingPricingPage.pricingForm.find('input')
                                    .eq(testData.pricingField[field])
                                    .type(value)
                                    .should('have.value', value)
  })
})

Then(/^I should see completing message (\'(.+)\')$/, (message) => {
  messagingPricingPage.checkCompletePricingFormMessage(message)
})

Then(/^I should see Email error message (\'(.+)\')$/, (message) => {
  messagingPricingPage.checkEmailErrorMessage(message)
})

When("I scroll to How It Works block", () => {
  smsApiPage.scrollToHowItWorksBlock()
})

Then(/^I should see (\'(.+)\') with correct inner text$/, (tab) => {
  cy.fixture('testData.json').then((testData) => {
    smsApiPage.checkTabButtonValue(testData.howItWorksBlock[tab].number, 
                              testData.howItWorksBlock[tab].value)
  })
})

Then(/^I should see correct (\'(.+)\') Video$/, (tab) => {
  cy.fixture('testData.json').then((testData) => {
    smsApiPage.checkTabButtonVideo(testData.howItWorksBlock[tab].number,
                              testData.howItWorksBlock[tab].vidSource)
  })
})

Then(/^I click (\'(.+)\') tab button$/, (tab) => {
  cy.fixture('testData.json').then((testData) => {
    smsApiPage.clickTabButton(testData.howItWorksBlock[tab].number)
  })
})
