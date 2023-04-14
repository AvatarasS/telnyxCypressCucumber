class ReleaseNotesPage {
    
    get searchField(){
        return cy.get('#search')
    }

    get readMoreButton(){
        return cy.get('[class="sc-d997c11f-0 kdZwDL"]').eq(1).find('a')
    }

    get title(){
        return cy.get('[class="sc-75d679ff-6 iLxAfH"]')
    }

    get checkboxes(){
        return cy.get('aside div[class="sc-ce6dc8c9-8 kuXvoI"] div label')
    }

    clickReadMoreButton(){
        this.readMoreButton.click()
        cy.url().should('eq', 'https://telnyx.com/release-notes/http-requests-texml')
    }

    checkCheckbox(number){
        this.checkboxes.eq(number)
                       .click()
                       .should('have.attr', 'aria-checked', 'true')
    }

}  
export default ReleaseNotesPage