Feature: Telnyx website testing

  Background:
    Given I visited Telnyx Main page

  Scenario: ID_001 Test the correct video playing at the bottom of Main page
    When I scroll down 
    Then I should see a correct video playback

  Scenario: ID_002 Test that companies logo displayed and its quantity is 12 on Main page
    When I scroll down to the Company logos block
    Then I should see the 12 company logos

