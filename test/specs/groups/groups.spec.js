import { expect } from 'chai';
import LoginPage from '../login/LoginPage';
import GroupsPage from './GroupsPage';

describe('GROUPS PAGE', () => {
  before( () => {
    LoginPage.login();
    browser.pause(5000);

  });

  // Progress Monitor hyperlinks bar
  it('should choose click hyperlink Groups', () => {
    const element = $('a[qa="groups-link"]');
    //expect(element.isExisting()).equal(true);
    element.click();
  });

  it('should go to Groups Page', () => {
    expect(GroupsPage.h1.getText()).eq('Groups');
    browser.pause(1000);
  });

  it('should choose click button', () => {
    const element = $('//a[@class="btn btn-secondary"]');
    //expect(element.isExisting()).equal(true);
    element.click();
  });

  // Create new Group page
  it('should have a correct heading', () => {
    const actual = $('h1').getText();
    const expected = 'Create new Group';
    expect(actual).equal(expected);
  });

  it('should fill a Group name field', () => {
    const element = $('//input[@name="name"]');
    element.setValue('QA35');
  });

    it('should fill Access type field', () => {
      const element = $('//select[@name="accessType"]');
      element.selectByVisibleText('All');
    });

     it('should fill a Group description field', () => {
       const element = $('//input[@name="description"]');
       element.setValue('This group is for the best QA engineers');
     });

       it('should choose click button', () => {
         const element = $('//button[@class="btn btn-primary"]');
         element.click();
         browser.pause(5000);
       });

       it('should first item in list be equal created group name', () => {
         const actual = $('//div[@qa="group-list"]//h4/a').getText();
         const expected = 'QA35';
         expect(actual).equal(expected);
       });

});