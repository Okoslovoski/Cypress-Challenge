const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    video: false, // set true to debug or see test execution in Headless mode
    chromeWebSecurity: false,
    watchForFileChanges: false,
    blockHosts: ["https://events.backtrace.io"], // This will fix the 401 problems! remove if fixed in future versions of Cypress
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
