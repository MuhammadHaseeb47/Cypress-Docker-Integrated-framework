import LoginOrange from '../../Pages/orangeLoginPage'

const loginPageOrange = new LoginOrange;

describe("User Login for orange HRM application" ,function(){

    it("Should Login the User in orange HRM app",function(){
        //cypress will visit the url given in environment file 
        cy.visit(Cypress.env("orange-url"));
        //cypress will wait for the page till it loads
        loginPageOrange.getLoginPageVerification().should('be.visible');
        //cypress will add username and password and will press the login button
        loginPageOrange.typeUserName(Cypress.env("orangeUsername"));
        loginPageOrange.typePassword(Cypress.env("orangePassword"));
        loginPageOrange.clickLoginButton();
        //cypress will verify the page is opened successfully
        loginPageOrange.getHomePageVerification().contains("Dashboard");
        });
});