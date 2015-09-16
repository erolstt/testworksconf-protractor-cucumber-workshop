Feature: Home
  As a training consumer
  I want a product overview of all the available Xebia trainings
  So that I can select a training I want to follow

  Scenario: It should display the cart summary in the header
    Given I am ready to order products at the Xebia webshop
    Then the cart summary should be displayed in the header

  Scenario: Receiving a notification
    Given I am ready to order products at the Xebia webshop
    When I add a new product to my shopping cart
    Then I should receive a notification

  Scenario: Adding different products to the shopping cart
    Given I am ready to order products at the Xebia webshop
    When I add 3 different products to my shopping cart
    Then all chosen products are added to my shopping cart
    Then I should get a total price of all added products

  Scenario: Adding duplicate products to the shopping cart
    Given I am ready to order products at the Xebia webshop
    When I add the same product to my shopping cart twice
    Then Only 1 of the product will be in my cart
