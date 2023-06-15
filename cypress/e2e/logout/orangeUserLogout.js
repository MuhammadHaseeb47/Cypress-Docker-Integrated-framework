import LoginOrange from '../../Pages/orangeLoginPage'

const loginPageOrange = new LoginOrange;

describe("Logout from orange HRM app" ,function(){
    beforeEach(() => {
        cy.visit(Cypress.env("orange-url"));
        loginPageOrange.getLoginPageVerification().should('be.visible');
        loginPageOrange.typeUserName(Cypress.env("orangeUsername"));
        loginPageOrange.typePassword(Cypress.env("orangePassword"));
        loginPageOrange.clickLoginButton();
        loginPageOrange.getHomePageVerification().contains("Dashboard");
    });

    it("should logout from the app",function(){
        loginPageOrange.clickMyInfoButton();
        loginPageOrange.getPersonalDetailsText().should('be.visible');
        loginPageOrange.clickProfileNameButton();
        loginPageOrange.clickLogoutButton();
        loginPageOrange.getLoginPageVerification().should('be.visible');
    })
});
