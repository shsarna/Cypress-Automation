describe('Login Functionality Tests',function()
{
    before(() => {

        cy.visit("https://www.douglas.de/de");
        cy.get('div.uc-overlay__buttons button.button__primary').click();
        cy.get('button[class*="account"]').click();
      
      })

    it("As an user with correct credentials I would like to be able to login to the web shop", function(){
        
        cy.get('form#loginForm input[name="email"]').type('testUser@douglasTest.com');
        cy.get('form#loginForm input[name="password"]').type('Welcome@1234');
        cy.get('form#loginForm button[type="submit"]').click();
        cy.wait(2000);
        cy.get('input.input__input.search-box__input-text').invoke('attr','placeholder').should('eq','testUser, wonach suchst du?');
    })

    it("As a user I would like to receive an error message, if I enter wrong credentials.", function(){
        cy.get('form#loginForm input[name="email"]').type('testUser@douglasTest.com');
        cy.get('form#loginForm input[name="password"]').type('password');
        cy.get('form#loginForm button[type="submit"]').click();
        cy.get('div.alert--error').should('have.text','Falsche Zugangsdaten');
    })

    it("As a user, I would like to be able to reset my password if I forget my credentials.", function(){
        cy.get('div.login__link').click();
        cy.get('div.modal-overlay__display div.modal-header__title').should('have.text','Du hast dein Passwort vergessen?');
        cy.get('form#forgotPasswordForm input[name="forgotPasswordEmail"]').type('testUser@douglasTest.com');
        cy.get('button.forgot-password__button[type="submit"]').click();
        cy.get('h2.headline-thin').should('have.text','E-Mail verschickt');
    })
})