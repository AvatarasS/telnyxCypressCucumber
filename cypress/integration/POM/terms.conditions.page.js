class TermsConditionsPage {
    
    get titles(){
        return cy.get('[class="c-PJLV c-fKwEGa c-PJLV-Ysdyi-blog-true"]')
    }

    checkTitles(number, title){
        this.titles.eq(parseInt(number) - 1).should('have.text', title)
    }
}  
  export default TermsConditionsPage