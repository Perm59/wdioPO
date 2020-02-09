const {expect} = require('chai');

const {URL_LOGIN, progressMonitorLinksSelectors, pageLoginSelectors, pageQuiz, pageCreateQuestionGroup, pageEditQuizQuestionGroup, pageQuizSelectors, pageCreateQuestionGroupSelectors, pageEditQuizQuestionGroupSelectors } = require('../data');

describe('Test Quiz page', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue('lutka@yahoo.com');
    $(pageLoginSelectors.passwordInput).setValue('lutka');
    $(pageLoginSelectors.loginButton).click();
  });

  // Progress Monitor hyperlinks bar
  it('should choose click hyperlink Quizs', () => {
    const element = $(progressMonitorLinksSelectors.quiz);
    //expect(element.isExisting()).equal(true);
    element.click();
  });
  
  // Quiz page
  it('should have correct header Quiz', () => {
    const actual = $(pageQuizSelectors.h1).getText();
    const expected = pageQuiz.h1;
    expect(actual).equal(expected);
  });

  it('should choose click button Create Question Group', () => {
    const element = $(pageQuizSelectors.createQuestionGroupButton);
    element.click();
  });

  // Create Question Group page
  it('should have correct header Create Question Group', () => {
    const expected = $(pageCreateQuestionGroupSelectors.h1).getText();
    const actual = pageCreateQuestionGroup.h1;
    expect(actual).equal(expected);
  });

  it('should fill field Group name', () => {
    const element = $(pageCreateQuestionGroupSelectors.groupNameInput);
    element.setValue(pageCreateQuestionGroup.groupName);
    //browser.pause(1000);
  });

  it('should fill field Group description', () => {
    const element = $(pageCreateQuestionGroupSelectors.groupDescriptionInput);
    element.setValue(pageCreateQuestionGroup.groupDescription);
  });

  it('should fill Acceptable mistakes', () => {
    const element = $(pageCreateQuestionGroupSelectors.acceptableMistakesInput);
    element.setValue(pageCreateQuestionGroup.acceptableMistakes);
  });
  ///////////////////
  it('should select checkbox Active', () => {
    const  element = $(pageCreateQuestionGroupSelectors.checkboxActiveInput);
    const  elementLabel = $(pageCreateQuestionGroupSelectors.checkboxActiveInputLabel);

    const  actualBefore = element.isSelected();
    if(!actualBefore) {
      elementLabel.click();
      browser.pause(1000);
    }
    const actualAfter = element.isSelected();
    expect(actualAfter).equal(true);
  });

  it('should choose click Save button', () => {
    const element = $(pageCreateQuestionGroupSelectors.saveButton);
    element.click();
  });

  // Edit Quiz QuestionGroup page
  it('should have a correct header Edit /groupName/ 0', () => {
    const actual = $(pageEditQuizQuestionGroupSelectors.h1).getText();
    const expected = pageEditQuizQuestionGroup.h1;
    expect(actual).equal(expected);
  });

  it('should have a correct notification', () => {
    const actual = $(pageEditQuizQuestionGroupSelectors.notification).getText();
    const expected = pageEditQuizQuestionGroup.notification;
    expect(actual).equal(expected);
  });

  it('should choose click on button Save', () => {
    const element = $(pageEditQuizQuestionGroupSelectors.saveButton);
    element.click();
    browser.pause(1000);
  });
});