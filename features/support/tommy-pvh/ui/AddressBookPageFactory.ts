import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class AddressBookPageFactory {
    static firstName = Target.the('first name').located(by.id('firstName'));
    static lastName = Target.the('last name').located(by.id('lastName'));
    static address1 = Target.the('address1').located(by.id('address1'));
    static address2 = Target.the('address2').located(by.id('address2'));
    static city = Target.the('city').located(by.id('city'));
    static zipCode = Target.the('zip code').located(by.id('zipCode'));
    static phone1 = Target.the('phone1').located(by.id('phone1'));
    static submit = Target.the('save').located(by.className('Button Button__secondary address-form__button-save'))
    static completedAddressOption = Target.the('completed address').located(by.css('[data-testid="address-book-select"]'));
    static closeNewsLetter = Target.the('close news letter').located(by.className('newsletter__close button--close'))
}