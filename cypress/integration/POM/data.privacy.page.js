class DataPrivacyPage {

    get pageTitle() {
        return cy.get('[class="sc-31a8cefb-6 eCGKsC"]')
    }

    get linksButtonBlock() {
        return cy.get('[class="sc-31a8cefb-7 kjmzsk"] ul')
    }

    get dropdownListBlock() {
        return cy.get('[class="sc-fec4993d-0 iNgSjM"]')
    }

    get doesTelnyxButton() {
        return cy.get('div:nth-child(2) > dt > button')
    }

    get innerTextDoesTelnyxButton() {
        return cy.get('[id="faq2_description"] p').eq(0)
    }

    clickDoesTelnyxProcessButton() {
        this.doesTelnyxButton.click()
    }

    checkInnerTextDoesTelnyxButton() {
        cy.fixture('testData.json').then((testData) => {
            this.innerTextDoesTelnyxButton.should('be.visible').and('have.text', testData.dataPrivacyPage.innerTextDoesTelnyxButton)
        })
    }

}
export default DataPrivacyPage