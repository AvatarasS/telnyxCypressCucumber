const { Then } = require("@badeball/cypress-cucumber-preprocessor");


Then(/^I should see (\'(.+)\') that has the correct href (\'(.+)\')$/, (button, href) =>{
    cy.contains(button).should('be.visible')
                       .should('have.attr', 'href', href)
})