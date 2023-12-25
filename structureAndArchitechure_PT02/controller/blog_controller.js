const Blog = require('../models/blog_model');
const catchAsyncError = require('../utils/catchAsyncError');
const {blogService} = require('../services')
const httpStatus = require('http-status');

const createBlog = catchAsyncError(async(req,res) => {
  await blogService.createBlog(req.body);
  res.status(httpStatus.CREATED).send({success: true, message: 'blog created successfully'});
});

const getBlog = catchAsyncError(async(req,res) => {
  const blogs = await blogService.getBlog();
  res.status(httpStatus.OK).json(blogs);
});

module.exports = {
  createBlog,
  getBlog,
}