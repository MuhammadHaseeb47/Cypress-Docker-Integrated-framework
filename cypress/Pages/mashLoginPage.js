/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
class LoginMash {

    getLoginPageVerification(){
      return cy.get('.title h1');
    }

    getUserName(){
      return cy.get('#login-email');
    }

    getLoginButton(){
      return cy.get('#loginButton');
    }
    
    getEnterPassword(){
      return cy.get('#login-password');
    }

    getHomePageVerification(){
      return cy.xpath('//button[text()="Unlock a free trial"]');
    }

    typeUserName(userName){
      this.getUserName().type(userName,{force:true});
    }

    typePassword(password){
      this.getEnterPassword().type(password,{force:true});
    }

    clickLoginButton(){
      this.getLoginButton().click();
    }
  
  }
  export default LoginMash;
  