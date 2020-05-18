import {BaseHands, BaseEyes } from '../BaseRobot';

export class SearchArticleTabsEyes extends BaseEyes{

    seesTalkPage(){
        this.seesUrlIncluded("/Talk:")
    }

    seesEditPage(){
        this.seesDomVisibleWithCustomMatcher("name", "wpTextbox1")    
    }  

    seesViewHistoryPage(){
        this.seesTextVisible("Filter revisions")    
    }  

}

export class SearchArticleTabsHands extends BaseHands{       
    
    clickOnTalkTab(){
        this.clickOnDomElement('[title="Discuss improvements to the content page [alt-shift-t]"]')
    }

    clickOnEditTab(){
        this.clickOnDomElement('[title="Edit this page [alt-shift-e]"]')
        if(cy.contains("Start editing")){
            this.clickOnContains("Start editing")
        }
    }
    
    clickOnNewSectionTab(){
        this.clickOnDomElement('[title="Start a new section [alt-shift-+]"]')
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