import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import AutomationTestStorePage from '../../page_objects/automation_test_store_page';

const automationTestStorePage = new AutomationTestStorePage();

Given('I navigate to the Automation Test Store page', () => {
  automationTestStorePage.visit();
});

When('I search for the product titled {string}', (productTitle) => {
  automationTestStorePage.search(productTitle);
});


Then('the product should be included in the shopping cart with {string}', (title) => {
  automationTestStorePage.verifyProductWithFreeShipping(title);
});
When('I increase the quantity to {int}', (quantity) => {
  automationTestStorePage.updateQuantity(quantity);
});

Then('the total price should be updated correctly', () => {
  automationTestStorePage.verifyTotalPrice();
});

Then('the product should be out of stock', () => {
  automationTestStorePage.verifyOutOfStock();
});
