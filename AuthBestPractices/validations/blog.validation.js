const joi = require('joi');

// Request validation schema
const createBlogSchema = {
  body: joi.object().keys({
    title: joi.string().required(),
    description: joi.string().required(),
  }),
};

module.exports = {
  createBlogSchema,
}