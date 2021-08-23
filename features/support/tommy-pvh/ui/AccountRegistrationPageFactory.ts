import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class AccountRegistrationPageFactory {
    static tommyLogo = Target.the('the tommy logo').located(by.className('logo header__logo'));
    static registrationLink = Target.the('registration link').located(by.xpath('//*[@id="root"]/div/header/div[2]/div/div[2]/span[2]/button'));
    static authenticationPortal = Target.the('authentication portal').located(by.id('authentication-portal'));
    static registerNewAccount = Target.the('register a new account').located(by.className('link link--top'));
    static openNewAcccount = Target.the('new account').located(by.className('authentication-form__text'));
    static okCookieNotification = Target.the('ok cookie notification').located(by.className('cookie-notice__agree-button button'));
    static createAccountButton = Target.the('create an account button').located(by.className('Button Button__primary-new authentication-form__submit'))
    static createAnEmail = Target.the('create an email').located(by.id('create-account-email'))
    static createAnAccountPassword = Target.the('create a password').located(by.id('create-account-password'))
    static createAnAccountHelperText = Target.the('helper text').located(by.id('create-account-email-helper-text'));
    static createAnAccountPasswordHelperText = Target.the('helper Password text').located(by.id('create-account-password-helper-text'));
    static confirmErrorText = Target.the('confirm errortext').located(by.className('error-text'))
    static agreeTerms = Target.the('agreeTerms').located(by.css('div.Checkbox.agree-terms > label'))
    static newsletter = Target.the('newsletter').located(by.css('div.Checkbox.create-account-newsletter > label'))
    static accountIcon = Target.the('account icon').located(by.className('header__action account-link'))
    static myAccount = Target.the("my account").located(by.linkText('Accountgegevens'))
    static addressBook = Target.the('address book').located(by.linkText('Adresboek'));
    static addAddressBook = Target.the('add address').located(by.className(' Button Button__secondary'));
}