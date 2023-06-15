// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// import { generateRandomSSNumber } from "../../Integration/Utils/utils";
// import { generateRandomSSNumber } from '../Integration/Utils/utils';

// Alternatively you can use CommonJS syntax:
// require('./commands')
///import 'cypress-mochawesome-reporter/register';

require('cypress-xpath');
// cypress/support/index.js
Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent Cypress from failing the test on uncaught exceptions
    return false;
  });
  
// before(function() {
//     cy.fixture(Cypress.env('fixtureFile')).then(function(testdata) {
//       this.testdata = testdata
//     })
//   })
// beforeEach(function() {
//     cy.fixture('testdata').then((data) => {
//       this.data = data;
//       this.data.CreateEmployeeBody.ssNumber = generateRandomSSNumber();
//     });
//   });