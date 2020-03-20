const { expect } = require('chai');
const  axios  = require('axios');
/*Asana Testing Plan
1. Verify that open all menu and sub-menu items are clickable and lead to the correct pages (headers should be checked).
2. Verify that all `Try for free` buttons on the home page are clickable and lead to the sign up page.
3. Verify that language version control menu button works properly and leads to the correspondent site language version (url should be checked).
4. Verify that `Contact Sales` menu button is clickable, try some scenarios of filling the form, including negative (`submit` button should NOT be clicked with proper data enterred).
5. Verify that `Log in` menu button is clickable and `Log in` form in the modal window is opened as expected.
6.? Verify that chat button is clickable and chat modal window is opened as expected.
7. Verify that all links in the site footer are clickable and return status `200` in http response (should be tested by using loop and Get API requests).
*/

describe('TESTING ASANA PAGE' , () => {
  before( 'go to asana.com page', () => {
    browser.url('https://asana.com/');
    browser.maximizeWindow();
  });

  it('should have correct title', () => {
    const pageTitle = $('//title[contains(text(),"s work, projects, & tasks online")]').getTitle();
    expect(pageTitle).equal('Manage your team’s work, projects, & tasks online · Asana');
  });

  it('should asana logo be clikable', () => {
    const element = $('//a[@class="siteHeader__logo"]').isClickable();
    expect(element).true;
  });

  it('should check all menu items are clickable', () => {
    const headerItems = $$('//ul[@class="horizontalNavigation__list"]/li');
    for ( let i = 0; i < headerItems.length; i++ ) {
      const headerItem = headerItems[i].isClickable();
      expect(headerItem).true;
    }
  });

  it('should language menu button works properly (change to French)', () => {
    const languageButton = $('//label[@class="language-selector__dropdown-component dropdown-component"]');
    languageButton.click();
    $('//option[@value="fr"]').click();
    browser.waitUntil( () => $('//h1[@class="heading -h3"]').isDisplayed());
    const language = $('/html').getAttribute("lang");
    expect(language).equal('fr');
  });

  it('should language menu return to English language', () => {
    const languageButton = $('//label[@class="language-selector__dropdown-component dropdown-component"]');
    languageButton.click();
    $('//option[@value="en"]').click();
    browser.waitUntil( () => $('//h1[@class="heading -h3"]').isDisplayed());
    const language = $('/html').getAttribute("lang");
    expect(language).equal('en');
  });

  it('should `Contact Sales` menu item is clickable', () => {
    $('//a[@class="navigation__link navigation__contact-sales contact-sales"]').isClickable();
    browser.pause(3000);
    //browser.waitUntil( () => $('//h2[@id="header_1"]').isDisplayed());
  });

  it('should fill in `Log in` menu item', () => {
    $('//a[@class="navigation__link navigation__sign-in hidden-logged-in"]').click();
    browser.waitUntil(  () => $('//h3[contains(text(),"Log in")]').isDisplayed());
    const emailInput = $('//input[@id="login-email-modal-login"]').setValue('test@yahoo.com');
    const passwordInput = $('//input[@id="login-password-modal-login"]').setValue('TestPassword1');
    const loginButton = $('//input[@id="login-submit-modal-login"]');
    expect(loginButton.isClickable()).true;
    //click on X and go to main page
    $('//div[@id="login"]//a[@class="modal-close icon icon--x js-modal-close"]').click();
    browser.waitUntil( () => $('//h1[@class="heading -h3"]').isDisplayed());
  });

  it('should click`Try for free` header button', () => {
    $('//div[@class="siteHeader-buttons hidden-device-mobile"]').click();
    browser.waitUntil( () => $('//h4[@class="heading -h3 -spacing-2 js-try-headline"]').isDisplayed());
    const emailCompanyInput = $('//div[@class="signupForm-container"]//input[@placeholder="name@company.com"]').setValue('testcompany@yahoo.com');
    const tryForFreeButton = $('//button[@class="signupForm-submit submit -large signup-submit-"]').isClickable();
    expect(tryForFreeButton).true;
    // click on Logo and go to main page
    $('//div[@class="siteHeader__nav-group"]').click();
    browser.waitUntil( () => $('//h1[@class="heading -h3"]').isDisplayed());
  });


  let linkObjects = [];
  it('should create array of footer links', () => {
    browser.pause(5000);
    const footerLinks = $$('//li[@class="siteFooter-item"]//a');
    footerLinks.forEach(element=>{
      linkObjects.push({
        text: element.getText(),
        link: element.getAttribute("href")
      });
    })
    expect(linkObjects).to.not.be.empty;
  });

  it('should verify all footer links from DB', async () => {
    for(let i = 0; i < linkObjects.length; i++) {
      let linkObject = linkObjects[i];
      const response = await axios
          .get(linkObject.link)
          .then(res => {return {response: res, text: linkObject.text, link: linkObject.link};})
          .catch(err => err);
      console.log('++++++++++++++++++++++++++++++++++++++++++');
      console.log(response.text + " : " + response.link);
      console.log(response.response.status);
      expect(response.response.status).equal(200);
    }
  });


});
