const { URL_LOGIN, pageLoginSelectors, logoutSelectors } = require('./data');


function loginAsAdmin() {
  browser.url(URL_LOGIN);
  $(pageLoginSelectors.emailInput).setValue('lutka@yahoo.com');
  $(pageLoginSelectors.passwordInput).setValue('lutka');
  $(pageLoginSelectors.loginButton).click();
}

function logout() {
  $(logoutSelectors.logoutDropdownLink).click();
  $(logoutSelectors.logoutDropdownButton).click();

}

module.exports  = { loginAsAdmin, logout};