import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import AutomationTestStorePage from '../../page_objects/automation_test_store_page';

const automationTestStorePage = new AutomationTestStorePage();

Given('I navigate to the Automation Test Store homepage', () => {
  automationTestStorePage.visit();
});

Then('the search bar should be available on all pages', () => {
  automationTestStorePage.verifySearchBar();
});

When('I search for the product titled {string}', (productTitle) => {
  automationTestStorePage.search(productTitle);
});

Then('the search results should be relevant and show products matching the keyword {string}', (productTitle) => {
  automationTestStorePage.verifyRelevantSearchResults(productTitle)
});

Then('the search results should show a preview of the products including image, name, and price', () => {
  automationTestStorePage.verifyProductPreview();
});

Then('the search results should indicate no products found with the message {string}', (message) => {
  automationTestStorePage.verifyNoProductsFound(message);
});