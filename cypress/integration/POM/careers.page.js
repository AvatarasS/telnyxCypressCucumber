class CareersPage{

    get pageTitle(){
        return cy.get('[class="c-PJLV c-fGbiyG c-PJLV-kmbBBS-dark-true"]')
    }

    get employeeSpotlightBlock(){
        return cy.get('[id="BdcK0qhC6AnuEiac7TgVw"]')
    }

    get employeeSpotlightButton(){
        return cy.get('[id="1mbOUGKToKgtCRvdOxTrnV"]')
    }

    checkEmployeeSpotlightButton(){
        this.employeeSpotlightButton.should('be.visible').find('span').eq(0).should('have.text', 'See employee spotlights')
    }

}
export default CareersPage