var home = require('../pages/home'),
cart = require('../pages/shopping-cart'),
utils = require('../support/utility-functions'),
chai = require('chai'),
chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {

  /**
   * Scenario: increase the product quantity
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

};
