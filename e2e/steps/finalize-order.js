var home = require('../pages/home'),
cart = require('../pages/shopping-cart'),
utils = require('../support/utility-functions'),
chai = require('chai'),
chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {

  /**
   * Scenario: notification that the order is finalized
   */

  this.Given(/^I have added (.{1,2}) (.+) to my cart$/, function (quantity, productname, callback) {
    utils.bootstrap();

    var product = home.getProduct(productname);
    var number = quantity - 1;

    product.quantityOptions.get(number).click();
    product.addToCartButton.click();

    callback();
  });

  this.When(/^I click the finalize button$/, function (callback) {
    utils.goToCart();

    cart.$finalizeButton.click();

    callback();
  });

  this.Then(/^I should receive a notification that my order is finalized$/, function (callback) {
    expect(cart.$orderPlacedAlert.isDisplayed()).to.eventually.equal(true).and.notify(callback);
  });

  /**
   * Scenario: after finalizing the order the cart should go back to its default state
   */

  this.Given(/^I have added (.{1,2}) (.+) to my cart$/, function (quantity, productname, callback) {
    utils.bootstrap();

    var product = home.getProduct(productname);
    var number = quantity - 1;

    product.quantityOptions.get(number).click();
    product.addToCartButton.click();

    callback();
  });

  this.When(/^I click the finalize button$/, function (callback) {
    utils.goToCart();

    cart.$finalizeButton.click();

    callback();
  });

  this.Then(/^my cart should return to its default state$/, function (callback) {
    expect(home.$cartSummaryTotalPrice.getText()).to.eventually.equal('€ 0.00').and.notify(callback);
  });

  /**
   * Scenario: after finalizing the order the cart should go back to its default state
   */

  this.Given(/^I have no products added to my shopping cart$/, function (callback) {
    utils.bootstrap();

    callback();
  });

  this.When(/^I go to the shopping cart$/, function (callback) {
    utils.goToCart();

    callback();
  });

  this.Then(/^I should receive a notification that my cart is empty$/, function (callback) {
    expect(cart.$cartEmptyAlert.isDisplayed()).to.eventually.equal(true).and.notify(callback);
  });

  /**
   * Scenario: disable finalize button when cart is empty
   */

  this.Given(/^I have no products added to my shopping cart$/, function (callback) {
    utils.bootstrap();

    callback();
  });

  this.When(/^I go to the shopping cart$/, function (callback) {
    utils.goToCart();

    callback();
  });

  this.Then(/^the finalize button should not be displayed$/, function (callback) {
    expect(cart.$finalizeButton.isPresent()).to.eventually.equal(false).and.notify(callback);
  });
};
