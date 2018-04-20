//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:3001/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }

};