Feature: Product Overview

  Scenario: It should display the cart summary in the header
    Given "Jake" is on the home page
    Then the cart summary should be displayed in the header

  Scenario 1a: Receiving a notification
    Given I am ready to order products at the Xebia webshop
    When I add a new product to my shopping cart
    Then I should receive a notification

  Scenario 1b: Receiving no notification
    Given I am ready to order products at the Xebia webshop
    When I add a duplicate product to my shopping cart
    Then I should not receive a notification

  Scenario 2a: Adding different products to the shopping cart
    Given I am ready to order products at the Xebia webshop
    When I add 3 different products to my shopping cart
    Then all chosen products are added to my shopping cart
    And I should get a total price of all added products

  Scenario 2b: Adding duplicate products to the shopping cart
    Given I am ready to order products at the Xebia webshop
    When I add a the same product to my shopping cart twice
    Then both chosen products are added to my shopping cart
