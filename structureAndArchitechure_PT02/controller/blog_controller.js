const Blog = require('../models/blog_model');

const  createBlog = async (req, res) => {
  try {
    // create new blog controller
    await Blog.create(req.body);
    res.send({success: true, message: 'blog created'});
  } catch (error) {
    res.send({error: true, message: error.details})
  }
};

const  getBlog = async (req, res) => {
  try {
    // get all blog controller
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