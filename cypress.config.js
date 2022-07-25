const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/*/*.js',
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 15000,
    env: {
      shoppingCart: 'https://react-shopping-cart-67954.firebaseapp.com/',
      demoqa: 'https://demoqa.com/frames'
    },
    reporter: 'mochawesome',
    // how many times it will run failed test before throw a failure
    retries: {
      runMode: 2
    }
  },
});
