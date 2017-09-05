// An example configuration file.
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the web-driver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['example_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000
  }
};
