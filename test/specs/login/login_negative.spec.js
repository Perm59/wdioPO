import { expect } from 'chai';
import LoginPage from './LoginPage'
import ProfilePage from '../profile/ProfilePage'

describe('LOGIN (negative)', () => {
  it('should open login page', () => {
    LoginPage.open();
    browser.pause(3000);
  });

  it('should have correct title', () => {
    const actual = LoginPage.h1.getText();
    const expected = 'User Login';
    expect(actual).eq(expected);
  });

  it('should fill out email field', () => {
    LoginPage.email.setValue('lutka@yahoo.com');  //get email(){} in LoginPage.js
    //LoginPage.email().setValue('lutka@yahoo.com'); // email(){} in LoginPage.js
  });

  it('should fill out password field', () => {
    LoginPage.password.setValue('lutka+');
  });

  it('should click submit button', () => {
    LoginPage.submitBtn.click();
    browser.pause(3000);
  });

  it('should check h1 title', () => {
    expect(LoginPage.h1.getText()).equal('User Login');
  });

});