import { RobotEyes, RobotHands, Dependencies } from '../../robots/Wikipedia/Robot';
const {
    Given,
    When,
    Then
  } = require("cypress-cucumber-preprocessor/steps");

context('Search Test', () => {
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies()

    Given('I am in the wikipedia search page',() => {
 
        dependencies.visitWikipedia()    
    })
     
    When('I enter text and search',() => {

        robotHands.searchtesting()
        
    })
     
    Then('I should be able to navigate to the details page of entered text',() => {
     
        robotEyes.seesMainPage()
     
    })
})