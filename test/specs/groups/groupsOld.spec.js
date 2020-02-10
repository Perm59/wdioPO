const {expect} = require('chai');

const {URL_LOGIN, progressMonitorLinksSelectors, pageGroups,
  pageCreateNewGroup, pageLoginSelectors, pageGroupsSelectors,
  pageCreateNewGroupSelectors} = require('../../data');

describe('Groups', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue('lutka@yahoo.com');
    $(pageLoginSelectors.passwordInput).setValue('lutka');
    $(pageLoginSelectors.loginButton).click();
  });

  // Progress Monitor hyperlinks bar
  it('should choose click hyperlink Groups', () => {
    const element = $(progressMonitorLinksSelectors.groups);
    //expect(element.isExisting()).equal(true);
    element.click();
  });

  // Groups page
  it('should have a correct heading Groups', () => {
    const actual = $(pageGroupsSelectors.h1).getText();
    const expected = pageGroups.h1;
    expect(actual).eq(expected);
  });

  it('should choose click button', () => {
    const element = $(pageGroupsSelectors.createNewGroupButton);
    //expect(element.isExisting()).equal(true);
    element.click();
    browser.pause(1000);
  });

  // Create new Group page
  it('should have a correct heading', () => {
    const actual = $(pageCreateNewGroupSelectors.h1).getText();
    const expected = pageCreateNewGroup.h1;
    expect(actual).eq(expected);
  });

  it('should fill a Group name field', () => {
    const element = $(pageCreateNewGroupSelectors.groupNameInput);
    element.setValue(pageCreateNewGroup.groupName);
  });

  it('should fill Access type field', () => {
    const element = $(pageCreateNewGroupSelectors.accessTypeInput);
    element.selectByVisibleText(pageCreateNewGroup.accessType);
  });

  it('should fill a Group description field', () => {
    const element = $(pageCreateNewGroupSelectors.groupDescriptionInput);
    element.setValue(pageCreateNewGroup.groupDescription);
  });

  it('should choose click button', () => {
    const element = $(pageCreateNewGroupSelectors.createButton);
    element.click();
    browser.pause(5000);
  });

  // return to Group page
  it('should have a correct heading Groups', () => {
    const actual = $(pageGroupsSelectors.h1).getText();
    const expected = pageGroups.h1;
    expect(actual).eq(expected);
  });

  it('should have correct notification', () => {
    const actual = $(pageGroupsSelectors.notification).getText();
    const expected = pageGroups.notification;
    expect(actual).equal(expected);
  });
});