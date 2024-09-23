Feature: Search Products

  Scenario: Verify search bar is available on all pages
    Given I navigate to the Automation Test Store homepage
    Then the search bar should be available on all pages

  Scenario Outline: Search for a product and verify relevant results
    Given I navigate to the Automation Test Store homepage
    When I search for the product titled "<productTitle>"
    Then the search results should be relevant and show products matching the keyword "<productTitle>"
    Examples:
      | productTitle        |
      | Benefit Bella Bamba |

  Scenario: Verify product preview in search results
    Given I navigate to the Automation Test Store homepage
    When I search for the product titled "Benefit Bella Bamba"
    Then the search results should show a preview of the products including image, name, and price

  Scenario: Search for a non-existent product
    Given I navigate to the Automation Test Store homepage
    When I search for the product titled "NonExistentProduct"
    Then the search results should indicate no products found with the message "There is no product that matches the search criteria"