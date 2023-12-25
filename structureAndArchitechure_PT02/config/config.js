require('dotenv').config();
const schemaValidator = require('../validations/env.validators');
const logger = require('./logger');

// Using JavaScript object destructuring to get variables
const {value: envVars, error} = schemaValidator.validate(process.env);
if (error){
  logger.error(error);
};

module.exports = {
  port: envVars.PORT,
  dbConnection: envVars.DB_CONNECTION,
  env: envVars.NODE_ENV,
};

