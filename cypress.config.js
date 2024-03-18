const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
      }),
      allureCypress(on, {
        resultsDir: "./test-results/allure-results"
      });
    },
  },
  "include": [
    "/node_modules/cypress",
    "cypress/**/*"
  ],
  "screenshotsFolder": "test-results/test-screenshots"
});
