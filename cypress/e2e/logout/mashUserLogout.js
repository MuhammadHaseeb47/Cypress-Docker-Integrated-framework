import LoginMash from '../../Pages/mashLoginPage'

const loginPage = new LoginMash;

describe("User Logout" ,function(){
    
    beforeEach(() => {
        cy.visit(Cypress.env("app-url"));
        loginPage.getLoginPageVerification().contains("Smart investing begins here");
        loginPage.typeUserName(Cypress.env("username"));
        loginPage.typePassword(Cypress.env("password"));
        loginPage.clickLoginButton();
        loginPage.getHomePageVerification().contains("Unlock a free trial");
    });

    it("should logout from the app",function(){
        loginPage.clickProfilePictureLogo();
        loginPage.clickLogoutButton();
        loginPage.getMainPageVerification().should("be.visible");
        loginPage.getStartAnalyzingText().should('have.text',"Start Analyzing")
    })
});

