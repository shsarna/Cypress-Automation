/// <reference types="cypress" />


/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

//for adding tags
// const selectTestWithTags = require('cypress-select-tests/grep')

//for cucumber integration
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  // on('file:preprocessor', selectTestWithTags(config)); //adding tags to test
  on('file:preprocessor', cucumber()) //for cypress cucumber
  
}
