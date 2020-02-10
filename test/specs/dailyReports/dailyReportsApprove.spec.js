const {expect} = require('chai');
const {URL_DAILY_REPORTS, pageDiary, pageDiarySelectors} = require('./dailyReports_data');
const { loginAsAdmin, logout} = require('../../actions');

describe('APPROVE DAILY REPORTS', () => {
  before('Login as admin', () => {
    loginAsAdmin();
    browser.pause(1000);
  });
    
  it('should open Create day report page', () => {
    browser.url(URL_DAILY_REPORTS);
    browser.pause(1000);
  });

  //test Daily reports page
  it('should have a correct heading', () => {
    const actual = $(pageDiarySelectors.h1).getText();
    const expected = pageDiary.h1;
    expect(actual).equal(expected);
  });

  it('should have a correct notification', () => {
    const actual = $(pageDiarySelectors.notification).getText();
    const expected = pageDiary.notification;
    expect(actual).equal(expected);
  });

  it('should choose click Approve button', () => {
    const element = $(pageDiarySelectors.approveButton);
    element.click();
    browser.pause(1000);
    const actual = $(pageDiarySelectors.approvedButton).isExisting();
    expect(actual).equal(true);
  });

  it('should have a correct notification', () => {
    const actual = $(pageDiarySelectors.notificationApproved).getText();
    const expected = pageDiary.notificationApproved;
    expect(actual).equal(expected);
  });

  after('Logout', () => {
    logout();
    browser.pause(1000);
  });

});