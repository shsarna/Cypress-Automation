class LoginPage{

    enterUserName(username){
        cy.get('form#loginForm input[name="email"]').type(username);
        return this;
    }

    enterPassword(password){
        cy.get('form#loginForm input[name="password"]').type(password);
        return this;
    }

    clickLoginButton(){
        cy.get('form#loginForm button[type="submit"]').click();
        cy.wait(2000);
        return this;
    }

    getErrorMessage(){
        return cy.get('div.alert--error');
    }

    clickResetPasswordLink(){
        cy.get('div.login__link').click();
        return this;
    }
} 
export default LoginPage