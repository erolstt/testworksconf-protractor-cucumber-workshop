'use strict';

// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  chromeOnly: true,
  //rootElement: 'obt-app',
  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['e2e/features/**/*.feature'],
  framework: 'cucumber',
  // Options to be passed to CucumberJS
  cucumberOpts: {
    require: ['e2e/steps/**/*.js', 'e2e/support/*.js'],
    format: 'json'
  },
  singleRun: false
};
