var page = require('../pages/home'),
utils = require('../support/utility-functions'),
chai = require('chai'),
chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {
  this.Given(/^I am ready to order products at the Xebia webshop$/, function (callback) {
    utils.bootstrap();
    callback();
  });

  this.When(/^I add a new product to my shopping cart/, function (callback) {
    page.addProductToCart(0);

    callback();
  });

  this.When(/^I add 3 different products to my shopping cart/, function (callback) {
    page.addProductToCart(0);
    page.addProductToCart(1);
    page.addProductToCart(2);

    callback();
  });

  this.When(/^I add the same product to my shopping cart twice/, function (callback) {
    page.addProductToCart(0);
    page.addProductToCart(0);

    callback();
  });

  this.Then(/^the cart summary should be displayed in the header/, function (callback) {
    expect(page.$cartSummary.isDisplayed()).to.eventually.equal(true).and.notify(callback);
  });

  this.Then(/^I should receive a notification/, function (callback) {
    expect(page.$productAddedAlert.isDisplayed()).to.eventually.equal(true).and.notify(callback);
  });

  this.Then(/^all chosen products are added to my shopping cart/, function (callback) {
    expect(page.$cartSummaryProductCount.getText()).to.eventually.equal('3').and.notify(callback);
  });

  this.Then(/^I should get a total price of all added products/, function (callback) {
    expect(page.$cartSummaryTotalPrice.getText()).to.eventually.equal('€ 2,985.00').and.notify(callback);
  });

  this.Then(/^Only 1 of the product will be in my cart/, function (callback) {
    expect(page.$cartSummaryProductCount.getText()).to.eventually.equal('1').and.notify(callback);
  });
};
