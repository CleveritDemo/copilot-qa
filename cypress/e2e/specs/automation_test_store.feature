Feature: Automation Test Store

  @test_01
  Scenario Outline: Add Benefit Bella Bamba to the shopping cart
    Given I navigate to the Automation Test Store page
    When I search for the product titled "<productTitle>"
    And I add the product to the shopping cart
    Then the product should be included in the shopping cart "<productTitle>"
    Examples:
    | productTitle        |
    | Benefit Bella Bamba |

   @test_02
   Scenario Outline: Add Total Moisture Facial Cream to the shopping cart
    Given I navigate to the Automation Test Store page
    When I search for the product titled "<productTitle>"
    And I add the product to the shopping cart
    Then the product should be included in the shopping cart "<productTitle>"
    And I continue shopping
  Examples:
    | productTitle                |       
    | Total Moisture Facial Cream |

  @test_03
  Scenario: Validate out of stock product
    Given I navigate to the Automation Test Store page
    When I search for the product titled "Acqua Di Gio Pour Homme"
    Then the product should be out of stock