const {expect} = require("chai");

describe('', () => {
  before('go to amazom.com', () => {
    browser.url('https://www.amazon.com/')
  });

    it('', () =>{
      expect(browser.getTitle()).eq("Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more")
    });

    it("", () =>{
      browser.$(`//a[text() = "Today's Deals"]`).click()
      browser.pause(3000)
    });

    it("", () =>{
      const price1 = browser.$('//div[@id="101_dealView_5"]//span[@class="a-size-medium inlineBlock unitLineHeight dealPriceText"]').getText();
      browser.$("//div[@id='101_dealView_5']//button").click();
      browser.pause(500);
      const price2 = browser.$('//div[@id="101_dealView_6"]//span[@class="a-size-medium inlineBlock unitLineHeight dealPriceText"]').getText();
      browser.$("//div[@id='101_dealView_6']//button").click();
      browser.pause(500);
      browser.$('//span[@id="nav-cart-count"]').click();
      browser.pause(2000);

      const prices = [];
      prices.push(price2);
      prices.push(price1);

      const shoppingPrices = browser.$$(`//span[@class="a-size-medium a-color-price sc-price sc-white-space-nowrap sc-product-price sc-price-sign a-text-bold"]`);
      for( let i = 0; i < shoppingPrices.length; i++){
        const shopPrice = shoppingPrices[i].getText();
        expect(prices[i]).eq(shopPrice);
      }
    });
});