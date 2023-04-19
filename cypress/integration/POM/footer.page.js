class FooterPage {

    get footer(){
        return cy.get('footer[class*="c-gHxecU"]')
    }

    get footerButtons(){
        return cy.get('[class="c-iYAggY"]')
    }

    scrollToBottom(){
        cy.scrollTo('bottom')
        this.footer.should('be.visible')
    }

    clickDataPrivacyButton(){
        this.footerButtons.eq(0).find('a').eq(0).click()
        cy.fixture('testData.json').then((testData) => {
            cy.url().should('eq', testData.pageUrl.dataPrivacy)
        })
    }

    clickWebsiteTermsButton(){
        this.footerButtons.eq(1).find('a').eq(0).click()
        cy.fixture('testData.json').then((testData) => {
            cy.url().should('eq', testData.pageUrl.websiteTerms)
        })
    }

    clickReleaseNotesButton(){
        this.footerButtons.eq(1).find('a').eq(1).click()
        cy.fixture('testData.json').then((testData) => {
            cy.url().should('eq', testData.pageUrl.releaseNotes)
        })
    }
    
    clickCareersButton(){
        this.footerButtons.eq(1).find('a').eq(2).click()
        cy.fixture('testData.json').then((testData) => {
            cy.url().should('eq', testData.pageUrl.careers)
        })
    }


}  
  export default FooterPage