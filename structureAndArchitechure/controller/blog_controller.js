const Blog = require('../models/blog_model');
const {createBlogSchema} = require('../validations/blog.validation');
const  createBlog = async (req, res) => {
  try {
    // create blog controller
    const value = await createBlogSchema.body.validateAsync(req.body);
    await Blog.create(value);
    res.send({success: true, message: 'blog created'});
  } catch (error) {
    res.send({error: true, message: error.details})
  }
};

const  getBlog = async (req, res) => {
  try {
    // get blog controller
    const blogs = await Blog.find({});
    res.send({blogs});
  } catch (error) {
    res.send({error: true, message: error.message})
  }
};

module.exports = {
  createBlog,
  getBlog,
}