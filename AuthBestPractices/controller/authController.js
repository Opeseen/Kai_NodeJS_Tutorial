const catchAsyncError = require('../utils/catchAsyncError');
const httpStatus = require('http-status');
const {userService} = require('../services');

const registerUser = catchAsyncError(async(req,res) => {
  // Create a new User.
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send({user});

});

module.exports = {
  registerUser,
};