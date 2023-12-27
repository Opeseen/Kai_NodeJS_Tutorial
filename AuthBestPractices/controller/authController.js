const catchAsyncError = require('../utils/catchAsyncError');
const httpStatus = require('http-status');
const {userService, tokenService} = require('../services');

const registerUser = catchAsyncError(async(req,res) => {
  // Create a new User.
  const user = await userService.createUser(req.body);

  // Generate token for the User.
  const token = await tokenService.generateAuthToken(user._id);
  res.status(httpStatus.CREATED).send({user, token});

});

module.exports = {
  registerUser,
};