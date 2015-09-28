Feature: finalize the order
  As a training consumer
  I want to finalize my order
  So that I can consume the trainings I selected

  Scenario: notification that the order is finalized
    Given I have 2 Behaviour Driven Development with Cucumber trainings in my cart
    When I click the finalize button
    Then I should receive a notification that my order is finalized

  Scenario: after finalizing the order the cart should go back to its default state
    Given I have 2 Programming for Testers by Alan Richardson trainings in my cart
    When I click the finalize button
    Then my cart should return to its default state

  Scenario: notification when shopping cart is empty
    Given I have no products added to my shopping cart
    When I go to the shopping cart
    Then I should receive a notification that my cart is empty

  Scenario: disable finalize button when cart is empty
    Given I have no products added to my shopping cart
    When I go to the shopping cart
    Then the finalize button should be disabled