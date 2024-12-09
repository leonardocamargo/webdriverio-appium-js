const path = require('path');

exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'test',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'test',
    hostname: 'hub.browserstack.com',
    services: [
        [
          'browserstack',
          {
            app: 'bs',
            //app: process.env.URL (dev pipe will call
            //BROWSERSTACK API and then pass the return as a parameter)
            browserstackLocal: false
          },
        ]
      ],
      capabilities: [
        {
            'appium:settings[snapshotMaxDepth]': 62,
            'appium:autoAcceptAlerts': true,
            'bstack:options': {
                deviceName: 'iPhone 15 Pro Max',
                platformVersion: '17.5',
                platformName: 'ios',
                projectName: 'Automation',
                buildName: 'browserstack'
            }
        }
    ],
    commonCapabilities: {
        'bstack:options': {
            debug: true,
            autoDismissAlerts: true,
            networkLogs: true
        }
    },
    enableVideoRecording: true,

    specs: [
        './test/specs/login.spec.js',
        './test/specs/signup.spec.js'
    ],
    exclude: [],
    maxInstances: 1, // Ensure that each test is executed in a single instance
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 300000
    },
};
