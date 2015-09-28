Feature: manage shopping cart content
  As a training consumer
  I want to manage the items in my shopping cart
  So that I can adjust my order before finalizing it

  Scenario: increase the product quantity
    Given I have 12 Behaviour Driven Development with Cucumber trainings in my cart
    When I increase the quantity with 3
    Then my cart should contain 9 Behaviour Driven Development with Cucumber trainings

  Scenario: decrease the product quantity
    Given I have 4 Specification by Example trainings in my cart
    When I decrease the quantity with 2
    Then my cart should contain 2 Specification by Example trainings

  Scenario: the product total price is adjusted to the product quantity
    Given I have 1 Advanced Selenium WebDriver trainings in my cart
    When I increase the the quantity with 1
    Then the total price for the Advanced Selenium WebDriver trainings should be € 1,390.00

  Scenario: remove product from shopping cart
    Given I have Test Driven Development (TDD) and Unit Testing in Visual studio 2013 trainings in my cart
    When I remove the Unit Testing in Visual studio 2013 training from my cart
    Then my cart should only contain the Test Driven Development (TDD) training

  Scenario: the shopping cart total price is adjusted when removing products from cart
    Given I have Test Driven Development (TDD) and Unit Testing in Visual studio 2013 and Testing 3.0 trainings in my cart
    When I remove the Unit Testing in Visual studio 2013 training from my cart
    Then the total price for my shopping cart should be € 1,290.00