var home = require('../pages/home'),
    cart = require('../pages/shopping-cart'),
    utils = require('../support/utility-functions'),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {

  /**
   * Scenario: add a single product to an empty shopping cart
   */

  this.Given(/^I have no trainings added to my cart$/, function (callback) {
    utils.bootstrap();

    callback();
  });

  this.When(/^I add one (.+) training to my cart/, function (productname, callback) {
    var product = home.getProduct(productname);

    product.addToCartButton.click();

    callback();
  });

  this.Then(/^my cart should contain (.{1,2}) (.+) training/, function (quantity, productname, callback) {
    utils.goToCart();

    var prod = cart.getProduct(0);

    expect(prod.name.getText()).to.eventually.equals(productname);
    expect(prod.quantity.getText()).to.eventually.contains(quantity).and.notify(callback);
  });


  /**
   * Scenario: add multiple products to an empty shopping cart
   */

  this.Given(/^I have no trainings added to my cart$/, function (callback) {
    utils.bootstrap();

    callback();
  });

  this.When(/^I add (.{1,2}) (.+) trainings to my cart/, function (quantity, productname, callback) {
    var product = home.getProduct(productname);
    var number = quantity - 1;


    product.quantityOptions.get(number).click();
    product.addToCartButton.click();

    callback();
  });

  this.Then(/^my cart should contain (.{1,2}) (.+) trainings/, function (quantity, productname, callback) {
    utils.goToCart();

    var product = cart.getProduct(0);

    expect(product.name.getText()).to.eventually.equals(productname);
    expect(product.quantity.getText()).to.eventually.contains(quantity).and.notify(callback);
  });

  /**
   * Scenario: add different products to the shopping cart
   */

  this.Given(/^my cart contains (.{1,2}) (.+) trainings$/, function (quantity, productname, callback) {
    utils.bootstrap();

    var product = home.getProduct(productname);
    var number = quantity - 1;


    product.quantityOptions.get(number).click();
    product.addToCartButton.click();

    callback();
  });

  this.When(/^I add (.{1,2}) (.+) trainings to my cart/, function (quantity, productname, callback) {
    var product = home.getProduct(productname);
    var number = quantity - 1;

    product.quantityOptions.get(number).click();
    product.addToCartButton.click();

    callback();
  });

  this.Then(/^my cart should contain (.{1,2}) (.+) and (.{1,2}) (.+) trainings/, function (quantityA, productnameA, quantityB, productnameB, callback) {
    utils.goToCart();

    var productA = cart.getProduct(0);

    expect(productA.name.getText()).to.eventually.equals(productnameA);
    expect(productA.quantity.getText()).to.eventually.contains(quantityA).and.notify(callback);

    var productB = cart.getProduct(1);

    expect(productB.name.getText()).to.eventually.equals(productnameB);
    expect(productB.quantity.getText()).to.eventually.contains(quantityB).and.notify(callback);
  });

  /**
   * Scenario: it should not be possible to add the same quantity of a product twice
   */

  this.Given(/^my cart contains (.{1,2}) (.+) trainings$/, function (quantity, productname, callback) {
    utils.bootstrap();

    var product = home.getProduct(productname);
    var number = quantity - 1;


    product.quantityOptions.get(number).click();
    product.addToCartButton.click();

    callback();
  });

  this.When(/^I try to add (.{1,2}) (.+) trainings to the cart/, function (quantity, productname, callback) {
    var product = home.getProduct(productname);
    var number = quantity - 1;

    product.quantityOptions.get(number).click();
    product.addToCartButton.click();

    callback();
  });

  this.Then(/^the cart should still contain only (.{1,2}) (.+) trainings/, function (quantity, productname, callback) {
    utils.goToCart();

    var product = cart.getProduct(0);

    expect(product.name.getText()).to.eventually.equals(productname);
    expect(product.quantity.getText()).to.eventually.contains(quantity).and.notify(callback);
  });

  /**
   * Scenario: receive notification when adding product to cart
   */

  this.Given(/^I am on the home page$/, function (callback) {
    utils.bootstrap();

    callback();
  });

  this.When(/^I add a new training to to my cart/, function (callback) {
    home.addProductToCart(0);

    callback();
  });

  this.Then(/^I should receive a notification/, function (callback) {
    expect(home.$productAddedAlert.isDisplayed()).to.eventually.equal(true).and.notify(callback);
  });

};
