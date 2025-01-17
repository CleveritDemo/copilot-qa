Feature: Automation Test Store

  Scenario: Add Casual 3/4 Sleeve to the shopping cart with Free Shipping
    Given I navigate to the Automation Test Store page
    When I search for the product titled "Casual 3/4 Sleeve"
    Then the product should be included in the shopping cart with "Free Shipping"

    Scenario: Validate Casual 3/4 Sleeve product with Free Shipping and update quantity
    Given I navigate to the Automation Test Store page
    When I search for the product titled "Casual 3/4 Sleeve"
    Then the product should be included in the shopping cart with "Free Shipping"
    When I increase the quantity to 2
    Then the total price should be updated correctly

  Scenario: Validate CK IN2U EAU DE TOILETTE product is out of stock
    Given I navigate to the Automation Test Store page
    When I search for the product titled "CK IN2U EAU DE TOILETTE"
    Then the product should be out of stock
