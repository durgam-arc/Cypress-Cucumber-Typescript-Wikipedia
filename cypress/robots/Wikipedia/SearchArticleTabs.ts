import {BaseHands, BaseEyes } from '../BaseRobot';

export class SearchAriticleTabsEyes extends BaseEyes{

    seesEditPage(){
        this.seesDomVisibleWithCustomMatcher("name", "wpTextbox1")    
    }  

    seesViewHistoryPage(){
        this.seesTextVisible("Filter revisions")    
    }  

}

export class SearchAriticleTabsHands extends BaseHands{        

    clickOnEditTab(){
        this.clickOnDomElement('[title="Edit this page [alt-shift-e]"]')
        if(cy.contains("Start editing")){
            this.clickOnContains("Start editing")
        }
    }

    clickOnViewHistoryTab(){
        this.clickOnDomElement('[title="Past revisions of this page [alt-shift-h]"]')
    }

    clickOnReadTab(){
        this.clickOnContains('Read')
    }
}