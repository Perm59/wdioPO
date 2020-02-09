const {expect} = require('chai');

const {URL_LOGIN, pageAdmin, pageLoginSelectors, progressMonitorLinksSelectors,
  pageAdminSelectors} = require('../data');

describe('Test Admin hyperlink', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue('lutka@yahoo.com');
    $(pageLoginSelectors.passwordInput).setValue('lutka');
    $(pageLoginSelectors.loginButton).click();
  });

  // Progress Monitor hyperlinks bar
  it('should choose click hyperlink Groups', () => {
    const element = $(progressMonitorLinksSelectors.admin);
    //expect(element.isExisting()).equal(true);
    element.click();
  });

  // Admin page
  it('should have a correct heading Admin', () => {
    const actual = $(pageAdminSelectors.h1).getText();
    const expected = pageAdmin.h1;
    expect(actual).eq(expected);
  });

  it('should choose click button', () => {
    const element = $(pageAdminSelectors.updateCWButton);
    //expect(element.isExisting()).equal(true);
    element.click();
    browser.pause(1000);
  });

  it('should have correct notification', () => {
    const actual = $(pageAdminSelectors.notification).getText();
    const expected = pageAdmin.notification;
    expect(actual).equal(expected);
  });

});