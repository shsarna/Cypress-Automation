import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('User is at douglas login registration page', () => {
    cy.visit("https://www.douglas.de/de");
        cy.get('div.uc-overlay__buttons button.button__primary').click();
        cy.get('button[class*="account"]').click();
})

When('User enters username as {string} and password as {string}', (username, password) => {
    cy.get('form#loginForm input[name="email"]').type(username);
        cy.get('form#loginForm input[name="password"]').type(password);
})

And('User clicks on login button', () => {
    cy.get('form#loginForm button[type="submit"]').click();
        cy.wait(2000);
})

Then('User is able to successfully login to the Website', () => {
    cy.get('input.input__input.search-box__input-text').invoke('attr','placeholder').should('eq','testUser, wonach suchst du?');
})

Then('User gets invalid credentials error message', () => {
    cy.get('div.alert--error').should('have.text','Falsche Zugangsdaten');
})

When('User clicks on reset password link', () => {
    cy.get('div.login__link').click();
})

And('User enters username as {string} and clicks on submit button', () => {
    cy.get('form#forgotPasswordForm input[name="forgotPasswordEmail"]').type('testUser@douglasTest.com');
        cy.get('button.forgot-password__button[type="submit"]').click();
})

Then('User gets email sent success message', () => {
    cy.get('h2.headline-thin').should('have.text','E-Mail verschickt');
})

When('User enters first name as {string} and lastname as {string}', (fname, lname) => {
    cy.get('input[name="firstName"]').type(fname);
    cy.get('input[name="lastName"]').type(lname);
})

When('User enters Date of Birth in format DD.MM.YYYY as {string}', (dateOfBirth) => {
    cy.get('input[name="dateOfBirth"]').type(dateOfBirth);
})

When('User selects the gender as {string}', (gender) => {
    gender =  gender.toLowerCase();
    // if(gender.localeCompare('female')){}
    if (gender.localeCompare('female') || gender.localeCompare('frau')) {
        cy.get('div.form-radio-button:nth-child(1)').click();
    } else if (gender.localeCompare('male') || gender.localeCompare('mann')) {
        cy.get('div.form-radio-button:nth-child(2)').click();
    } if (gender.localeCompare('divers') || gender.localeCompare('other')) {
        cy.get('div.form-radio-button:nth-child(3)').click();
    } else {
        throw new Error('!!!Fail: Unknown Gender!!!')
    };
})

When('User enters the email adress generated randomly with current Date and Time', () => {
    const d = new Date();
    const dateFormatted = d.toLocaleString().replaceAll('/', '_').replaceAll(' ', '_').replaceAll(':', '_').replaceAll(',', '');
    cy.log(dateFormatted);
    const email = "testUser" + dateFormatted + "@douglasTest.com";
    cy.get('div.registration__email input[name="email"]').type(email);
})

When('User enters the email adress as {string}', (email) => {
    cy.get('div.registration__email input[name="email"]').type(email);
})

When('User enters the password as {string}', (email) => {
    cy.get('div.registration__password input[name="password"]').type('Welcome@1234');
})

When('User clicks the submit registration button', () => {
    cy.get('button.button.registration__button').click();
    cy.wait(5000);
})

Then('User should be created and logged in with first name as {string}', (fname) => {
    cy.get('input.input__input.search-box__input-text').invoke('attr', 'placeholder').should('eq', fname + ', wonach suchst du?');
})

Then('User should get an email exists error message', () => {
    cy.get('div.login-page--register div.alert--error span').should('have.text', 'Die E-Mail-Adresse ist bereits registriert.');
})

Then('User should get age limit error message', () => {
    cy.get('div.registration__form-column div.input__error').should('have.text', 'Du musst mindestens 16 Jahre alt sein.');
})

Then('User should get invalid email format error message', () => {
    cy.get('div.registration__email div.input__error').should('have.text', 'Ungültige E-Mail-Adresse');
})