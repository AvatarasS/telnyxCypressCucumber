# Automated Testing for telnyx.com using Cypress with Cucumber and JavaScript

This project is an automated testing suite for the website [Telnyx](https://telnyx.com/), written in Cypress and Cucumber using JavaScript. The report made via Allure reporter. These tests cover various features of the Telnyx website, including video playback, logo display, button functionality and href attributes, form validation, title naming, search functionality, and checkbox filtering in different sections of the website.

### Project Setup

To set up the automated tests in this project, follow these steps:
1. Clone this repository to your local machine.
    - Open the terminal or command prompt on your machine.
    - Navigate to the directory where you want to download the repository.
    - Run the following command: 
    ```git clone https://github.com/AvatarasS/telnyxCucumber.git```.
    - Once complete, the repository will be downloaded to the directory you specified.
2. Navigate to the project directory:
    ```cd repository-name```
3. Install all packages and dependencies using npm:
    ```npm install```

### Running Tests

- Run ```npm run cy:open``` to open Cypress GUI.
- Run ```npm run cy:run``` to start the test runner in headless mode and run all tests in the Chrome browser without opening the GUI.

### Reports

- Run ```npm run allure:clear``` to clear previous Allure results
- Run ```npm run allure:report``` to generate a test Allure report
- Run ```npm run allure:open``` to open generated Allure report

### Notes

- Link to the GitHub Pages with test report generated via Allure reporter: (https://avatarass.github.io/telnyxCypressCucumber/).
- The test cases can be found in the `cypress/e2e` directory.
- The page object models can be found in the `cypress/e2e/POM` directory.
