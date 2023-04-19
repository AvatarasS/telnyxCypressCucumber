class ReportAbusePage {
    
    get subjectField(){
        return cy.get('[class*="sc-5dc1f208-0 QaBlS"]').eq(0).find('input')
    }

    get abusiveField(){
        return cy.get('[class*="sc-5dc1f208-0 QaBlS"]').eq(1).find('input')
    }

    get abusedField(){
        return cy.get('[class*="sc-5dc1f208-0 QaBlS"]').eq(2).find('input')
    }

    get errorMessage(){
        return cy.get('[class="sc-25ef9dc0-1 fMtvwP"]')
    }

    get checkboxes(){
        return cy.get('[class="sc-df3e57b4-4 gqBPrs"]').find('div')
    }

    get recaptchaMessage(){
        return cy.get('.sc-570b157-1.eUoKGn')
    }
    
    checkFieldError(number){
        cy.fixture('testData.json').then((testData) => {
            this.errorMessage.eq(number).should('have.text', testData.errorMessage.reportAbuseRequiredField)
        })
    }

    fillSubjectField(credential){
        this.subjectField.type(credential)
    }

    fillAbusiveField(credential){
        this.abusiveField.type(credential)
    }

    fillAbusedField(credential){
        this.abusedField.type(credential)
    }

    checkCheckbox(number){
        this.checkboxes.eq(number).should('not.be.checked')
                                  .click()
    }

    checkRecaptchaMessage(){
        this.recaptchaMessage.should('be.visible')
                             .should('contain.text', 'reCAPTCHA validation required')
    }
}  
  export default ReportAbusePage