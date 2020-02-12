import { expect } from 'chai';
import RegisterPage from "./RegisterPage";
import LoginPage from "../login/LoginPage";
import NewUserConfirmationPage from "./NewUserConfirmationPage";


describe('Register Page', () => {
  // open  browser
  it('should open Register page', () => {
    RegisterPage.open();
    browser.pause(5000);
  });

  it('should have a correct header', () => {
    const actualTitle = RegisterPage.h1.getText();
    const expectedTitle = 'User Register';
    expect(actualTitle).equal(expectedTitle);
  });

  it('should fill First Name field', () => {
    const element = $(RegisterPage.firstName);
    element.setValue('Lyu');
  });

  it('should fill Last Name field', () => {
    const element = $(RegisterPage.lastName);
    element.setValue('Dmyla');
  });

    it('should fill up phone num field', () => {
      const element = $(RegisterPage.phone);
      element.setValue('12345678901');
    });

    it('should fill up email field', () => {
      const element = $(RegisterPage.email);
      element.setValue(Math.random() + 'kakao@yahoo.com');
    });

    it('should fill up password field', () => {
      const element = $(RegisterPage.password);
      element.setValue('123Lyu456');
    });

    it('should fill up about field', () => {
      const element = $(RegisterPage.about);
      element.setValue('Some info about');
    });

    it('should fill up my goals field', () => {
      const element = $(RegisterPage.goals);
      element.setValue('My goals: 1. Eat 2. Sleep 3. Code');
    });

    it('should select english level dropdown', () => {
      const element = $(RegisterPage.englishLevel);
      element.selectByVisibleText('Native');
    });

    it('should choose click button', () => {
      const element = $(RegisterPage.submitButton);
      element.click();
    });

  // User Login page
  it('should have the right user login title ', () => {
    const actual = LoginPage.h1.getText();
    const expected = 'User Login';
    expect(actual).equal(expected);
  });

  it('should fill up email', () => {
    const element = $(RegisterPage.email);
    element.setValue('0.6877437439542373kakao@yahoo.com');
  });

  it('should fill up password ', () => {
    const element = $(RegisterPage.password);
    element.setValue('123Lyu456');
  });

  it('should click Login button', () => {
    const element = $(LoginPage.submitBtn);
    element.click();
    browser.pause(2000);
  });

  // New User Confirmation page
  it('should have a correct heading', () => {
    browser.pause(2000);
    const actual = NewUserConfirmationPage.h1.getText();
    const expected = 'You are a new user';
    expect(actual).equal(expected);
  });

  it('should have a correct notification', () => {
    const actual = NewUserConfirmationPage.notification.getText();
    const expected = 'Auth success';
    expect(actual).equal(expected);
  });



});