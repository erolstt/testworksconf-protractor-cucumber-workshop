var page = require('../pages/home'),
utils = require('../support/utility-functions'),
chai = require('chai'),
chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {
  this.Given(/^"Jake" is on the home page$/, function (callback) {
    utils.bootstrap();
    callback();
  });

  this.Then(/^the cart summary should be displayed in the header/, function (callback) {
    expect(page.$cartSummary.isDisplayed()).to.eventually.equal(true).and.notify(callback);
  });
};
