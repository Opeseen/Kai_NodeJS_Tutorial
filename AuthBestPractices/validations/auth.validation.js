const joi = require('joi');

// User Login Request validation schema
const loginSchema = {
  body: joi.object().keys({
    email: joi.string().email().required(),
    password: joi.string().required()
  }),
};

// User Refresh Token Request validation schema
const refreshTokenSchema = {
  body: joi.object().keys({
    refreshToken: joi.string().required()
  }),
};

module.exports = {
  loginSchema,
  refreshTokenSchema,
}