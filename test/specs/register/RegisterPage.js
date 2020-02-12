import Page from '../Page';

class RegisterPage extends Page {

  open() {
    super.open('https://stage.pasv.us/user/register');
  }

  get h1 () {
    return $('//h1[contains(text(),"User Register")]');
  }

  get description () {
    return $('p');
  }

  get firstName () {
    return $('form input[name="firstName"]');
  }

  get lastName () {
    return $('form input[name="lastName"]');
  }

  get phone () {
    return $('form input[name="phone"]');
  }

  get email () {
    return $('form input[name="email"]');
  }

  get password () {
    return $('form input[name="password"]');
  }

  get about () {
    return $('form textarea[name="about"]');
  }
  get goals () {
    return $('form textarea[name="goals"]');
  }

  get englishLevel () {
    return $('form select[name="englishLevel"]');
  }

  get submitButton () {
    return $('form button[type="submit"]');
  }

}
export default new RegisterPage();

/*template
 get  () {
    return $();
    }
*/