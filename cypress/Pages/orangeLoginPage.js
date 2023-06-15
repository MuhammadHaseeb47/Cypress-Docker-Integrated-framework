class LoginOrange {

    getLoginPageVerification(){
        return cy.get('[src="/web/images/ohrm_branding.png?v=1683010990518"]');
    }

    getUserName(){
        return cy.get('[placeholder="Username"]');
    }

    getLoginButton(){
        return cy.xpath('//button[text()=" Login "]');
    }
    
    getEnterPassword(){
        return cy.get('[placeholder="Password"]');
    }

    getHomePageVerification(){
        return cy.xpath('//h6[text()="Dashboard"]');
    }

    getProfileName(){
        return cy.get('.oxd-userdropdown-name');
    }

    getLogoutButton(){
        return cy.xpath('//a[text()="Logout"]');
    }

    getMyInfo(){
        return cy.xpath('//span[text()="My Info"]');
    }

    getPersonalDetailsText(){
        return cy.xpath('//h6[text()="Personal Details"]')
    }

    clickMyInfoButton(){
        this.getMyInfo().click();
    }

    clickProfileNameButton(){
        this.getProfileName().click();
    }

    clickLogoutButton(){
        this.getLogoutButton().click();
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
export default LoginOrange;