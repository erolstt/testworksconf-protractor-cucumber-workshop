Feature: Product Overview
  Scenario: It should display the cart summary in the header
    Given "Jake" is on the home page
    Then the cart summary should be displayed in the header
