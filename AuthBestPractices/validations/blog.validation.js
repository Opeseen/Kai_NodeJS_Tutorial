const joi = require('joi');

// Request validation schema
const createBlogSchema = {
  body: joi.object().keys({
    title: joi.string().required().messages({"any.required": "title is required field"}),
    description: joi.string().required(),
  }),
};

module.exports = {
  createBlogSchema,
}