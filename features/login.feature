@digital-skola @login
Feature: Swag Labs - Login
  Background: User on the login page
    Given Elieta is on the login page

  @positive
  Scenario: As a standard_user, I want to log in succesfully
    When Elieta login with "standard_user" credential
    Then Elieta should see home page

  @negative-1
  Scenario: As a locked_out_user, I should get error message
    When Elieta login with "locked_out_user" credential
    Then Elieta should see error "Epic sadface: Sorry, this user has been locked out."

  @negative-2
  Scenario: As a problem_user, I should get error message
    When Elieta login with "problem_user" credential
    Then Elieta should see error "Epic sadface: Sorry, this user has been locked out."

  @negative-3
  Scenario: As a performance_glitch_user, I should get error message
    When Elieta login with "performance_glitch_user" credential
    Then Elieta should see error "Epic sadface: Sorry, this user has been locked out."

  @negative-4
  Scenario: As a error_user, I should get error message
    When Elieta login with "error_user" credential
    Then Elieta should see error "Epic sadface: Sorry, this user has been locked out."

  @negative-5
  Scenario: As a visual_user, I should get error message
    When Elieta login with "visual_user" credential
    Then Elieta should see error "Epic sadface: Sorry, this user has been locked out."
