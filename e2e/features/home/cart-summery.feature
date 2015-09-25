Feature: summery shopping cart on the home page
  As a training consumer
  I want to see a summery of my purchase order before proceeding to the next step
  So that I know when I am ready to move on to the next step

  Scenario: the cart summary should show the cumulative amount of the equal products in my shopping cart
    Given I have an empty shopping cart
    When I add 2 Test Driven Development (TDD) trainings to my cart
    Then the cart summery should show 2 products

  Scenario: the cart summary should show the cumulative amount of the different products in my shopping cart
    Given I have 5 Test Driven Development (TDD) trainings in my cart
    When I add 3 Testing 3.0 trainings to my cart
    Then the cart summery should show 8 products

  Scenario: the cart summary should show the cumulative price of the equal products in my shopping cart
    Given I have an empty shopping cart
    When I add 3 Programming for Testers by Alan Richardson trainings
    Then the cart summery should show € 4,485.00 as a total price

  Scenario: the cart summary should show the cumulative price of the different products in my shopping cart
    Given I have 1 Programming for Testers by Alan Richardson training in my cart
    When I add 4 Unit Testing in Visual studio 2013 trainings
    Then the cart summery should show € 6,495.00 as a total price

  Scenario: the cart summery should show updated values after I remove products from my shopping cart
    Given I have 6 Testing in AngularJS trainings in my cart
    When I remove 2 Testing in AngularJS trainings from the cart
    Then the cart summery should show € 2,780.00 as a total price
    And the cart summery should show 4 products