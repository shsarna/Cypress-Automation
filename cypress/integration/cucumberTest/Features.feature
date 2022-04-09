Feature: Login Functionality Tests

Background:
Given User is at douglas login registration page

Scenario: As an user with correct credentials I would like to be able to login to the web shop
When User enters username as 'testUser@douglasTest.com' and password as 'Welcome@1234'
And User clicks on login button
Then User is able to successfully login to the Website

Scenario: As a user I would like to receive an error message, if I enter wrong credentials.
When User enters username as 'testUser@douglasTest.com' and password as 'wrongPassword'
And User clicks on login button
Then User gets invalid credentials error message

Scenario: As a user, I would like to be able to reset my password if I forget my credentials.
When User clicks on reset password link
And User enters username as 'testUser@douglasTest.com' and clicks on submit button
Then User gets email sent success message

Scenario: As an existing user, I should not be able to register with an existing account
When User enters first name as 'fname' and lastname as 'fname'
And User enters Date of Birth in format DD.MM.YYYY as '01.01.1991'
And User selects the gender as 'Frau'
And User enters the email adress as 'testUser@douglasTest.com'
And User enters the password as 'Welcome@1234'
And User clicks the submit registration button
Then User should get an email exists error message


Scenario: User with age less than 16 should not be allowed to register
When User enters first name as 'fname' and lastname as 'lname'
And User enters Date of Birth in format DD.MM.YYYY as '01.01.2010'
And User selects the gender as 'Frau'
And User enters the email adress generated randomly with current Date and Time
And User enters the password as 'Welcome@1234'
And User clicks the submit registration button
And User should get age limit error message

Scenario: A user should not be created with Invalid Email format
When User enters first name as 'fname' and lastname as 'lname'
And User enters Date of Birth in format DD.MM.YYYY as '01.01.1991'
And User selects the gender as 'Frau'
And User enters the email adress as 'testUserdouglasTest.com'
And User enters the password as 'Welcome@1234'
And User clicks the submit registration button
Then User should get invalid email format error message

Scenario: As a new user I would like to register with correct email format
When User enters first name as 'fname' and lastname as 'lname'
And User enters Date of Birth in format DD.MM.YYYY as '01.01.1991'
And User selects the gender as 'Frau'
And User enters the email adress generated randomly with current Date and Time
And User enters the password as 'Welcome@1234'
And User clicks the submit registration button
Then User should be created and logged in with first name as 'fname'



