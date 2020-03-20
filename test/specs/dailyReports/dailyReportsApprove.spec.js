import { expect } from 'chai';
import LoginPage from '../login/LoginPage';
import DailyReportsPage from "./DailyReportsPage";

describe('APPROVE DAILY REPORTS', () => {
    before( () => {
      LoginPage.login();
      browser.pause(5000);
    });

    // Progress Monitor hyperlinks bar
  it('should choose click hyperlink Diary', () => {
    const element = $('a[qa="diary-link"]');
    //expect(element.isExisting()).equal(true);
    element.click();
    browser.pause(1000);
  });

  //test Daily Reports page
  it('should have a correct heading', () => {
    const actual = DailyReportsPage.h1.getText();
    const expected = 'Daily reports';
    expect(actual).equal(expected);
  });

  it('should have a correct notification', () => {
    const actual = DailyReportsPage.notification.getText();
    const expected = 'Get last (50) day reports';
    expect(actual).equal(expected);
  });

  it('should choose click Approve button', () => {
    const element = DailyReportsPage.approveButton;
    element.click();
    browser.pause(1000);
    const actual = DailyReportsPage.approvedButton.isExisting();
    expect(actual).equal(true);
  });

  it('should have a correct notification', () => {
    const actual = DailyReportsPage.notificationApproved.getText();
    const expected = 'Diary approved. Updated Achievement. Success';
    expect(actual).equal(expected);
  });

});