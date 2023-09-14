// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: "https://demowebshop.tricentis.com/",
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//     defaultCommandTimeout: 5000,
//   },
// });
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
