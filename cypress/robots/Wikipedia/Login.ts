import {BaseHands, BaseEyes } from '../BaseRobot';

export class LoginEyes extends BaseEyes{
    seesSuccessfullLogin(){
        this.seesTextVisible("Log out")    
    }  

    seesErrorMessages1(){
        this.seesTextVisible("Incorrect username or password entered. Please try again.")
    }

    seesErrorMessages2(){
        this.seesTextVisible("There seems to be a problem with your login session; this action has been canceled as a precaution against session hijacking. Please resubmit the form. You may receive this message if you are blocking cookies.")
    }
    
    seesLoginButton(){
        this.seesDomVisibleWithCustomMatcher("name", "wploginattempt")    
    }
}

export class LoginHands extends BaseHands{        
    clickOnLogin(){
        this.clickOnContains("Log in")
    }

    clickOnLoginButton(){
        this.clickOnDomElement("[name='wploginattempt']")
    }

    clickOnLogoutButton(){
        this.clickOnDomElement("[title='Log out']")
    }

    enterValidCredentials(){
        this.typeTextonDom("name", "wpName", "durgam.arc")
        this.typeTextonDom("name", "wpPassword", "archana#123")
    }

    enterInValidCredentials(){
        this.typeTextonDom("name", "wpName", "durgam.arc1")
        this.typeTextonDom("name", "wpPassword", "archana#1231")
    }

    enterInValidUsernameAndValidPassword(){
        this.typeTextonDom("name", "wpName", "durgam.arc1")
        this.typeTextonDom("name", "wpPassword", "archana#123")
    }

    enterValidUsernameAndInValidPassword(){
        this.typeTextonDom("name", "wpName", "durgam.arc")
        this.typeTextonDom("name", "wpPassword", "archana#1231")
    }

    enterValidUsernameAndBlankPassword(){
        this.typeTextonDom("name", "wpName", "durgam.arc")
    }

    enterBlankUsernameAndValidPassword(){
        this.typeTextonDom("name", "wpPassword", "archana#1231")
    }

    clearDataFromUsername(){
        this.clearData("[name='wpName']")
    }

}