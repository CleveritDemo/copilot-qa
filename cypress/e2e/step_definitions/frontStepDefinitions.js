import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import FrontPage from "../../page_objects/ejemploFrontpage.page"
import {collectCoverageFrom} from "mochawesome-merge/jest.config";

// step definitions de prueba//


Given('I visit the CleverIT homepage', () => {
    cy.log('Visito la pagina de CleverIt');
    FrontPage.visitHomePage()    

});

Then('the homepage title should include {string}', (title) => {
    FrontPage.validateTittle(title)
});

Then('there should be a link to the Services page', () => {
    FrontPage.validateLinkPage()
});

