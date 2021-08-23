const
    { ConsoleReporter } = require('@serenity-js/console-reporter'),
    { ArtifactArchiver } = require('@serenity-js/core'),
    { Photographer, TakePhotosOfInteractions,TakePhotosOfFailures } = require('@serenity-js/protractor'),
    { SerenityBDDReporter } = require('@serenity-js/serenity-bdd'),
    isCI = require('is-ci');

exports.config = {


    chromeDriver: require(`chromedriver/lib/chromedriver`).path,

    SELENIUM_PROMISE_MANAGER: false,

    directConnect: false,

    allScriptsTimeout: 110000,

    framework:      'custom',
    frameworkPath:  require.resolve('@serenity-js/protractor/adapter'),

    specs: [ 'features/*.feature', ],

    serenity: {
        runner: 'cucumber',
        crew: [
            // Learn more at https://serenity-js.org/handbook/reporting/index.html
            ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
            ConsoleReporter.forDarkTerminals(),
            Photographer.whoWill(TakePhotosOfInteractions),     // slower execution, more comprehensive reports
            // Photographer.whoWill(TakePhotosOfFailures),      // fast execution, screenshots only when tests fail
            new SerenityBDDReporter(),
        ]
    },    
    cucumberOpts: {
        format: [
            'usage',                // or 'usage:usage.txt' to print to file
            'html:cucumber.html',
            'snippets:snippets.txt',
            'summary:summary.txt',
        ],
        require: [
            'features/step_definitions/*.ts',    // or *.js
            'features/support/.serenity.ts',

        ],
        'require-module': ['ts-node/register'],     // to add support for TypeScript
        tags:    ['@test'],
        strict:  false,
    },

    onPrepare: function() {
        browser.waitForAngularEnabled(false);
       
        browser.manage().timeouts().implicitlyWait(10000)
    },

    capabilities: {
        browserName: 'chrome',

        loggingPrefs: {
            browser: 'SEVERE' // "OFF", "SEVERE", "WARNING", "INFO", "CONFIG", "FINE", "FINER", "FINEST", "ALL".
        },

        chromeOptions: {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--disable-dev-shm-usage',
                '--disable-extensions',
                '--log-level=3',
                '--disable-gpu',
                '--window-size=1920,1080',
               // '--headless'
            ].concat(isCI ? ['--headless'] : [])    // run in headless mode on the CI server
        }
    }

    // ... other Protractor config omitted for brevity 
};