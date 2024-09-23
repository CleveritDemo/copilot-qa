const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'adoption-copilot',
  video: true,
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
  viewportWidth: 1520,
  viewportHeight: 880,
  chromeWebSecurity: false,
  numTestsKeptInMemory: 5,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'reports/mochawesome-report',
    overwrite: false,
    html: false,
    json: true,
    timestamp: 'mmddyyyy_HHMMss',
  },
  screenshotsFolder: 'reports/mochawesome-report/assets',
  env: {
    user: 'E010617',
    pass: '5rDXbnKL',
    entorno: 'qa',
  },
  amb: {
    qa: {
      baseUrl: 'https://www.google.com',
    },
  },
e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    // async setupNodeEvents(on, config) {
    //   const bundler = createBundler({
    //     plugins: [createEsbuildPlugin(config)],
    //   });
    //   on("file:preprocessor", bundler);
    //   await addCucumberPreprocessorPlugin(on, config);

     // return config;
    setupNodeEvents(on, config) {
     return require('./cypress/plugins/index.js')(on, config)
    },
    //excludeSpecPattern: '*.js',
    specPattern: 'cypress/e2e/**/*.{feature,features}',
  },
})
