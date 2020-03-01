Feature: Insurance Travel
    This feature help user can compare list company provide insurance travel with best benefit
    
    Scenario: Verfiy user can user feature 
        Given User Open Gobear website
        When User select menu travel
        Then System will display travel screen
        When User click button show my result
        Then System will display list result
        When User filter result
        Then System will display list result match with filter