import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import GooglePage from '../../page_objects/google_page';

const googlePage = new GooglePage();

Given('I open Google page', () => {
  googlePage.visit();
});

When('I search for {string}', (searchTerm) => {
  googlePage.search(searchTerm);
});

Then('the title should contain {string}', (title) => {
  googlePage.verifyTitle(title);
});