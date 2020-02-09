const {expect} = require('chai');

const {URL_LOGIN, pageChallenge, pageChallengeModal, progressMonitorLinksSelectors,
  pageLoginSelectors, pageChallengeSelectors, pageChallengeModalSelectors } = require('../data');

describe('Test Challenge page', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue('lutka@yahoo.com');
    $(pageLoginSelectors.passwordInput).setValue('lutka');
    $(pageLoginSelectors.loginButton).click();
  });

  // Progress Monitor hyperlinks bar
  it('should choose click hyperlink Challenge', () => {
    const element = $(progressMonitorLinksSelectors.challenge);
    //expect(element.isExisting()).equal(true);
    element.click();
  });

  //Challenge page
  it('should have a correct heading Challenge', () => {
    const actual = $(pageChallengeSelectors.h1).getText();
    const expected = pageChallenge.h1;
    expect(actual).equal(expected);
  });

  it('should choose click Create Challenge button', () => {
    const element = $(pageChallengeSelectors.createChallengeButton);
    element.click();
  });
  
  //Modal
  it('should have a correct heading Create Challenge', () => {
    const actual = $(pageChallengeModalSelectors.h5).getText();
    const expected = pageChallengeModal.h5;
    expect(actual).equal(expected);
  });

  it('should select Programming Language from dropdown', () => {
    const element = $(pageChallengeModalSelectors.programmingLanguageInput);
    element.selectByVisibleText(pageChallengeModal.programmingLanguage);
  });

  it('should select Level from dropdown', () => {
    const element = $(pageChallengeModalSelectors.levelInput);
    element.selectByVisibleText(pageChallengeModal.level);
    browser.pause(1000);
  });

  it('should fill in Short description', () => {
    const element = $(pageChallengeModalSelectors.shortDescriptionInput);
    element.setValue(pageChallengeModal.shortDescription);
  });

  it('should fill in Instruction', () => {
    const element = $(pageChallengeModalSelectors.instructionInput);
    element.setValue(pageChallengeModal.instruction);
  });

  it('should fill in Completed solution', () => {
    const element = $(pageChallengeModalSelectors.completedSolutionInput);
    element.setValue(pageChallengeModal.completedSolution);
  });

  it('should choose click Save button', () => {
    const element = $(pageChallengeModalSelectors.saveButton);
    element.click();
  });

  // Challenge page
  it('should have correct heading Challenge', () => {
    const actual = $(pageChallengeModalSelectors.h5).getText();
    const expected = pageChallengeModal.h5;
    expect(actual).equal(expected);
  });

});