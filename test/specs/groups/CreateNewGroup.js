import Page from '../Page';

class CreateNewGroupPage  extends Page {
  get h1 () {
    return $('h1');
  }

  get groupName () {
    return $('//input[@name="name"]');
  }

  get groupDescription () {
    return $('//input[@name="description"]');
  }

  get accessType () {
    return $('//select[@name="accessType"]');
  }

  get createButton () {
    return $('//button[@class="btn btn-primary"]');
  }
}
export default new CreateNewGroupPage();