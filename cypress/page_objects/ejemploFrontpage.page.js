/// <reference types="Cypress" />
import Base from "./_base.page"

//elementos
const selectores = {

  "inputSearch": "#APjFqb",
  "btnSearch": "[name='btnK']",
  "title": "body",
  "page": "[href='/service']",
}

export default class login extends Base {
  static exampleMethod(title) {
    super.verifyIfElementExists(exampleElement);
    cy.contains(title);
  }

  static visitHomePage() {
    cy.visit('https://www.cleveritgroup.com/');
  }

  static validateTittle(tittle) {
    cy.title().should('include', tittle);
  }

  static validateLinkPage(text) {
    cy.get(selectores.page).should('exist');
  }


}

