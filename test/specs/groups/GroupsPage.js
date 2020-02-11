import Page from '../Page';


class GroupsPage extends Page {
  get h1 () {
    return $('h1');
  }

  get createNewGroupButton () {
    return $('//a[@class="btn btn-secondary"]');
  }

  get firstItemInList () {
    return $('//div[@qa="group-list"]//h4/a');
  }
}
export default new GroupsPage();