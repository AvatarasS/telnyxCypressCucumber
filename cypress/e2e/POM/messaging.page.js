class MessagingPricingPage{

    get pricingForm(){
        return cy.get('[id="5nvebjis4XRb3wgL103j82"]')
    }

    get pricingFormSubmitButton(){
        return cy.get('[class="mktoButtonWrap mktoSimple"]')
    }

    get completePricingFormMessage(){
        return cy.get('[class*="c-PJLV c-fGbiyG c-PJLV-kmbBBS-dark-true"] span')
    }

    get emailErrorMessage(){
        return cy.get('#ValidMsgEmail')
    }

    scrollToPricingForm(){
        this.pricingForm.scrollIntoView().should('be.visible')
    }

    clickFirstNameField(){
        this.pricingForm.find('input').eq(0).click({force: true})
    }

    clickLastNameField(){
        this.pricingForm.find('input').eq(1).click({force: true})
    }

    clickBusinessEmailNameField(){
        this.pricingForm.find('input').eq(2).click({force: true})
    }

    clickPricingFormSubmitButton(){
        this.pricingFormSubmitButton.click()
    }

    checkCompletePricingFormMessage(message){
        this.completePricingFormMessage.should('be.visible').should('have.text', message)
    }

    checkEmailErrorMessage(message){
        this.emailErrorMessage.should('be.visible').should('have.text', message)
    }
}
export default MessagingPricingPage
