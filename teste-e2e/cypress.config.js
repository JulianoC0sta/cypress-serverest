const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://front.serverest.dev/",
    failOnStatusCode: false,
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    pageLoadTimeout: 30000,
    video: true,
    specPattern: "cypress/e2e/**/*.{spec.js,cy.js}",
    supportFile: "cypress/support/e2e.js",

    env: {
      userEmail: process.env.USER_EMAIL,
      userPassword: process.env.USER_PASSWORD
    },
  },
});
