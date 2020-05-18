import {BaseHands, BaseEyes } from '../BaseRobot';

export class WikiLinksEyes extends BaseEyes{
    seeWelcomePage(){
        this.seesTextVisible("Welcome to Wikipedia")    
    }  
}

export class WikiLinksHands extends BaseHands{        
    clickOnMainPage(){
        this.clickOnContains("Main page")
    }
}