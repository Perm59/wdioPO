const {expect} = require('chai');
const {pageUserAbout, pageCreateDayReport, pageDiary, pageUserAboutSelectors,
  pageCreateDayReportSelectors, pageDiarySelectors} = require('./dailyReports_data');
const { loginAsAdmin, logout} = require('../actions');


describe('CREATE DAY REPORT', () => {
  before('Login as admin', () => {
    loginAsAdmin();
    browser.pause(1000);
  });
  
  // test User page
  it('should choose click button', () => {
    const element = $(pageUserAboutSelectors.createDayReportButton);
    //expect(element.isExisting()).equal(true);
    element.click();
  });

  // test Create Day Report page
  it('should have a correct heading', () => {
    const actual = $(pageCreateDayReportSelectors.h1).getText();
    const expected = pageCreateDayReport.h1;
    console.log(actual);
    expect(actual).equal(expected);
  });

  it('should select level from 0 to 10 in dropdown', () => {
    const element = $(pageCreateDayReportSelectors.yourMoraleInput);
    element.selectByVisibleText(pageCreateDayReport.yourMorale);
  });

  it('should fill up hours study field from 0 to 10', () => {
    const element = $(pageCreateDayReportSelectors.hoursStudyInput);
    element.setValue(pageCreateDayReport.hoursStudy);
  });

  it('should fill up about field', () => {
    const element = $(pageCreateDayReportSelectors.yourDayInput);
    element.setValue(pageCreateDayReport.yourDay);
    browser.pause(1000);
  });
  //checkboxes
  it('should select checkbox "Helped classmates"', () => {
    const element = $(pageCreateDayReportSelectors.checkboxHelpedInput);
    element.click();
    const actual = element.isSelected();
    expect(actual).equal(true);
  });

  it('should select checkbox "I need help"', () => {
    const element = $(pageCreateDayReportSelectors.checkboxIneedHelpInput);
    element.click();
    const actual = element.isSelected();
    expect(actual).equal(true);
  });

  it('should select checkbox "Watched lectures"', () => {
    const element = $(pageCreateDayReportSelectors.checkboxWatchedLecturesInput);
    element.click();
    const actual = element.isSelected();
    expect(actual).equal(true);
  });

  it('should select checkbox "Got a job offer', () => {
    const element = $(pageCreateDayReportSelectors.checkboxGotAJobOfferInput);
    element.click();
    const actual = element.isSelected();
    expect(actual).equal(true);
  });
  //

  it('should choose click Save button', () => {
    const element = $(pageCreateDayReportSelectors.saveButton);
    element.click();
    browser.pause(5000);
  });

  //test Daily Reports page
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

  it('should choose click Like button', () => {
    const element = $(pageDiarySelectors.likeButton);
    element.click();
    //browser.pause(5000);
    const actual = $(pageDiarySelectors.iLikeThisButton).isExisting();
    expect(actual).equal(true);
  });

  it('should have a correct notification', () => {
    const actual = $(pageDiarySelectors.notificationILikeThis).getText();
    const expected = pageDiary.notificationILikeThis;
    expect(actual).equal(expected);
  });

  it('should choose click Delete button', () => {
    const element = $(pageDiarySelectors.deleteButton);
    element.click();
    browser.pause(1000);
    const actual = $(pageDiarySelectors.deleteButton).isExisting();
    expect(actual).equal(true);
  });

  it('should have a correct notification', () => {
    const actual = $(pageDiarySelectors.notificationDelete).getText();
    const expected = pageDiary.notificationDelete;
    expect(actual).equal(expected);
  });

  after('Logout', () => {
    logout();
    browser.pause(1000);
  });

});