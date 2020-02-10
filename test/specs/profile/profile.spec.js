import { expect } from 'chai';
import LoginPage from '../login/LoginPage';
import ProfilePage from './ProfilePage';

describe('PROFILE', () => {
  before( () => {
    LoginPage.login();
    browser.pause(5000);

  });

  it('should go to profile Page', () => {
    expect(ProfilePage.h1.getText()).eq('Lu Tka');
  });

});
