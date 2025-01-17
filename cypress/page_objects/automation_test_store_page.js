const selectores = {
  inputSearch: '#filter_keyword',
  freeShipping: '.alert',
  quantityInput: 'input[name="quantity"]',
  totalPrice: '.total-price',
  price: '.productpageprice',
  outOfStockMessage: '.nostock'
};

class AutomationTestStorePage {
  visit() {
    cy.visit('https://automationteststore.com/');
  }

  search(productTitle) {
    cy.get(selectores.inputSearch).type(`${productTitle}{enter}`);
  }

  verifyProductWithFreeShipping(title) {
    cy.get(selectores.freeShipping).should('be.visible');
    cy.get(selectores.freeShipping).should('contain', title);
  }
  updateQuantity(quantity) {
    cy.get(selectores.quantityInput).clear().type(quantity);
  }

  verifyTotalPrice() {
    cy.get(selectores.totalPrice).should('be.visible');
  }

  verifyOutOfStock() {
    cy.get(selectores.outOfStockMessage).should('be.visible');
  }

 
}

export default AutomationTestStorePage;
