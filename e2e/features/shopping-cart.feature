Feature: Shopping Cart

  Scenario: Deleting products from my shopping cart
    Given I added 3 products to my shopping cart
    When I remove the first 2 products from my shopping cart
    Then all chosen products are removed from my shopping cart
    Then I should see the cart's total price of "$4.95"

  Scenario: Upscaling products in my shopping cart should affect the product's total price
    Given I added 2 products to my shopping cart
    When I increase the quantity of the second product to 3
    Then I should see the product's total price of "$29.85"

  Scenario: Upscaling products in my shopping cart should affect the cart's total price
    Given I added 2 products to my shopping cart
    When I increase the quantity of the second product to 3
    Then I should see the cart's total price of "$36.80"




















