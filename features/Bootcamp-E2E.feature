Feature: Bootcamp E2E

Background: 
Given I am on the home page
When Modal shows up
Then I click on close button 

  Scenario: Search bar

    When I click on search bar
    Then I type windows in search bar
    Then I click the search button
    Then I am on result page
    Then At least one item shows up

  Scenario: Internet shop logo button

    When I click on the today best deals tab
    Then I am on todays best deals tab
    Then I click on internet shop logo
    Then I am on the main page


    

   
