const selectores = {
  inputSearch: '[data-test="search-query"]',
  btnSearch: '[data-test="search-submit"]',
  productItem: '[class="card"]',
  productDetails: '[data-test="product-description"]',
  btnAddToCart: '[data-test="add-to-cart"]',
  btnAddProduct: '[data-test="increase-quantity"]',
  cartIcon: '[data-test="cart-quantity"]',
  cardQuantity: '[class="form-control quantity"]',
  cartItem: '.cart-item',
  btnRemoveFromCart: '[class="btn btn-danger"]',
  cartQuantity: '#cart-quantity',
  filterOptions: '.filter-options',
  filteredResults: '.filtered-results'
};

class PracticeSoftwareTestingPage {
  visit() {
    cy.visit('https://practicesoftwaretesting.com/');
  }

  selectProduct() {
    cy.get(selectores.productItem).first().click();
  }

  verifyProductDetails() {
    cy.get(selectores.productDetails).should('be.visible');
  }

  enterSearchTerm(productName) {
    cy.get(selectores.inputSearch).type(productName);
  }

  clickSearchButton() {
    cy.get(selectores.btnSearch).click();
  }

  verifySearchResults(productName) {
    cy.get(selectores.productItem).should('contain', productName);
  }

  applyFilters(filter) {
    cy.contains(filter).click();
    //cy.get(selectores.filterOptions).check();
  }

  verifyFilteredResults() {
    cy.get(selectores.productItem).should('be.visible');
    //cy.get(selectores.filteredResults).should('be.visible');
  }

  selectToProduct() {
    cy.get(selectores.btnAddProduct).click();
  }
  addToCart() {
    cy.get(selectores.btnAddToCart).click();
  }

  verifyProductInCart() {
    cy.get(selectores.cartIcon).should('contain', '1');
  }

  goToCart() {
    cy.get(selectores.cartIcon).click();
  }

  removeFromCart() {
    cy.get(selectores.btnRemoveFromCart).click();
  }

  verifyProductRemovedFromCart() {
    cy.get(selectores.cardQuantity).should('not.contain', '1');
  }

  addMultipleProductsToCart() {
    cy.get(selectores.btnAddToCart).each(($el, index, $list) => {
      if (index < 3) {
        cy.wrap($el).find(selectores.btnAddToCart).click();
      }
    });
  }

  verifyCartQuantity() {
    cy.get(selectores.cartIcon)
    .should('contain', '3');
  }

  verifyFilteredSearchResults(productName) {
    cy.get(selectores.productItem).should('contain', productName);
  }
}

export default PracticeSoftwareTestingPage;