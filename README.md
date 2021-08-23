PVH typescript test framework

PVH typescript test framework is based on the Serenity Screenplay pattern an approach to writing high quality automated acceptance test based on software engineering principles. In the screenplay pattern, we call the a user interacting with the system an Actor.  Actors are at the heart of the screenplay pattern. Each Actor has a certain number of Abilities such as to browse the web or query a restful web service

More Information here  - https://serenity-bdd.github.io/theserenitybook/latest/serenity-screenplay.html#


This Project uses Protractor which acts both test runner and integrates with Serenity-js/Protractor/adapter that manages the Cucumber (Parses Feature files) and uses step_definitions files that drives protractor interacts with Web App

**Installing**

npm install  (from the root of the project) - This should install all the necessary dependencies as stated on  package.json file

npm run webdriver-update' - downloads chrome webdriver .. this is main browser used during testing 

npm run postinstall' - module integrates Serenity/JS and the Serenity BDD reporting CLI.  This integration enables your Serenity/JS tests to produce interim JSON reports, which the Serenity BDD reporting CLI can then turn into world-class, illustrated test reports and living documentation


**Run tests locallly**

npm run test @regression 

to run all test "npm run test @regression"

Generate report ( output will stored at target/site/serenity/index.html )

npm run test:report
