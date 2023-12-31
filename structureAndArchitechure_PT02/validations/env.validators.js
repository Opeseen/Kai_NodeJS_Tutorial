const joi = require('joi');

// Define schema for data validation
const schemaValidator = joi.object({
  DB_CONNECTION: joi.string().required(),
  PORT: joi.number().positive().default(3000),
})
.unknown();

module.exports = schemaValidator;