import { expect } from 'chai';
import LoginPage from '../login/LoginPage';
import GroupsPage from './GroupsPage';
import CreateNewGroupPage from  './CreateNewGroup';

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
    GroupsPage.createNewGroupButton.click();
    browser.pause(2000);
  });

  // Create new Group page
  it('should have a correct heading', () => {
    const actual = CreateNewGroupPage.h1.getText();
    const expected = 'Create new Group';
    expect(actual).equal(expected);
  });

  it('should fill a Group name field', () => {
    CreateNewGroupPage.groupName.setValue('QA35');
  });

  it('should fill a Group description field', () => {
   CreateNewGroupPage.groupDescription.setValue('This group is for the best QA engineers');
  });

    it('should fill Access type field', () => {
      CreateNewGroupPage.accessType.selectByVisibleText('All');
    });

   it('should choose click button', () => {
         CreateNewGroupPage.createButton.click();
         browser.pause(3000);
       });

   it('should first item in list be equal created group name', () => {
     const actual = GroupsPage.firstItemInList.getText();
     const expected = 'QA35';
     expect(actual).equal(expected);
   });

});