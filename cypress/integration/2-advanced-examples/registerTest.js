describe('Registration Functionality Test',function(){
    before(() => {

        cy.visit("https://www.douglas.de/de");
        cy.get('div.uc-overlay__buttons button.button__primary').click();
        cy.get('button[class*="account"]').click();
      
      })
      
      it('As an existing user, I should not be able to register with an existing account',function(){
        cy.get('input[name="firstName"]').type('testUser');
        cy.get('input[name="lastName"]').type('testUser');
        cy.get('input[name="dateOfBirth"]').type('01.01.1991');
        cy.get('div.form-radio-button:nth-child(1)').click();
        const email = "testUser@douglasTest.com";
        cy.get('div.registration__email input[name="email"]').type(email);
        cy.get('div.registration__password input[name="password"]').type('Welcome@1234');
        cy.get('button.button.registration__button').click();
        cy.wait(500);
        cy.get('div.login-page--register div.alert--error span').should('have.text','Die E-Mail-Adresse ist bereits registriert.');
        
    })

    it('As a new user I would like to register with all correct data',function(){
        const fname = "testUser";
        cy.get('input[name="firstName"]').type(fname);
        cy.get('input[name="lastName"]').type(fname);
        cy.get('input[name="dateOfBirth"]').type('01.01.1991');
        cy.get('div.form-radio-button:nth-child(1)').click();
      const d = new Date();
      const dateFormatted = d.toLocaleString().replaceAll('/','_').replaceAll(' ','_').replaceAll(':','_').replaceAll(',','');
      cy.log(dateFormatted);
      
        const email = "testUser"+dateFormatted+"@douglasTest.com";
        cy.get('div.registration__email input[name="email"]').type(email);
        cy.get('div.registration__password input[name="password"]').type('Welcome@1234');
        cy.get('button.button.registration__button').click();
        cy.wait(5000);
       cy.get('input.input__input.search-box__input-text').invoke('attr','placeholder').should('eq',fname+', wonach suchst du?');
        
    })

})