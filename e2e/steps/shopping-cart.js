var home = require('../pages/home'),
page = require('../pages/shopping-cart'),
utils = require('../support/utility-functions'),
chai = require('chai'),
chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {
  this.Given(/^I added 3 products to my shopping cart$/, function (callback) {
    utils.bootstrap();

    home.addProductToCart(0);
    home.addProductToCart(1);
    home.addProductToCart(2);

    callback();
  });

  this.Given(/^I added 2 products to my shopping cart$/, function (callback) {
    utils.bootstrap();

    home.addProductToCart(0);
    home.addProductToCart(1);

    callback();
  });

  this.When(/^I remove the first 2 products from my shopping cart/, function (callback) {
    utils.goToCart();

    page.removeProductFromCart(0);
    page.removeProductFromCart(0);

    callback();
  });

  this.When(/^I increase the quantity of the second product to 3/, function (callback) {
    utils.goToCart();

    page.increaseProductQuantity(2);

    callback();
  });

  this.Then(/^all chosen products are removed from my shopping cart/, function (callback) {
    expect(page.$cartProducts.count()).to.eventually.equal(1).and.notify(callback);
  });

  this.Then(/^I should see the product's total price of "([^"]*)"/, function (price, callback) {
    expect(page.$cartProductTotalPrice.getText()).to.eventually.equal(price).and.notify(callback);
  });

  this.Then(/^I should see the cart's total price of "([^"]*)"/, function (price, callback) {
    expect(page.$cartTotalPrice.getText()).to.eventually.equal(price).and.notify(callback);
  });
};
