Feature: Practice Software Testing

  Scenario: Verificar la selección de un producto
    Given I navigate to the Practice Software Testing homepage
    When  I select a product
    Then  the selected product should be shown on the product details page

  Scenario Outline: Verificar la búsqueda en el search
    Given I navigate to the Practice Software Testing homepage
    When  I enter a search term in the search bar "<productName>"
    And   I click the search button
    Then  the results should show products related to the search term "<productName>"
    Examples:
        | productName                           | 
        | Claw Hammer with Shock Reduction Grip | 

  Scenario: Verificar el uso de filtros
    Given I navigate to the Practice Software Testing homepage
    When I apply search filters " Hand Saw "
    Then the listed products should update to reflect the applied filters

  Scenario: Verificar la adición de un producto al carrito
    Given I navigate to the Practice Software Testing homepage
    When I select a product
    And I click 'Add to Cart'
    Then the product should be added to the cart and the cart icon should update

  Scenario: Verificar la eliminación de un producto del carrito
    Given I navigate to the Practice Software Testing homepage
    And I select a product
    And I click 'Add to Cart'
    And I go to the shopping cart
    When I remove the product from the cart
    Then the product should be removed from the cart and the cart icon should update

  Scenario: Verificar la cantidad de productos en el carrito
    Given I navigate to the Practice Software Testing homepage
    And I select a product
    When I add multiple products to the cart
    And I go to the shopping cart
    Then the total number of products in the cart should reflect the number of items added

  Scenario: Verificar la funcionalidad de búsqueda con filtros aplicados
    Given I navigate to the Practice Software Testing homepage
     When I apply search filters "Measures"
    And   I enter a search term in the search bar "Measure"
    And I click the search button
    Then the results should show products that meet both the search term and applied filters "Measure"
