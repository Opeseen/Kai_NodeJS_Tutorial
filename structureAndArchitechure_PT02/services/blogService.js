const Blog = require('../models/blog_model');

const createBlog = async(body) => {
  await Blog.create(body);
};

const getBlog = async() => {
  const blogs = await Blog.find({});
  return blogs;
};

module.exports = {
  createBlog,
  getBlog,
}