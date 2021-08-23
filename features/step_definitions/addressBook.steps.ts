import { Given, Then, When } from '@cucumber/cucumber';
import { actorCalled, actorInTheSpotlight, Check, Duration, TestCompromisedError } from '@serenity-js/core';
import { Ensure, equals } from '@serenity-js/assertions';
import { Click, Enter, Navigate, Wait, Text, Hover, Select, Selected } from '@serenity-js/protractor';
import { AccountRegistrationPageFactory } from '../support/tommy-pvh/ui';
import { AddressBookPageFactory } from '../support/tommy-pvh/ui/AddressBookPageFactory';


Then('click on my addressbook', function () {
    return actorInTheSpotlight().attemptsTo(
        Hover.over(AccountRegistrationPageFactory.accountIcon),
        Click.on(AccountRegistrationPageFactory.addressBook)
    )
})

Then('click on the address book button', function () {
    return actorInTheSpotlight().attemptsTo(
        Click.on(AccountRegistrationPageFactory.addAddressBook)
    )
})

When('enter the following address', function (dataTable) {
    var addressBook = dataTable.rowsHash();
    return actorInTheSpotlight().attemptsTo(
        Enter.theValue(addressBook['firstName']).into(AddressBookPageFactory.firstName),
        Enter.theValue(addressBook['lastName']).into(AddressBookPageFactory.lastName),
        Enter.theValue(addressBook['street']).into(AddressBookPageFactory.address1),
        Enter.theValue(addressBook['houseNo']).into(AddressBookPageFactory.address2),
        Enter.theValue(addressBook['city']).into(AddressBookPageFactory.city),
        Enter.theValue(addressBook['postCode']).into(AddressBookPageFactory.zipCode),
        Wait.for(Duration.ofSeconds(2)),
    )

});

Then('update address by clicking on the save button', function () {
    return actorInTheSpotlight().attemptsTo(
        Click.on(AddressBookPageFactory.submit)
    )
});

Then('user validates address has been saved', function () {
    return actorInTheSpotlight().attemptsTo(
        Hover.over(AccountRegistrationPageFactory.accountIcon),
        Click.on(AccountRegistrationPageFactory.addressBook),
        Wait.for(Duration.ofSeconds(2)),
        Ensure.that(Text.of(AddressBookPageFactory.completedAddressOption), equals('Kerkstraat')))
});