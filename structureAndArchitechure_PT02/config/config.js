require('dotenv').config();

const schemaValidator = require('../validations/env.validators');

// Using JavaScript object destructuring to get variables
const {value: envVars, error} = schemaValidator.validate(process.env);
if (error){
  console.log(error);
};

module.exports = {
  port: envVars.PORT,
  dbConnection: envVars.DB_CONNECTION,
  env: envVars.NODE_ENV,
};

