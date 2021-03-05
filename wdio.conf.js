// var zal = require('./functions/zalenium.js');

// var logout = require('./functions/logout.js');
// var bypass = require('./functions/bypass.js');
var helper = require('./functions/helpers.js');
// var login = require('./layout/loginPage.js');
// var nav = require('./layout/navElements.js');
// var loginPOM = require('./layout/loginPage.js');

exports.config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  //
  // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
  // on a remote machine).
  runner: 'local',
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  //
  specs: [
    './test/question2/q2.js',
  ],
  suites: {
    accountPage: ['./test/accountPage/accountScreen.js'],
    
  },
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============

  maxInstances: 1,

  capabilities: [
    {      
      browserName: 'firefox',
      // "moz:firefoxOptions": {
      //   // flag to activate Firefox headless mode 
      //   args: ['-headless']
      // },      
    },
    // {
    //   browserName: 'chrome',
    // //  'goog:chromeOptions': {
    // //    // flag to activate Chrome headless mode 
    // //    args: ['--headless', '--disable-gpu'],
    // //  },
    // //   acceptInsecureCerts: true,
    // },
  ],

  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'info',

  bail: 0,

  baseUrl: 'https://www.seleniumeasy.com/test/',
  // Default timeout for all waitFor* commands.
  waitforTimeout: 240000,
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 240000,
  // Default request retries count
  connectionRetryCount: 3,

  services: [
    [
      'selenium-standalone',
      {
        logPath: 'logs'
      },
    ],
  ],

  framework: 'mocha',

  reporters: [
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 240000,
  },
  beforeSession: function (config, capabilities, specs) {
    //let testFileName = /[^/]*$/.exec(specs)[0];
    let brow = capabilities.browserName;

    //capabilities['zal:name'] = testFileName + ' - ' + brow;
  },

  beforeTest: function (test, context) {

    // browser.maximizeWindow();
    browser.setWindowSize(1920, 1080);
    browser.pause(1000);

    // const heading = $('h1');
    // heading.waitForExist(240000);

  },

  afterTest: function (test, context, { error, result, duration, passed, retries }) {

    // helper.addReportMessage('NOW RUNNING AFTERTEST FUNCTIONS');

  },

  after: function (test, capabilities, specs) {
    // let state = '';

    // if (test == 1) {
    //   // there has been an error
    //   state = 'false';
    // } else if (test == 0) {
    //   // there was no problem
    //   state = 'true';
    // } else {
    //   // something odd has happened.  Force the test to a 'failed' state
    //   state = 'false';
    // }

    // set the status flag
    //zal.setZaleniumResult(state);
  },

};
