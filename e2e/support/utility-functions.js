module.exports = {
  baseUrl: 'http://localhost:9000/#',
  bootstrap: function () {
    browser.get(this.baseUrl);
    browser.executeScript('window.localStorage.clear();');
    browser.waitForAngular();
  }
};
