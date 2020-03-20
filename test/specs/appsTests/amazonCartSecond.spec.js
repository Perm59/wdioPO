const {expect} = require("chai");

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
    const price1 = browser.$('//div[@id="101_dealView_7"]//span[@class="a-size-medium inlineBlock unitLineHeight dealPriceText"]').getText();
    browser.$("//div[@id='101_dealView_7']//button").click();
    browser.pause(500)
    const price2 = browser.$('//div[@id="101_dealView_8"]//span[@class="a-size-medium inlineBlock unitLineHeight dealPriceText"]').getText();
    browser.$("//div[@id='101_dealView_8']//button").click();
    browser.pause(500)
    browser.$('//span[@id="nav-cart-count"]').click();
    browser.pause(2000);

    const price = [price2, price1]

     const shoppingPrices = browser.$$(`//span[@class="a-size-medium a-color-price sc-price sc-white-space-nowrap sc-product-price sc-price-sign a-text-bold"]`);
    for( let i = 0; i < shoppingPrices.length; i++){
      const shopPrice = shoppingPrices[i].getText();
      //to check if we got proce correctly
      console.log(price[i], shopPrice + "===============================================================================================================================================")
      expect(price[i]).eq(shopPrice)
    }
  })
})