const {expect} = require('chai');

const { URL_REGISTER, user, pageRegister, pageLogin, pageConfirmation, 
  pageRegisterSelectors, pageLoginSelectors, pageConfirmationSelectors} = require('../data');

describe('Test PASV Register Page', () => {
  // open  browser
  it('should have the right title', () => {
    browser.url(URL_REGISTER);
    const actualTitle = browser.getTitle();
    const expectedTitle = pageRegister.title;
    expect(actualTitle).equal(expectedTitle);
  });

  // User Register page
  it('should have a correct heading', () => {
    const actual = $(pageRegisterSelectors.h1).getText();
    const expected = pageRegister.h1;
    expect(actual).equal(expected);
  });

  it('should have a correct description', () => {
    const actual = $(pageRegisterSelectors.description).getText();
    const expected = pageRegister.description;
    expect(actual).equal(expected);
  });

  it('should have a correct submit button text', () => {
    const actual = $(pageRegisterSelectors.submitButton).getText();
    const expected = pageRegister.button;
    // console.log(actual);
    expect(actual).equal(expected);
  });

  it('should fill First Name field', () => {
    const element = $(pageRegisterSelectors.firstNameInput);
    element.setValue(user.firstName);
  });

  it('should fill Last Name field', () => {
    const element = $(pageRegisterSelectors.lastNameInput);
    element.setValue(user.lastName);
  });

  it('should fill up phone num field', () => {
    const element = $(pageRegisterSelectors.phoneInput);
    element.setValue(user.phone);
  });

  it('should fill up email field', () => {
    const element = $(pageRegisterSelectors.emailInput);
    element.setValue(user.email);
  });

  it('should fill up password field', () => {
    const element = $(pageRegisterSelectors.passwordInput);
    element.setValue(user.password);
  });

  it('should fill up about field', () => {
    const element = $(pageRegisterSelectors.aboutInput);
    element.setValue(user.about);
  });

  it('should fill up my goals field', () => {
    const element = $(pageRegisterSelectors.goalsInput);
    element.setValue(user.goals);
  });

  it('should select english level dropdown', () => {
    const element = $(pageRegisterSelectors.englishLevelInput);
    element.selectByVisibleText(user.englishLevel);
  });

  it('should choose click button', () => {
    const element = $(pageRegisterSelectors.submitButton);
    element.click();
  });

  // User Login page
  it('should have the right title', () => {
    const actualTitle = browser.getTitle();
    const expectedTitle = pageLogin.title;
    expect(actualTitle).equal(expectedTitle);
  });

  it('should have a correct heading', () => {
    browser.pause(5000);
    const actual = $(pageLoginSelectors.h1).getText();
    const expected = pageLogin.h1;
    expect(actual).equal(expected);
  });

  it('should have a correct notification', () => {
    const actual = $(pageLoginSelectors.notification).getText();
    const expected = pageLogin.notification;
    expect(actual).equal(expected);
  });

  it('should have a correct login button text', () => {
    const actual = $(pageLoginSelectors.loginButton).getText();
    const expected = pageLogin.button;
    console.log(actual);
    expect(actual).equal(expected);
  });

  it('should have a correct description', () => {
    const link = $(pageLoginSelectors.linkToForget);
    expect(link).to.not.be.null;
  });

  it('should fill up email', () => {
    const element = $(pageLoginSelectors.emailInput);
    element.setValue(user.email);
  });

  it('should fill up password ', () => {
    const element = $(pageLoginSelectors.passwordInput);
    element.setValue(user.password);
  });

  it('should click Login button', () => {
    const element = $(pageLoginSelectors.loginButton);
    element.click();
    browser.pause(2000);
  });

  // Confirmation page
  it('should have a correct heading', () => {
    browser.pause(2000);
    const actual = $(pageConfirmationSelectors.h1).getText();
    const expected = pageConfirmation.confirmation;
    expect(actual).equal(expected);
  });

  it('should have a correct notification', () => {
    const actual = $(pageConfirmationSelectors.notification).getText();
    const expected = pageConfirmation.notification;
    expect(actual).equal(expected);
  });

});