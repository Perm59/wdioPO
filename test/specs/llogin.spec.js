import { expect } from 'chai';
import LLoginPage from './LLoginPage'
import ProfilePage from './ProfilePage'

describe('', () => {
  it('should open login page', () => {
    LLoginPage.open();
  });

  it('should have correct title', () => {
    const actual = LLoginPage.h1.getText();
  });

  it('should fill out email field', () => {

    //if we use as method email() then we have to have get email() function in LLoginPage.js,
    //if we use email as email (svojstvo) then we have to rich to email() in LLoginPage.js
    LLoginPage.email.setValue('lutka@yahoo.com');  //email(){} in LLoginPage.js
    //LLoginPage.email().setValue('lutka@yahoo.com'); //get email(){} in LLoginPage.js
  });

  it('should fill out password field', () => {
    LLoginPage.password.setValue('lutka');
  });

  it('should click submit button', () => {
    LLoginPage.submitBtn.click();
    browser.pause(3000);
  });

});