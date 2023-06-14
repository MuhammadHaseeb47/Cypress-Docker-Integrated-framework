const { defineConfig } = require("cypress");
const path = require('path');
const fs = require('fs');

function setupNodeEvents(on, config) {
  const file = config.env.fileConfig || 'uat';
  const pathToConfigFile = path.resolve(__dirname, 'cypress', 'environments', `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    throw new Error(`Config file not found: ${pathToConfigFile}`);
  }

  const configFileContent = fs.readFileSync(pathToConfigFile, 'utf8');
  const configData = JSON.parse(configFileContent);

  return configData;
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 80000,
  requestTimeout: 120000,
  responseTimeout: 120000,
  e2e: {
    setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin')(on);
      return setupNodeEvents(on, config);
    },
    specPattern: "cypress/e2e/**/*.js",
  },  

});