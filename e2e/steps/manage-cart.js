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

  this.Given(/^I have (.{1,2}) (.+) in my cart$/, function (quantity, productname, callback) {
    utils.bootstrap();

    var product = home.getProduct(productname);
    var number = quantity - 1;


    product.quantityOptions.get(number).click();
    product.addToCartButton.click();

    callback();
  });

  this.When(/^I increase the quantity with (.+)/, function (quantity, productname, callback) {
    cart.increaseProductQuantity(quantity);

    callback();
  });

  this.Then(/^my cart should contain (.{1,2}) (.+) trainings/, function (quantity, productname, callback) {
    utils.goToCart();

    var product = cart.getProduct(0);

    expect(product.name.getText()).to.eventually.equals(productname);
    expect(product.quantity.getText()).to.eventually.contains(quantity).and.notify(callback);
  });

  /**
   * Scenario: decrease the product quantity
   */

  this.Given(/^I have (.{1,2}) (.+) in my cart$/, function (callback) {
    utils.bootstrap();

    callback();
  });

  this.When(/^I decrease the quantity with (.+)/, function (quantity, productname, callback) {
    var product = home.getProduct(productname);
    var number = quantity - 1;

    product.quantityOptions.get(number).click();
    product.addToCartButton.click();

    callback();
  });

  this.Then(/^my cart should contain (.{1,2}) (.+) trainings/, function (quantity, callback) {
    expect(home.$cartSummaryProductCount.getText()).to.eventually.equal(quantity).and.notify(callback);
  });

  /**
   * Scenario: the product total price is adjusted to the product quantity
   */

  this.Given(/^I have (.{1,2}) (.+) trainings in my cart$/, function (callback) {
    utils.bootstrap();

    callback();
  });

  this.When(/^I increase the the quantity with (.+)/, function (number, callback) {
    var product = home.getProduct(productname);
    var number = quantity - 1;

    product.quantityOptions.get(number).click();
    product.addToCartButton.click();

    callback();
  });

  this.Then(/^the total price for the (.+) trainings should be (.+)/, function (productname, price, callback) {
    expect(home.$cartSummaryProductCount.getText()).to.eventually.equal(quantity).and.notify(callback);
  });

  /**
   * Scenario: remove product from shopping cart
   */

  this.Given(/^I have (.+) and (.+) trainings in my cart$/, function (productnameA, productnameB, callback) {
    utils.bootstrap();

    callback();
  });

  this.When(/^I remove the (.+) training from my cart/, function (productname, callback) {
    var product = home.getProduct(productname);
    var number = quantity - 1;

    product.quantityOptions.get(number).click();
    product.addToCartButton.click();

    callback();
  });

  this.Then(/^my cart should only contain the (.+) training/, function (productname, callback) {
    expect(home.$cartSummaryProductCount.getText()).to.eventually.equal(quantity).and.notify(callback);
  });

  /**
   *   Scenario: the shopping cart total price is adjusted when removing products from cart
   */

  this.Given(/^I have (.+) and (.+) and (.+) trainings in my cart$/, function (productnameA, productnameB, productnameC, callback) {
    utils.bootstrap();

    callback();
  });

  this.When(/^I remove the (.+) training from my cart/, function (productname, callback) {
    var product = home.getProduct(productname);
    var number = quantity - 1;

    product.quantityOptions.get(number).click();
    product.addToCartButton.click();

    callback();
  });

  this.Then(/^the total price for my shopping cart should be (.+)/, function (price, callback) {
    expect(home.$cartSummaryProductCount.getText()).to.eventually.equal(quantity).and.notify(callback);
  });

};