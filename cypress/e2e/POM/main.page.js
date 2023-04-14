class MainPage {
    
    get logoVideo(){
        return cy.get('[class="c-gFsTwq"] video')
    }

    get companyLogos(){
        return cy.get('[class="c-kMvXjf c-gmDxml"]')
    }

    visitTelnyx() {
        cy.fixture('testData.json').then((testData) => {
            cy.visit(testData.telnyxUrl)
            cy.url().should('contain', 'telnyx')
        })

    }

    closeCookie(){
        cy.get(".c-knFmwm.c-jVWmKv").click()
    }
}  
  export default MainPage