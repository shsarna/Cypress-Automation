import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../PageObjects/HomePage';
import LoginPage from '../../PageObjects/LoginPage';
import ResetPasswordOverlay from '../../PageObjects/ResetPasswordOverlay';
import RegistrationPage from '../../PageObjects/RegistrationPage';

const homePage = new HomePage();
const loginPage = new LoginPage();
const registrationPage = new RegistrationPage();
const resetPasswordOverlay = new ResetPasswordOverlay();

Given('User is at douglas login registration page', () => {
    homePage.navigate();
    homePage.clickUserAccountButton();
})

When('User enters username as {string} and password as {string}', (username, password) => {
        loginPage.enterUserName(username);
        loginPage.enterPassword(password);
})

And('User clicks on login button', () => {
    loginPage.clickLoginButton();
})

// Then('User is able to successfully login to the Website', () => {
//     homePage.getLoggedInUserMessage().should('eq','testUser, wonach suchst du?');
// })

Then('User gets invalid credentials error message', () => {
    loginPage.getErrorMessage().should('have.text','Falsche Zugangsdaten');
})

When('User clicks on reset password link', () => {
    loginPage.clickResetPasswordLink();
})

And('User enters username as {string} and clicks on submit button', (username) => {
    resetPasswordOverlay.enterUserName(username);
    resetPasswordOverlay.clickSubmitButton();
})

Then('User gets email sent success message', () => {
    resetPasswordOverlay.getSuccessMessage().should('have.text','E-Mail verschickt');
})

When('User enters first name as {string} and lastname as {string}', (fname, lname) => {
    registrationPage.enterfirstName(fname);
    registrationPage.enterLastName(lname);
})

When('User enters Date of Birth in format DD.MM.YYYY as {string}', (dateOfBirth) => {
    registrationPage.enterDateOfBirth(dateOfBirth);
})

When('User selects the gender as {string}', (gender) => {
    registrationPage.selectGender(gender);
})

When('User enters the email adress generated randomly with current Date and Time', () => {
    const d = new Date();
    const dateFormatted = d.toLocaleString().replaceAll('/', '_').replaceAll(' ', '_').replaceAll(':', '_').replaceAll(',', '');
    const email = "testUser" + dateFormatted + "@douglasTest.com";
    registrationPage.enterEmail(email);
})

When('User enters the email adress as {string}', (email) => {
    registrationPage.enterEmail(email);
})

When('User enters the password as {string}', (password) => {
    registrationPage.enterPassword(password);
})

When('User clicks the submit registration button', () => {
    registrationPage.clickSubmitButton();
})

Then('User should be logged in with first name as {string}', (fname) => {
    homePage.getLoggedInUserMessage().should('eq', fname + ', wonach suchst du?');
})

Then('User should get an email exists error message', () => {
    registrationPage.getemailExistErrorMessage().should('have.text', 'Die E-Mail-Adresse ist bereits registriert.');
})

Then('User should get age limit error message', () => {
    registrationPage.getAgeLimitErrorMessage().should('have.text', 'Du musst mindestens 16 Jahre alt sein.');
})

Then('User should get invalid email format error message', () => {
    registrationPage.getInvalidEmailFormatErrorMessage().should('have.text', 'Ungültige E-Mail-Adresse');
})

