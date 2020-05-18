import {BaseHands, BaseEyes } from '../BaseRobot';

export class EyesLoginLinks extends BaseEyes{

    seesUserPage(){
        this.seesTextWithTitle('[title="View the user page (page does not exist) [alt-shift-c]"]')    
    }  

    seesAlertsWidow(){
        this.seesTextVisible('Alerts')    
    }  

    seesNoticesWidow(){
        this.seesTextVisible('Notices')    
    }  

    seesTalksTab(){
        this.seesUrlIncluded("/User_talk:")
    }

    seesSandbox(){
        this.seesDomVisibleWithCustomMatcher("id", "wpTextbox1")
    }

    seesPreferences(){
        this.seesDomVisibleWithCustomMatcher("class", "oo-ui-labelElement-label")
    }

    seesBeta(){
        this.seesDomVisibleWithCustomMatcher("class", "oo-ui-labelElement-label")
    }

    seesWatchlist(){
        this.seesTextWithTitle('[title="This is a special page which you cannot edit"]')
    }

    seesContributions(){
        this.seesTextWithTitle('[title="This is a special page which you cannot edit"]')
    }

}

export class HandsLoginLinks extends BaseHands{ 

    clickOnUserName(){
        this.clickOnDomElement('[title="Your user page (page does not exist) [alt-shift-.]"]')
    }

    clickOnAlert(){
        this.clickOnDomElement('[title="Your alerts"]')
    }

    clickOnNotices(){
        this.clickOnDomElement('[title="Your notices"]')
    }

    clickOnTalks(){
        this.clickOnDomElement('[title="Your talk page (page does not exist) [alt-shift-n]"]')
    }

    clickOnSandbox(){
        this.clickOnDomElement('[title="Your sandbox (page does not exist)"]')
    }

    clickOnPreferences(){
        this.clickOnDomElement('[title="Your preferences"]')
    }

    clickOnBeta(){
        this.clickOnDomElement('[title="Your preferences"]')
    }

    clickOnWatchlist(){
        this.clickOnDomElement('[title="The list of pages you are monitoring for changes [alt-shift-L]"]')
    }

    clickOnContributions(){
        this.clickOnDomElement('[title="A list of your contributions [alt-shift-y]"]')
    }

}