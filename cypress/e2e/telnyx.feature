Feature: Telnyx website testing

  Background:
    Given I visited Telnyx Main page

  Scenario: ID_001 Test the correct video playing at the bottom of Main page
    When I scroll down 
    Then I should see a correct video playback

  Scenario: ID_002 Test that companies logo displayed and its quantity is 12 on Main page
    When I scroll down to the Company logos block
    Then I should see the 12 company logos

  Scenario: ID_003 Test that buttons at bottom of Main page have the correct href attribute					
    When I scroll down to the bottom
    Then I should see 'Data and Privacy' that have correct href 'https://telnyx.com/company/data-privacy'
    And I should see 'Report Abuse' that have correct href 'https://telnyx.com/report-abuse'
    And I should see 'Privacy Policy' that have correct href 'https://telnyx.com/privacy-policy'
    And I should see 'Cookie Policy' that have correct href 'https://telnyx.com/cookie-policy'
    And I should see 'Law Enforcement' that have correct href 'https://telnyx.com/law-enforcement-request'
    And I should see 'Acceptable Use' that have correct href 'https://telnyx.com/acceptable-use-policy'

  Scenario: ID_004 Test that buttons displayed correctly at 'Jump to' block on Data and Privacy page
    When I scroll down to the bottom
    And I click on the Data and Privacy button
    Then I should see Telnyx Product Updates button in 'Jump to' block
    And I should see GDPR Frequently Asked Questions button in 'Jump to' block
    And I should see Compliance button in 'Jump to' block
    And I should see Data Transfer Impact Assessment button in 'Jump to' block    

  

  Scenario: ID_007 Test that the titles naming of paragraph are correct on the Website Terms and Conditions page
    When I scroll down to the bottom
    And I click on the Website Terms and Conditions button
    Then I should see at the page 1 st title named '1. Terms'
    And I should see at the page 2 nd title named '2. Use License'
    And I should see at the page 3 rd title named '3. Disclaimer'
    And I should see at the page 4 th title named '4. Limitations'
    And I should see at the page 5 th title named '5. Revisions And Errors'
    And I should see at the page 6 th title named '6. Links'
    And I should see at the page 7 th title named '7. Modifications In Site Terms Of Use'
    And I should see at the page 8 th title named '8. Governing Law'
    And I should see at the page 9 th title named '9. Indemnification'
    And I should see at the page 10 th title named '10. Termination'

  Scenario: ID_008 Test the functionality of cross button in the search field to erase typed value on the Release Notes page
    When I scroll down to the bottom
    And I click on the Release Notes button
    And I type in search field 'automate'
    Then I should see 'automate' typed in search field

  Scenario: ID_009 Test the redirection to the correct article with the same title at Release Notes page
    When I scroll down to the bottom
    And I click on the Release Notes button
    And I click on Read More button in 'Integrate your systems using HTTP requests in TeXML bin' paragraph
    Then I should see 'Integrate your systems using HTTP requests in TeXML bin' title at page

  Scenario: ID_010 Test the unchecking checked checkboxes when check "Select All" at Filter Release Notes by Product column in Release Notes page
    When I scroll down to the bottom
    And I click on the Release Notes button
    And I check 'Storage' checkbox at sidebox
    And I check 'VoiceAPI' checkbox at sidebox
    And I check 'WhatsApp' checkbox at sidebox
    And I check 'SelectAll' checkbox at sidebox
    Then I should see 'Storage' unchecked
    And I should see 'VoiceAPI' unchecked
    And I should see 'WhatsApp' unchecked

  Scenario: ID_011 Test the user receives the red error border at Download Pricing form on Messaging API page when required fields are clicked on and leaved blank
    When I click on the Pricing button at header
    And I click on the 'Messaging API' button
    And I scroll down to the Download Pricing form
    And I click on First Name field
    And I click on Last Name field
    And I click on Business email field
        And I click on First Name field
        And I click on Last Name field
        And I click on Business email field
    Then I should see red error border around 'FirstName' field
    And I should see red error border around 'LastName' field
    And I should see red error border around 'Email' field

  Scenario: ID_012 Test the user see completing message after submiting the Download Pricing form on the Messaging Api page with valid credentials
    When I click on the Pricing button at header
    And I click on the 'Messaging API' button
    And I scroll down to the Download Pricing form
    And I fill FirstName field with 'Steave'
    And I fill LastName field with 'Smith'
    And I fill Email field with 'stevesmith@gmail.com'
    And I click Submit button
    Then I should see completing message 'Thank you.'

  Scenario: ID_013 Test the user see the error message when submiting the Download Pricing form on the Messaging Api page with Business email field filled with numbers
    When I click on the Pricing button at header
    And I click on the 'Messaging API' button
    And I scroll down to the Download Pricing form
    And I fill FirstName field with 'Steave'
    And I fill LastName field with 'Smith'
    And I fill Email field with '00000000'
    And I click Submit button
    Then I should see Email error message 'Must be valid email. example@yourdomain.com' 

  Scenario: ID_014 Test the user see opened 'Purchase or port SMS numbers' tab with correct inner text and video at How It Works block on SMS API page
    When I click on the Products button at header
    And I click on the 'SMS API' button
    And I scroll to How It Works block
    Then I should see 'Purchase or port SMS numbers' with correct inner text
    And I should see correct 'Purchase or port SMS numbers' Video

  Scenario: ID_015 Test that the 'Complete registration' tab after click is revealed with correct inner text and video on SMS API page at 'How It Works' block
    When I click on the Products button at header
    And I click on the 'SMS API' button
    And I scroll to How It Works block
    And I click 'Complete registration' tab button
    And I should see 'Complete registration' with correct inner text
    And I should see correct 'Complete registration' Video