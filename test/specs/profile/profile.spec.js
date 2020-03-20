import { expect } from 'chai';
import LoginPage from '../login/LoginPage';
import ProfilePage from './ProfilePage';

describe('PROFILE', () => {
  before( () => {
    LoginPage.login();
    browser.pause(5000);

  });

  it('should go to profile Page', () => {
    expect(ProfilePage.h1.getText()).eq('Test Testov');
  });

  it('should choose click Create day report button', () => {
    const element = ProfilePage.createDayReportButton;
    element.click();
    browser.pause(5000);
  });



});
