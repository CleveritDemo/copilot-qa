class GooglePage {
  visit() {
    cy.visit('https://www.google.com');
  }

  search(term) {
    cy.get('#APjFqb').type(`${term}{enter}`);
  }

  verifyTitle(title) {
    cy.title().should('include', title);
  }
}

export default GooglePage;