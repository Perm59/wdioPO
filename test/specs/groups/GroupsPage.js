import Page from '../Page';


class GroupsPage extends Page {
  get h1 () {
    return $('h1');
  }
}
export default new GroupsPage();