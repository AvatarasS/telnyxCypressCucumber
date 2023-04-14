class TermsConditionsPage {
    
    get titles(){
        return cy.get('[class*="sc-d8f5e61f-2"]')
    }

    checkTitles(number, title){
        this.titles.eq(parseInt(number) - 1).should('have.text', title)
    }
}  
  export default TermsConditionsPage