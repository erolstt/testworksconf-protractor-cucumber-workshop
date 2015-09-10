moment = require('moment');

module.exports = {
  baseUrl: 'http://localhost:9000/#',
  bootstrap: function (url) {
    browser.get(url);
    browser.executeScript('window.localStorage.clear();');
    browser.waitForAngular();
  }
};
