@regression
Feature: Registration page validations

  As a user of nl.tommy.com
  I should be able to see error messages if I enter invalid information during registration

  Background:

    Given 'user' is on tommy NL homepage
    And user can see the tommy hilfiger brand logo
    And user clicks on the registration link
    And registration window is in view
    When user clicks on the create an account link
    Then account registration is displayed


  Scenario: Create an account without entering a valid email okTerms and password
    When user clicks on create account button without entering a valid email password and ok terms
    Then error messages is displayed for username password and okTerms

  Scenario: Invalid email is supplied
    Given user enters an invalid email 'junkerniyi@'
    When user clicks on create account button
    Then email error message is displayed 'Sorry, dit is geen geldig e-mailadres'

  Scenario: password less than 5 chars
    Given user enters a valid email
    And user enter an incomplete password 'abcd'
    When user clicks on create account button
    Then password error message is displayed 'Je wachtwoord moet tussen 5 en 20 tekens lang zijn'

  Scenario: Create a valid account
    Given user enters a valid email
    And user enter an complete password 'abcde'
    And user checks the terms label
    When user clicks on create account button
    Then user account is successfully created
    Then user logs out

  Scenario: verify that address can be added
    Given user enters a valid email
    And user enter an complete password 'abcde'
    And user checks the terms label
    And user clicks on create account button
    And user account is successfully created
    And click on my addressbook
    And click on the address book button
    When enter the following address
      | firstName | qwqw       |
      | lastName  | qwqw       |
      | street    | Pieter Cornelisz Hooftstraat |
      | houseNo   | 101       |
      | city      | Amsterdam      |
      | postCode  | 1071 BR   |
    Then update address by clicking on the save button
    Then user validates address has been saved


