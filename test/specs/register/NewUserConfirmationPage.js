import Page from '../Page';

class NewUserConfirmationPage extends Page {
  get h1 () {
    return $('h1');
  }

  get notification () {
    return $('h4*=Auth');
  }
}
export default new NewUserConfirmationPage();