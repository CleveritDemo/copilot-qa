const selectores = {
  inputSearch: '#filter_keyword',
  btnAddToCart: '.cart',
  cartTotal: '.product-list',
  btnContinueShopping: '.continue_shopping',
  outOfStockMessage: '.nostock',
  searchBar: '#filter_keyword',
  searchResults: '#product_details',
  productPreview: '#maincontainer',
  noProductsFound: '.no-products-found'
};

class AutomationTestStorePage {
  visit() {
    cy.visit('https://automationteststore.com/');
  }

  search(productTitle) {
    cy.get(selectores.inputSearch).type(`${productTitle}{enter}`);
  }

  addToCart() {
    cy.get(selectores.btnAddToCart).click();
  }

  verifyProductInCart(productTitle) {
    cy.get(selectores.cartTotal).should('contain', productTitle);
  }

  continueShopping() {
   // cy.get(selectores.btnContinueShopping).click();
   cy.contains('Continue Shopping').click();
  }

  verifyOutOfStock() {
    cy.get(selectores.outOfStockMessage).should('be.visible');
  }
  verifySearchBar() {
    cy.get(selectores.inputSearch).should('be.visible');
    //cy.get(selectores.searchBar).should('be.visible');
  }

  verifyRelevantSearchResults(message) {
    cy.get(selectores.searchResults).should('contain', message );
  }

  verifyProductPreview() {
    cy.get(selectores.productPreview).should('be.visible');
    cy.get(selectores.productPreview).find('img').should('be.visible');
    cy.get(selectores.productPreview).find('.bgnone').should('be.visible');
    cy.get(selectores.productPreview).find('.productpageprice').should('be.visible');
  }

  verifyNoProductsFound(message) {
    cy.get(selectores.productPreview).should('be.contain', message);
  }
  
}

export default AutomationTestStorePage;