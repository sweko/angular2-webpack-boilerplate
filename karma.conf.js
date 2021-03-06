/**
 * Please see Karma config file reference for better understanding:
 * http://karma-runner.github.io/latest/config/configuration-file.html
 */
module.exports = function(config) {
    config.set({
        /**
         * This path will be used for resolving.
         */
        basePath: '',

        /**
         * List of test frameworks we will use. Most of them are provided by separate packages (adapters).
         * You can find them on npmjs.org: https://npmjs.org/browse/keyword/karma-adapter
         */
        frameworks: ['jasmine', 'source-map-support'],

        /**
         * Entry point / test environment builder is also written in TypeScript.
         */
        files: ['./karma.entry.ts'],

        /**
         * Transform files before loading them.
         */
        preprocessors: {
            './karma.entry.ts': ['webpack']
        },

        webpack: require('./webpack.config.test'),

        /**
         * Make dev server silent.
         */
        webpackServer: { noInfo: true },

        /**
         * A lot of plugins are available for test results reporting.
         * You can find them here: https://npmjs.org/browse/keyword/karma-reporter
         */
        reporters: ['mocha', 'coverage'],

        /**
         * This JSON file is "intermediate", in post-test script we use remap-istanbul to map back to TypeScript
         * and then generate coverage report.
         */
        coverageReporter: {
            dir: 'coverage',
            reporters: [
                {
                    type: 'json',
                    subdir: '.',
                    file: 'coverage.json'
                }
            ]
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,

        /**
         * Only Phantom is used in this example.
         * You can find more browser launchers here: https://npmjs.org/browse/keyword/karma-launcher
         */
        browsers: ['PhantomJS'],

        /**
         * This is CI mode: run once and exit.
         * TODO: Non-CI mode
         */
        autoWatch: true,
        singleRun: true
    })
};
