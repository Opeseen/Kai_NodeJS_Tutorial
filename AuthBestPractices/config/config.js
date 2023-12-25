require('dotenv').config();
const {envValidation} = require('../validations');
const logger = require('./logger');

// Using JavaScript object destructuring to get variables
const {value: envVars, error} = envValidation.validate(process.env);
if (error){
  logger.error(error);
};

module.exports = {
  port: envVars.PORT,
  dbConnection: envVars.DB_CONNECTION,
  env: envVars.NODE_ENV,
};

