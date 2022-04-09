class RegistrationPage{

    enterfirstName(firstName){
        cy.get('input[name="firstName"]').type(firstName);
        return this;
    } 

    enterLastName(lastName){
        cy.get('input[name="lastName"]').type(lastName);
        return this;
    } 
     
    enterDateOfBirth(dateOfBirth){
        cy.get('input[name="dateOfBirth"]').type(dateOfBirth);
    }

    selectGender(gender){
        gender =  gender.toLowerCase();
    if (gender.localeCompare('female') || gender.localeCompare('frau')) {
        cy.get('div.form-radio-button:nth-child(1)').click();
    } else if (gender.localeCompare('male') || gender.localeCompare('mann')) {
        cy.get('div.form-radio-button:nth-child(2)').click();
    } if (gender.localeCompare('divers') || gender.localeCompare('other')) {
        cy.get('div.form-radio-button:nth-child(3)').click();
    } else {
        throw new Error('!!!Fail: Unknown Gender!!!')
    };
    }

    enterEmail(email){
        cy.get('div.registration__email input[name="email"]').type(email);
    }

    enterPassword(password){
        cy.get('div.registration__password input[name="password"]').type(password);
    }

    clickSubmitButton(){
        cy.get('button.button.registration__button').click();
    cy.wait(5000);
    }

    getemailExistErrorMessage(){
        return cy.get('div.login-page--register div.alert--error span');
    }

    getAgeLimitErrorMessage(){
        return cy.get('div.registration__form-column div.input__error');
    }

    getInvalidEmailFormatErrorMessage(){
        return cy.get('div.registration__email div.input__error');
    }
}
export default RegistrationPage