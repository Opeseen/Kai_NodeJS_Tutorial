const Blog = require('../models/blog_model');
const catchAsyncError = require('../utils/catchAsyncError');

const createBlog = catchAsyncError(async(req,res) => {
  await Blog.createe(req.body);
  res.send({success: true, message: 'blog created successfully'});
});

const getBlog = catchAsyncError(async(req,res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

module.exports = {
  createBlog,
  getBlog,
}