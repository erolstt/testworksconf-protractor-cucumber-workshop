Feature: Shopping Cart

  Scenario: Deleting products from my shopping cart
    Given I added 3 products to my shopping cart
    When I remove 2 different products from my shopping cart
    Then all chosen products are removed from my shopping cart
    And I should get a updated total price of the products

  Scenario: Deleting products from my shopping cart
    Given I added 3 products to my shopping cart
    When I remove 2 different products from my shopping cart
    Then all chosen products are removed from my shopping cart
    And I should get a updated total price of the products

  Scenario: Upscaling products in my shopping cart
    Given I added 2 products to my shopping cart
    When I upscale the quantity of my product to 3
    Then I should get a updated total price of the products



















