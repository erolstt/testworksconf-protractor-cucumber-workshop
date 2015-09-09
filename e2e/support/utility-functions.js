moment = require('moment');

module.exports = {
  baseUrl: 'http://localhost:900/#',
  bootstrap: function (url) {
    browser.get(url);
    browser.executeScript('window.localStorage.clear();');
    browser.waitForAngular();
  }
};
