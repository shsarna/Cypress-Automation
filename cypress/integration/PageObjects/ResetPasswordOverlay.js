class ResetPasswordOverlay {
    enterUserName() {
        cy.get('form#forgotPasswordForm input[name="forgotPasswordEmail"]').type('testUser@douglasTest.com');
        return this;
    }

    clickSubmitButton() {
        cy.get('button.forgot-password__button[type="submit"]').click();
        return this;
    }

    getSuccessMessage(){
        return cy.get('h2.headline-thin');
    }
}
export default ResetPasswordOverlay