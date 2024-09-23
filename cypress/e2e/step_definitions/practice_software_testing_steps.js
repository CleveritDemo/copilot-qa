import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import PracticeSoftwareTestingPage from '../../page_objects/practice_software_testing_page';

const practiceSoftwareTestingPage = new PracticeSoftwareTestingPage();

Given('I navigate to the Practice Software Testing homepage', () => {
  practiceSoftwareTestingPage.visit();
});

When('I select a product', () => {
  practiceSoftwareTestingPage.selectProduct();
});

Then('the selected product should be shown on the product details page', () => {
  practiceSoftwareTestingPage.verifyProductDetails();
});

When('I enter a search term in the search bar {string}', (productName) => {
  practiceSoftwareTestingPage.enterSearchTerm(productName);
});

When('I click the search button', () => {
  practiceSoftwareTestingPage.clickSearchButton();
});

Then('the results should show products related to the search term {string}', (productName) => {
  practiceSoftwareTestingPage.verifySearchResults(productName);
});

When('I apply search filters {string}', (filter) => {
  practiceSoftwareTestingPage.applyFilters(filter);
});

Then('the listed products should update to reflect the applied filters', () => {
  practiceSoftwareTestingPage.verifyFilteredResults();
});

When('I click \'Add to Cart\'', () => {
  practiceSoftwareTestingPage.addToCart();
});

Then('the product should be added to the cart and the cart icon should update', () => {
  practiceSoftwareTestingPage.verifyProductInCart();
});

When('I add a product to the cart', () => {
  practiceSoftwareTestingPage.addToCart();
});

When('I go to the shopping cart', () => {
  practiceSoftwareTestingPage.goToCart();
});

When('I remove the product from the cart', () => {
  practiceSoftwareTestingPage.removeFromCart();
});

Then('the product should be removed from the cart and the cart icon should update', () => {
  practiceSoftwareTestingPage.verifyProductRemovedFromCart();
});

When('I add multiple products to the cart', () => {
  practiceSoftwareTestingPage.selectToProduct();
  practiceSoftwareTestingPage.selectToProduct();
  practiceSoftwareTestingPage.addToCart();
  //practiceSoftwareTestingPage.addMultipleProductsToCart();
});

Then('the total number of products in the cart should reflect the number of items added', () => {
  practiceSoftwareTestingPage.verifyCartQuantity();
});

Then('the results should show products that meet both the search term and applied filters {string}', (productName) => {
  practiceSoftwareTestingPage.verifyFilteredSearchResults(productName);
});