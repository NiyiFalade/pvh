# PVH typescript test framework

PVH typescript test framework is based on the Serenity Screenplay pattern an approach to writing high quality automated acceptance test based on software engineering principles. In the screenplay pattern, we call the a user interacting with the system an Actor.  Actors are at the heart of the screenplay pattern. Each Actor has a certain number of Abilities such as to browse the web or query a restful web service

![Screenshot from 2021-08-23 14-54-45](https://user-images.githubusercontent.com/28037727/130459640-17f7cbee-9f99-4732-a846-8b53206157c0.png)


More Information here  - https://serenity-bdd.github.io/theserenitybook/latest/serenity-screenplay.html#

## Test Project Structure 

1. Protractor - testrunner and webdriverjs libray
1. Cucumber-js
1. Serenity BDD 
1. Serenity-js
1. Serenity-js reporting services  - Test Report
 

## Issues  -  
* During test development and execution - I had an intermittent validation error with address book zipCode field ( I was using valid NL zipcodes).
* The other main issue was the newsletter pop up ( Random in nature ) it was handled in parts of tests but I was unable to determine everywhere else the newsletter poped up or frequency most importantly the rules governing when and how it poped up during test execution which resulted in some test failures 
 

## Installing

`npm install ` 

(from the root of the project) - This should install all the necessary dependencies as stated on  package.json file

`npm run webdriver-update'` 

- downloads chrome webdriver .. this is main browser used during testing 

`npm run postinstall`

module integrates Serenity/JS and the Serenity BDD reporting CLI.  This integration enables your Serenity/JS tests to produce interim JSON reports, which the Serenity BDD reporting CLI can then turn into world-class, illustrated test reports and living documentation


## Test Execution 

`npm run test @regression `

## Screenshots

During test execution  - screenshots are stored ( target/site/serenity)

`npm run test:report`

Generate report ( output will stored at target/site/serenity/index.html ) - Index.html opened in a web browser 

## Generated Test Report 

![Screenshot from 2021-08-23 16-12-29](https://user-images.githubusercontent.com/28037727/130472346-ddc7e20b-4bfb-4d6d-b285-09e4fe18bbad.png)
![Screenshot from 2021-08-23 16-13-18](https://user-images.githubusercontent.com/28037727/130472351-d10d87fe-f627-4492-97da-eda09342eb7f.png)
![Screenshot from 2021-08-23 16-14-15](https://user-images.githubusercontent.com/28037727/130472356-c62b77e3-73f2-4204-8331-b321eea29b4a.png)



