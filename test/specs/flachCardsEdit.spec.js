const {expect} = require('chai');
const {URL_FLASH_CARDS, pageFlashCardsModal, pageFlashCardsSelectors, pageFlashCardsModalSelectors,  } = require('../data');
const { loginAsAdmin, logout} = require('../actions');

describe('EDIT FLASH GROUP', () => {
  before('Login as admin', () => {
    loginAsAdmin();
    browser.pause(1000);
  });

  it('should open Flash Cards page', () => {
    browser.url(URL_FLASH_CARDS);
    browser.pause(1000);
  });

  //Edit Flash Group
  
  it('should choose click Edit hyperlink', () => {
    const element = $(pageFlashCardsSelectors.edit);
    element.click();
    //browser.pause(3000);
  });

  it('should have correct Edit FlashGroup heading', () => {

  });

  it('should edit Group name', () => {  // QA Automation1111
    const actual = $(pageFlashCardsModalSelectors.createGroupNameInput);
    actual.setValue(pageFlashCardsModal.editGroupNameInput);
    browser.pause(2000);
  });

  it('should choose click Save button', () => {
    const element = $(pageFlashCardsModalSelectors.editButton);
    element.click();
    browser.pause(1000);
  });


  after('Logout', () => {
    logout();
    browser.pause(1000);
  });

});
