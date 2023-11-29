const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: true,
  screenshotOnRunFailure: true,
  
  e2e: {
    testIsolation: false,
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});

//experimentalSessionAndOrigin: true,
//testIsolation: false /true,
