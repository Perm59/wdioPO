import Page from './Page';


class LLoginPage extends Page {

  //email = $('//input[@name="email"]'); not working
  get email () {
    return $('//input[@name="email"]');
  }

  get password () {
    return $('//input[@name="password"]');
  }

  get submitBtn () {
    return $('//button[@type="submit"]');
  }

  get h1 () {
    return $('h1');
  }
  open() {
    super.open('https://stage.pasv.us/user/login');
  }

}
export default new LLoginPage();