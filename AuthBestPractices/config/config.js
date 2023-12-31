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
  jwt: {
    secret:envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationMinutes: envVars.JWT_REFRESH_EXPIRATION_DAYS
  }
};

