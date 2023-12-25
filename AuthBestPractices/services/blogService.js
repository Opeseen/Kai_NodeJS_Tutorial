const {Blog} = require('../models/');

const createBlog = async(blogDetails) => {
  await Blog.create(blogDetails);
};

const getBlog = async() => {
  const blogs = await Blog.find({});
  return blogs;
};

module.exports = {
  createBlog,
  getBlog,
}