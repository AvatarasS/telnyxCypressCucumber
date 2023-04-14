class SmsApiPage {

    get howItWorksBlock(){
        return cy.get('#xHs0EFg4U9QjnAIOUXAkC')
    }

    get tabButtons(){
        return cy.get('[class="c-kMvXjf c-kdQYCp"] button')
    }

    get tabVids(){
        return cy.get('[class="c-kMvXjf c-kdQYCp"] div[role="tabpanel"]')
    }

    scrollToHowItWorksBlock(){
        this.howItWorksBlock.scrollIntoView()
                            .should('be.visible')
    }

    clickTabButton(number){
        this.tabButtons.eq(number).click()
    }

    checkTabButtonValue(number, value){
        this.tabButtons.eq(number).should('be.visible')
                                  .should('have.attr', 'aria-selected', 'true')
                                  .find('p')
                                  .should('have.text', value)
    }

    checkTabButtonVideo(number, vidSource){
        this.tabVids.eq(number).should('be.visible')
                               .should('have.attr', 'data-state', 'active')
                               .find('source')
                               .should('have.attr', 'src', vidSource)
    }
}
export default SmsApiPage