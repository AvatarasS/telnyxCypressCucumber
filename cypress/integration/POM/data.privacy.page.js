class DataPrivacyPage {

    get pageTitle() {
        return cy.get('[class="c-PJLV c-fGbiyG c-PJLV-cHtIMp-dark-false"]')
    }

    get linksButtonBlock() {
        return cy.get('[class="c-eKGxDa c-eKGxDa-gMrDRs-orientation-vertical"] a span[class]')
    }

    get dropdownListBlock() {
        return cy.get('[id="gdpr-frequently-asked-questions"]')
    }

    get doesTelnyxButton() {
        return cy.get('[class="c-cfzSIN"]').eq(1)
    }

    get innerTextDoesTelnyxButton() {
        return this.doesTelnyxButton.find('p').eq(0)
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