/*
f5 Testing Plan
1. Verify that open all menu and sub-menu items are clickable and lead to the correct pages (headers should be checked).
2. Verify that all  buttons on the home page are clickable and lead to the sign up page: button `Learn more`, button `Explore customer stories`.
3. Verify that language version control menu button works properly and leads to the correspondent site language version (url should be checked).
4. Verify that Search button open search dialog.
5. Verify that `Contact F5 now` button is clickable and redirect to page with `Contact F5 Sales` button, which redirect to fill in form. Try some scenarios of filling the form, including negative (`submit` button should NOT be clicked with proper data enterred).
6. Verify that `Get a free trail` button is clickable and redirect to correct page.
7. Verify that `Find now` button is clickable and redirect to correct page.
8. Verify that all links in the site footer are clickable and return status `200` in http response (should be tested by using loop and Get API requests).
 */

const {expect} = require('chai');

describe('', () => {
  before('go to f5.com', () => {
    browser.url('https://www.f5.com/')
  });

  it("should have correct title F5 Networks...", () => {
    const element = $('//title[contains(text(),"F5 Networks | Secure application delivery")]').getTitle();
    expect(element).equal('F5 Networks | Secure application delivery');
  });

  it('should click on meta menu elements', () => {
    const metaMenu = $$('//ul[@class="meta-row piped pull-right list-unstyled"]//li');
    for ( let  i = 0; i < metaMenu.length; i++ ) {
      let actual = metaMenu[i].isClickable();
      expect(actual).true;
    }
  });

  it('should click on header menu elements', () => {
    const headerRoom = $$('//ul[@class="main-nav list-unstyled"]//li');
    for ( let  i = 0; i < headerRoom.length; i++ ) {
    let actual = headerRoom[i].isClickable();
    expect(actual).true;
    }
  });

  it('should click search button', () => {
    $('//a[@class="utility-nav__link search-link currentURL"]').click();
    browser.pause(3000);
    $('//input[@placeholder="Search"]').setValue('Technology');
    $('//a[@class="u03-global-search__search-clear currentURL"]').click();
    browser.pause(3000);
    $('//img[@class="utility-nav__link close-search"]').click();
    browser.pause(2000);
  });
/*
  it('should language button works properly', () => {
    //li[@class='utility-nav__item language-select language-select--desktop']
  });


 /*
  it('should click on first page', () => {
    //$('//span[@class="swiper-pagination-bullet btn swiper-pagination-bullet-active"]').click();
    browser.pause(3000);
    //const selector = '//div[contains(@class, \'swiper-slide-active\')]';
    const selectorSwipe = '//div[@class=\'c23-centered-cta-banner swiper-slide swiper-slide-duplicate-active js-inview\']';
    const elementSwipe = $(selectorSwipe);
    browser.swipe(selectorSwipe, 300, 0, 2);
    //div[@class='c23-centered-cta-banner swiper-slide swiper-slide-active js-inview']//div[@id='platter-1935524624']
    // //*[@id="body"]/div[1]/div/div[2]/div/div[1]/div/div[1]/div/div[2]
  });
*/
});