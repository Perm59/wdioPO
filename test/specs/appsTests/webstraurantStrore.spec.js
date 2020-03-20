const {expect} = require('chai');

describe('', () => {
  before('go to webstaurantstore.com', () => {
    browser.url('https://www.webstaurantstore.com/')
  });

  it("should have correct title WebstaurantStore", () => {
    const element = $('//title[contains(text(),"WebstaurantStore: Restaurant Supplies & Foodservic")]').getTitle();
    expect(element).equal('WebstaurantStore: Restaurant Supplies & Foodservice Equipment');
  });

  it('should type text to the field', () => {
    $('//input[@id="searchval"]').setValue('stainless work table');
  });

  it('should click Search button', () => {
    $('//button[@class="btn btn-info banner-search-btn"]').click();
    browser.pause(2000);
  });

  it('should find price of last item in the list', () => {
   // const lastPage = $('//div[@class="pagination pagination--unified centered"]//a[contains(text(),"9")]').click();
   // const lastItemPrice = $('//div[60]//p[@class="price"]').getText();
   const pages = $$('//div[@class="pagination pagination--unified centered"]//ul//li');
    const lastPage = pages[pages.length-2];
    const pageNumber = lastPage.getText();
    lastPage.click();
    browser.pause(3000);
    const lastProduct = $('//div[@id="product_listing"]/div[last()]');
    const lastProductPrice = lastProduct.$('.price').getText().slice(1,7);
    expect(lastProductPrice).equal('607.05');
  });


});

