import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import AutomationTestStorePage from '../../page_objects/automation_test_store_page';

const automationTestStorePage = new AutomationTestStorePage();

Given('I navigate to the Automation Test Store page', () => {
  automationTestStorePage.visit();
});

When('I search for the product titled {string}', (productTitle) => {
  automationTestStorePage.search(productTitle);
});

When('I add the product to the shopping cart', () => {
  automationTestStorePage.addToCart();
});

Then('the product should be included in the shopping cart {string}', (productTitle) => {
  automationTestStorePage.verifyProductInCart(productTitle);
});
Then('I continue shopping', () => {
  automationTestStorePage.continueShopping();
});

Then('the product should be out of stock', () => {
  automationTestStorePage.verifyOutOfStock();
});