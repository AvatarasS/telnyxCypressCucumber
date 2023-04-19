class ReleaseNotesPage {
    
    get searchField(){
        return cy.get('#search')
    }

    get readMoreButton(){
        return cy.get('[class="sc-d997c11f-0 kdZwDL"]').eq(1).find('a')
    }

    get releaseNotesTitle(){
        return cy.get('[class="Text-sc-5o8owa-0 sc-ce6dc8c9-2 gkWopw dbaFpf"]')
    }

    get title(){
        return cy.get('[class="sc-75d679ff-6 iLxAfH"]')
    }

    get checkboxesBlock(){
        return cy.get('[class="sc-ce6dc8c9-8 kuXvoI"]')
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