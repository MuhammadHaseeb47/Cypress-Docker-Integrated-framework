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

    getProfilePictureLogo(){
      return cy.get("button._profileButton_sh5m4_106");
    }

    getLogoutButton(){
      return cy.xpath('//button[text()="Log out"]');
    }

    getMainPageVerification(){
      return cy.get("#location_text")
    }

    getStartAnalyzingText(){
      return cy.xpath('//span[text()="Start Analyzing"]');
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

    clickProfilePictureLogo(){
      this.getProfilePictureLogo().click();
    }

    clickLogoutButton(){
      this.getLogoutButton().click();
    }

  
  }
  export default LoginMash;
  