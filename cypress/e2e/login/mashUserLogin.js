import LoginMash from '../../Pages/mashLoginPage'

const loginPage = new LoginMash;

describe("User Login" ,function(){

    it("Should Login the User",function(){ 
        cy.visit(Cypress.env("app-url"));
        loginPage.getLoginPageVerification().contains("Smart investing begins here");
        loginPage.typeUserName(Cypress.env("username"));
        loginPage.typePassword(Cypress.env("password"));
        loginPage.clickLoginButton();
        loginPage.getHomePageVerification().contains("Unlock a free trial");
        })
})
