import Page from '../Page';


class LoginPage extends Page {

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

  login() {
    this.open();
    this.email.setValue('lutka@yahoo.com');
    this.password.setValue('lutka');
    this.submitBtn.click();
    browser.pause(3000);
  }

  open() {
    super.open('https://stage.pasv.us/user/login');
  }

}
export default new LoginPage();