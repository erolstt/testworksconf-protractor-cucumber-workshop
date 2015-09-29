var home = require('../pages/home'),
    cart = require('../pages/shopping-cart'),
    utils = require('../support/utility-functions'),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {

  /**
   * Scenario: the cart summary should show the cumulative amount of the equal products in my shopping cart
   */

  this.Given(/^I have an empty shopping cart$/, function (callback) {
    utils.bootstrap();

    callback();
  });

  this.When(/^I add (.{1,2}) (.+) trainings to my cart$/, function (quantity, productname, callback) {
    var product = home.getProduct(productname);
    var number = quantity - 1;

    product.quantityOptions.get(number).click();
    product.addToCartButton.click();

    callback();
  });

  this.Then(/^the cart summery should show (.+) products$/, function (quantity, callback) {
    expect(home.$cartSummaryProductCount.getText()).to.eventually.equal(quantity).and.notify(callback);
  });

  /**
   * Scenario: the cart summary should show the cumulative amount of the different products in my shopping cart
   */



  /**
   * Scenario: the cart summary should show the cumulative price of the equal products in my shopping cart
   */



  /**
   * Scenario: the cart summary should show the cumulative price of the different products in my shopping cart
   */



  /**
   * Scenario: the cart summery should show updated values after I remove products from my shopping cart
   */



};
