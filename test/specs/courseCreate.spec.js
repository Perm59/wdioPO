const {expect} = require('chai');
const {URL_LOGIN, progressMonitorLinksSelectors, pageLoginSelectors, pageCourse, pageCourseCreate, pageCourseSelectors, pageCourseCreateSelectors} = require('../data');

describe('CREATE DAY REPORT', () => {
  before('Login as admin', () => {
    //this.retries(0);
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue('lutka@yahoo.com');
    $(pageLoginSelectors.passwordInput).setValue('lutka');
    $(pageLoginSelectors.loginButton).click();
  });

  // Progress Monitor hyperlinks bar
  it('should choose click hyperlink Courses', () => {
    const element = $(progressMonitorLinksSelectors.courses);
    //expect(element.isExisting()).equal(true);
    element.click();
  });

  // Course page
  it('should have a correct heading Courses', () => {
    const actual = $(pageCourseSelectors.h1).getText();
    const expected = pageCourse.h1;
    expect(actual).equal(expected);
  });  

  it('should choose click button', () => {
    const element = $(pageCourseSelectors.createNewCourseButton);
    //expect(element.isExisting()).equal(true);
    element.click();
    browser.pause(1000);
  });

  // Create Course page
  it('should have a correct heading `Create Course`', () => {
    const actual = $(pageCourseCreateSelectors.h1).getText();
    const expected = pageCourseCreate.h1;
    console.log(actual);
    expect(actual).equal(expected);
  });

  it('should fill Course name field', () => {
    const element = $(pageCourseCreateSelectors.courseNameInput);
    element.setValue(pageCourseCreate.courseName);
  });

  it('should fill Course description field', () => {
    const element = $(pageCourseCreateSelectors.courseDescriptionInput);
    element.setValue(pageCourseCreate.courseDescription);
  });

  it('should fill Access type field', () => {
    const element = $(pageCourseCreateSelectors.accessTypeInput);
    element.selectByVisibleText(pageCourseCreate.accessTypeAll);
  });

  it('should click Create button', () => {
    const element = $(pageCourseCreateSelectors.createButton);
    element.click();
  });

  // back to Courses page
  it('should have a correct notification', () => {
    const actual = $(pageCourseSelectors.notification).getText();
    const expected = pageCourse.notification;
    console.log(actual);
    expect(actual).equal(expected);
    browser.pause(5000);
  });
});