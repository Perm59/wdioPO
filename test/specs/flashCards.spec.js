const {expect} = require('chai');

const {URL_LOGIN, pageFlashGroup,progressMonitorLinksSelectors, pageLoginSelectors,
  pageFlashCards, pageFlashCardsModal, pageFlashCardsSelectors,
  pageFlashCardsModalSelectors, pageFlashGroupSelectors} = require('../data');

describe('FLASH GROUP CREATE', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue('lutka@yahoo.com');
    $(pageLoginSelectors.passwordInput).setValue('lutka');
    $(pageLoginSelectors.loginButton).click();
  });

  // Progress Monitor hyperlinks bar
  it('should choose click hyperlink Cards', () => {
    const element = $(progressMonitorLinksSelectors.cards);
    element.click();
  });

  // FlashCards page
  /* extra
  it('should have a correct heading FlashCards', () => {
    const actual = $(pageFlashCardsSelectors.h1).getText();
    const expected = pageFlashCards.h1;
    expect(actual).eq(expected);
  });
  */
  
  it('should click button Create new FlashGroup', () => {
    const element = $(pageFlashCardsSelectors.createNewFlashGroupButton);
    element.click();
    browser.pause(1000);
  });

  //check Modal form
  it('Should check if modal form is open', () => {
    const element = $(pageFlashCardsModalSelectors.modalSidePanel);
    //expect(element.isDisplayed()).true;
    const actual = element.isDisplayed();
    expect(actual).equal(true);
  });

  it('Should check if modal form title is correct', () => {
    const actual = $(pageFlashCardsModalSelectors.modalSidePanelTitle).getText();
    const expected = pageFlashCardsModal.h5;
    expect(actual).eq(expected);

  });

  it('should fill out a Group name field', () => {
    const element = $(pageFlashCardsModalSelectors.createGroupNameInput);
    element.setValue(pageFlashCardsModal.createGroupName);
  });

  it('should fill a Group description field', () => {
    const element = $(pageFlashCardsModalSelectors.createGroupDescriptionInput);
    element.setValue(pageFlashCardsModal.createGroupDescription);
  });

  it('should choose click Create button', () => {
    const element = $(pageFlashCardsModalSelectors.createButton);
    element.click();
    browser.pause(1000);
  });

  // back to Flash Cards page
  // extra
  it('should have a correct heading FlashCards', () => {
    const actual = $(pageFlashCardsSelectors.h1).getText();
    const expected = pageFlashCards.h1;
    expect(actual).eq(expected);
    browser.pause(1000);
  });

  //not necessary
  it('should have a correct notification', () => {
    const actual = $(pageFlashCardsSelectors.notification).getText();
    const expected = pageFlashCards.notification;
    console.log(actual);
    expect(actual).equal(expected);
    browser.pause(2000);
  });

  //check last created flash group by Viktor
  it('should first item in list be equal created group name', () => {
    const actual = $(pageFlashCardsModalSelectors.firstItemInListGroupNameCreatedInput).getText();
    const expected = pageFlashCardsModal.createGroupName;
    expect(actual).eq(expected);
  });
  
  it('should first item in list be equal created group description', () => {
    const actual = $(pageFlashCardsModalSelectors.firstItemInListGroupDescriptionCreatedInput).getText();
    const expected = pageFlashCardsModal.createGroupDescription;
    expect(actual).eq(expected);
  });
 
  it('should verify created name group is clickable', () => {
    const element = $(pageFlashCardsModalSelectors.firstItemInListGroupNameCreatedInput);
    element.click();
    browser.pause(300);
  });

  it('should clicked group has correct title', () => {
    const actual = $(pageFlashGroupSelectors.groupNameCreated).getText();
    const expected = pageFlashGroup.groupNameCreated;    //'QA Automation';
    expect(actual).eq(expected);
  });


});