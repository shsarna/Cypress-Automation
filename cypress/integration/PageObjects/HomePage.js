
class HomePage{

    navigate(){
        cy.visit("https://www.douglas.de/de");
        cy.get('div.uc-overlay__buttons button.button__primary').click();
        return this;
    }
    
    clickUserAccountButton(){
        
        cy.get('button[class*="account"]').click();
        return this;
    }

    getLoggedInUserMessage(){
        return cy.get('input.input__input.search-box__input-text').invoke('attr','placeholder');
    }

}
export default HomePage