import { Given, Then, When } from '@cucumber/cucumber';
import { actorCalled, actorInTheSpotlight, Check, Duration, TestCompromisedError } from '@serenity-js/core';
import { Ensure, equals } from '@serenity-js/assertions';
import { Click, Enter, Navigate, Wait, Text, Hover } from '@serenity-js/protractor';
import { isVisible, isClickable } from '@serenity-js/protractor/lib/expectations';
import { AccountRegistrationPageFactory } from '../support/tommy-pvh/ui';
import { AddressBookPageFactory } from '../support/tommy-pvh/ui/AddressBookPageFactory';



Given('{string} is on tommy NL homepage', function (actorName) {

    return actorCalled(actorName).attemptsTo(
        Navigate.to('https://nl.tommy.com/')
    )
});

Then('user can see the tommy hilfiger brand logo', function () {
    return actorInTheSpotlight().attemptsTo(
        Ensure.that(AccountRegistrationPageFactory.tommyLogo, isVisible())
    )
});

Then('user clicks on the registration link', function () {
    return actorInTheSpotlight().attemptsTo(
        Check.whether(AccountRegistrationPageFactory.okCookieNotification, isVisible()).andIfSo(Click.on(AccountRegistrationPageFactory.okCookieNotification)),
        Wait.upTo(Duration.ofSeconds(5)).until(AccountRegistrationPageFactory.registrationLink, isClickable()),
        Click.on(AccountRegistrationPageFactory.registrationLink)
    )
});

Then('registration window is in view', function () {
    return actorInTheSpotlight().attemptsTo(
        Ensure.that(AccountRegistrationPageFactory.authenticationPortal, isVisible())
    )
});

When('user clicks on the create an account link', function () {
    return actorInTheSpotlight().attemptsTo(
        Click.on(AccountRegistrationPageFactory.registerNewAccount)
    )
})

Then('account registration is displayed', function () {
    return actorInTheSpotlight().attemptsTo(
        Ensure.that(AccountRegistrationPageFactory.registerNewAccount, isVisible())
    )
});


When('user clicks on create account button without entering a valid email password and ok terms', function () {
    return actorInTheSpotlight().attemptsTo(
        Click.on(AccountRegistrationPageFactory.createAccountButton)
    )
});


When('user clicks on create account button', function () {
    return actorInTheSpotlight().attemptsTo(
        Click.on(AccountRegistrationPageFactory.createAccountButton)
    )
});

Then('error messages is displayed for username password and okTerms', function () {
    return actorInTheSpotlight().attemptsTo(
        Ensure.that(AccountRegistrationPageFactory.createAnAccountHelperText, isVisible()).otherwiseFailWith(TestCompromisedError, 'helper text not displayed'),
        Ensure.that(AccountRegistrationPageFactory.createAnAccountPasswordHelperText, isVisible()).otherwiseFailWith(TestCompromisedError, 'helper text not displayed'),
        Ensure.that(AccountRegistrationPageFactory.confirmErrorText, isVisible()).otherwiseFailWith(TestCompromisedError, 'helper text not displayed'),
    )
});

Given('user enters an invalid email {string}', function (email: string) {

    return actorInTheSpotlight().attemptsTo(
        Enter.theValue(email).into(AccountRegistrationPageFactory.createAnEmail)
    )
});


Given('user enters a valid email', function () {

    var faker = require('faker');
    var email = faker.internet.email()

    return actorInTheSpotlight().attemptsTo(
        Enter.theValue(email).into(AccountRegistrationPageFactory.createAnEmail)
    )
});

Given('user enter an incomplete/complete password {string}', function (password: string) {
    return actorInTheSpotlight().attemptsTo(
        Enter.theValue(password).into(AccountRegistrationPageFactory.createAnAccountPassword)
    )
});


Then('email error message is displayed {string}', function (emailErrorMessage: string) {
    return actorInTheSpotlight().attemptsTo(
        Ensure.that(Text.of(AccountRegistrationPageFactory.createAnAccountHelperText), equals(emailErrorMessage)
        ))
});


Then('password error message is displayed {string}', function (emailErrorMessage: string) {
    return actorInTheSpotlight().attemptsTo(
        Ensure.that(Text.of(AccountRegistrationPageFactory.createAnAccountPasswordHelperText), equals(emailErrorMessage)
        ))
});

Then('user checks the terms label', function () {
    return actorInTheSpotlight().attemptsTo(
        Click.on(AccountRegistrationPageFactory.agreeTerms),
        Click.on(AccountRegistrationPageFactory.newsletter),

    )
});


Then('user account is successfully created', function () {
    return actorInTheSpotlight().attemptsTo(
        Check.whether(AddressBookPageFactory.closeNewsLetter, isVisible()).andIfSo(Click.on(AddressBookPageFactory.closeNewsLetter)),
        Wait.upTo(Duration.ofSeconds(5)).until(AccountRegistrationPageFactory.accountIcon, isClickable()),
        Ensure.that(AccountRegistrationPageFactory.myAccount, isVisible())
    )
});

Then('user logs out', function () {
    return actorInTheSpotlight().attemptsTo (
        Hover.over(AccountRegistrationPageFactory.accountIcon),
        Click.on(AccountRegistrationPageFactory.logOut)
    )
})

