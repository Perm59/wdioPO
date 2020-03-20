const {expect} = require('chai');

describe('', () => {
  before('go to amazom.com', () => {
    browser.url('https://www.amazon.com/')
  })

    it('', () =>{
      expect(browser.getTitle()).eq("Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more")
    })

    it("", () =>{
      browser.$(`//a[text() = "Today's Deals"]`).click()
      browser.pause(3000)
    })
  it("", () =>{
    const price = browser.$('//div[@id="101_dealView_6"]//span[@class="a-size-medium inlineBlock unitLineHeight dealPriceText"]').getText();
    browser.$("//div[@id='101_dealView_6']//button").click();
    browser.pause(500)
    //click on Cart, redirected to shopping cart
    browser.$('//span[@id="nav-cart-count"]').click();
    browser.pause(2000);
    const itemShopping = browser.$('//div[@class="sc-list-item-content"]');
    const shoppingPrice = browser.$(`//span[@class="a-size-medium a-color-price sc-price sc-white-space-nowrap sc-product-price sc-price-sign a-text-bold"]`).getText();
    expect(price).eq(shoppingPrice)
  })

})