class HeaderPage{

    get menuitemButtons(){
        return cy.get('div[role="menuitem"]')
    }

    get headerButtons(){
        return cy.get('[class*="c-edMhbw"]')
    }

    clickHeaderButton(button){
        this.headerButtons.eq(button).click()
        this.menuitemButtons.should('be.visible')
    }

    clickMenuItemButton(button, href){
        this.menuitemButtons.eq(button).click()
        cy.url().should('eq', href)
    }
}
export default HeaderPage