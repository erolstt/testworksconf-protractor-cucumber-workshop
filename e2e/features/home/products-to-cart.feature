Feature: adding products to the shopping cart
  As a training consumer
  I want to add training products to my shopping cart
  So that I can purchase these trainings

  Scenario: add a single product to an empty shopping cart
    Given I have no trainings added to my cart
    When I add one Testing in AngularJS training to my cart
    Then my cart should contain 1 Testing in AngularJS training

  Scenario: add multiple products to an empty shopping cart
    Given I have no trainings added to my cart
    When I add 5 Specification by Example trainings to my cart
    Then my cart should contain 5 Specification by Example trainings

  Scenario: add different products to the shopping cart
    Given my cart contains 2 Testing 3.0 trainings
    When I add 3 Test Driven Development (TDD) trainings to my cart
    Then my cart should contain 2 Testing 3.0 and 3 Test Driven Development (TDD) trainings

  Scenario: it should not be possible to add the same quantity of a product twice
    Given my cart contains 2 Testing 3.0 trainings
    When I try to add 2 Testing 3.0 trainings to the cart
    Then the cart should still contain only 2 Testing 3.0 trainings

  Scenario: receive notification when adding product to cart
    Given I am on the home page
    When I add a new training to to my cart
    Then I should receive a notification
