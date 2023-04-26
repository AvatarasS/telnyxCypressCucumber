Feature: Telnyx website testing

  Background:
    Given I visited the Telnyx Main page

  Scenario: ID_001 Test that the video right above the footer on the Main page has the correct Telnyx logo video source
    When I scroll down to the footer video
    Then I should see the correct video playback

  Scenario: ID_002 Test that 12 Company logos are displayed on the Main page
    When I scroll down to the Company logos block
    Then I should see the 12 company logos

  Scenario: ID_003 Test that buttons at bottom of the Main page have the correct href attribute         
    When I scroll down to the footer
    Then I should see 'Data and Privacy' that has the correct href '/data-privacy'
    And I should see 'Report Abuse' that has the correct href '/report-abuse'
    And I should see 'Privacy Policy' that has the correct href '/privacy-policy'
    And I should see 'Cookie Policy' that has the correct href '/cookie-policy'
    And I should see 'Law Enforcement' that has the correct href '/law-enforcement-request'
    And I should see 'Acceptable Use' that has the correct href '/acceptable-use-policy'
    And I should see 'Website Terms and Conditions' that has the correct href '/terms-and-conditions'
    And I should see 'Release Notes' that has the correct href '/release-notes'
    And I should see 'Careers' that has the correct href '/careers'

  Scenario: ID_004 Test that 4 'scroll-to' buttons are displayed over the 'Telnyx Product Updates' block on the Data and Privacy page
    When I scroll down to the footer
    And I click on the Data and Privacy button
    Then I should see 4 scroll-to buttons over 'Telnyx Product Updates' block
    And I should see the Telnyx Product Updates button in the scroll-to buttons block
    And I should see the GDPR Frequently Asked Questions button in the scroll-to buttons block
    And I should see the Compliance button in the scroll-to buttons block
    And I should see the Data Transfer Impact Assessment button in the scroll-to buttons block    

  Scenario: ID_005 Test that the user see the inner text of the dropdown button after clicking on it at GDPR Frequently Asked Questions block on Data and Privacy page
    When I scroll down to the footer
    And I click on the Data and Privacy button
    And I scroll down to the GDPR Frequently Asked Questions dropdown menu block
    And I click on the 'Does Telnyx process personal data?' dropdown button
    Then I should see the inner text of the 'Does Telnyx process personal data?' dropdown button

  Scenario: ID_006 Test the user to see the EMPLOYEE SPOTLIGHT button at the EMPLOYEE SPOTLIGHT block on the Careers page
    When I scroll down to the footer
    And I click on the Careers button
    And I scroll down to the EMPLOYEE SPOTLIGHT block
    Then I should see the 'See employee spotlights' button

  Scenario: ID_007 Test that the titles naming of the paragraph are correct on the Website Terms and Conditions page
    When I scroll down to the footer
    And I click on the Website Terms and Conditions button
    Then I should see on the page 1 st title named '1. Terms'
    And I should see on the page 2 nd title named '2. Use License'
    And I should see on the page 3 rd title named '3. Disclaimer'
    And I should see on the page 4 th title named '4. Limitations'
    And I should see on the page 5 th title named '5. Revisions And Errors'
    And I should see on the page 6 th title named '6. Links'
    And I should see on the page 7 th title named '7. Modifications In Site Terms Of Use'
    And I should see on the page 8 th title named '8. Governing Law'
    And I should see on the page 9 th title named '9. Indemnification'
    And I should see on the page 10 th title named '10. Termination'

  Scenario: ID_008 Test that a word with Latin letters can be entered into the search field on the Release Notes page
    When I scroll down to the footer
    And I click on the Release Notes button
    And I type in the search field 'automate'
    Then I should see 'automate' typed in the search field

  Scenario: ID_009 Test the redirection to the correct article with the same title at Release Notes page
    When I scroll down to the footer
    And I click on the Release Notes button
    And I click on the Read More button in the 'Integrate your systems using HTTP requests in TeXML bin' paragraph
    Then I should see the 'Integrate your systems using HTTP requests in TeXML bin' title on the page

  Scenario: ID_010 Test the unchecking checked checkboxes when checking "Select All" at Filter Release Notes by Product column in the Release Notes page
    When I scroll down to the footer
    And I click on the Release Notes button
    And I check the 'Storage' checkbox at sidebox
    And I check the 'VoiceAPI' checkbox at sidebox
    And I check the 'WhatsApp' checkbox at sidebox
    And I check the 'SelectAll' checkbox at sidebox
    Then I should see 'Storage' unchecked
    And I should see 'VoiceAPI' unchecked
    And I should see 'WhatsApp' unchecked

  Scenario: ID_011 Test the user receives the red error border at Download Pricing form on Messaging API page when required fields are leaved blank
    When I click on the Pricing button at the header
    And I click on the 'Messaging API' button
    And I scroll down to the Download Pricing form
    And I click on the First Name field
    And I click on the Last Name field
    And I click on the Business email field
        And I click on the First Name field
        And I click on the Last Name field
        And I click on the Business email field
    Then I should see a red error border around the 'FirstName' field
    And I should see a red error border around the 'LastName' field
    And I should see a red error border around the 'Email' field

  Scenario: ID_012 Test the user see completing message after submitting the Download Pricing form on the Messaging API page with valid credentials
    When I click on the Pricing button at the header
    And I click on the 'Messaging API' button
    And I scroll down to the Download Pricing form
    And I fill the FirstName field with 'Steve'
    And I fill the LastName field with 'Smith'
    And I fill the Email field with 'stevesmith@gmail.com'
    And I click Submit button
    Then I should see completing message 'Thank you.'

  Scenario: ID_013 Test the user see the error message when submitting the Download Pricing form on the Messaging API page with the Business email field filled with numbers
    When I click on the Pricing button at the header
    And I click on the 'Messaging API' button
    And I scroll down to the Download Pricing form
    And I fill the FirstName field with 'Steve'
    And I fill the LastName field with 'Smith'
    And I fill the Email field with '00000000'
    And I click Submit button
    Then I should see the Email error message 'Must be valid email. example@yourdomain.com' 

  Scenario: ID_014 Test the user see opened 'Purchase or port SMS numbers' tab with the correct inner text and video at How It Works block on the SMS API page
    When I click on the Products button at the header
    And I click on the 'SMS API' button
    And I scroll to How It Works block
    Then I should see 'Purchase or port SMS numbers' with the correct inner text
    And I should see the correct 'Purchase or port SMS numbers' Video

  Scenario: ID_015 Test that the 'Complete registration' tab after clicking on it is revealed with correct inner text and video on the SMS API page at the 'How It Works' block
    When I click on the Products button at the header
    And I click on the 'SMS API' button
    And I scroll to How It Works block
    And I click the 'Complete registration' tab button
    Then I should see 'Complete registration' with the correct inner text
    And I should see the correct 'Complete registration' Video