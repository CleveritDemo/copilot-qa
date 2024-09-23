//import BaseURL from "../../../plugins/cypress/config/prod.json";
import BaseURL from "../../../fixtures/baseUrl.json";

before(() => {
  cy.log("This will run once before all tests");

  let user =  Cypress.env().user
  let password = Cypress.env().pass

});



beforeEach(() => {

cy.log("comienza el test")
//  cy.visit(BaseURL.amb[Cypress.env("entorno")]["baseUrl"])

});
