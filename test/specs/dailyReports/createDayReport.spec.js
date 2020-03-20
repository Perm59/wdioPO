import { expect } from 'chai';
import LoginPage from '../login/LoginPage';
import CreateDayReportPage from './CreateDayReportPage';
import ProfilePage from "../profile/ProfilePage";
import DailyReportsPage from "./DailyReportsPage";

describe('LOGIN (positive)', () => {
  before( () => {
    LoginPage.login();
    browser.pause(5000);
  });

  // test Profile page
  it('should choose click button', () => {
    ProfilePage.createDayReportButton.click();
    browser.pause (5000);
  });

  // test Create Day Report page
  it('should have a correct heading', () => {
    const actual = $(CreateDayReportPage.h1).getText();
    const expected = 'Create day report';
    console.log(actual);
    expect(actual).equal(expected);
  });

  it('should select level from 0 to 10 in dropdown', () => {
    const element = CreateDayReportPage.yourMorale;
    element.selectByVisibleText('9');
  });

  it('should fill up hours study field from 0 to 10', () => {
    const element = CreateDayReportPage.hoursStudy;
    element.setValue('5');
  });

  it('should fill up about field', () => {
    const element = CreateDayReportPage.yourDay;
    element.setValue('So far so good and I like it so much!');
    browser.pause(1000);
  });

  //checkboxes
  it('should select checkbox "Helped classmates"', () => {
    const element =CreateDayReportPage.checkboxHelped;
    element.click();
    const actual = element.isSelected();
    expect(actual).equal(true);
  });

  it('should select checkbox "I need help"', () => {
    const element = CreateDayReportPage.checkboxIneedHelp;
    element.click();
    const actual = element.isSelected();
    expect(actual).equal(true);
  });

  it('should select checkbox "Watched lectures"', () => {
    const element = CreateDayReportPage.checkboxWatchedLectures;
    element.click();
    const actual = element.isSelected();
    expect(actual).equal(true);
  });

  it('should select checkbox "Got a job offer', () => {
    const element = CreateDayReportPage.checkboxGotAJobOffer;
    element.click();
    const actual = element.isSelected();
    expect(actual).equal(true);
  });

  it('should choose click Save button', () => {
    const element = CreateDayReportPage.saveButton;
    element.click();
    browser.pause(5000);
  });

  //test Daily Reports page
  it('should have a correct heading', () => {
    const actual =DailyReportsPage.h1.getText();
    const expected = 'Daily reports';
    expect(actual).equal(expected);
  });

});