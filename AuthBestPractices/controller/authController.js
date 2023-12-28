const catchAsyncError = require('../utils/catchAsyncError');
const httpStatus = require('http-status');
const {userService, tokenService, authService} = require('../services');

const registerUser = catchAsyncError(async(req,res) => {
  // Create a new User.
  const user = await userService.createUser(req.body);

  // Generate token for the User.
  const token = await tokenService.generateAuthToken(user.id);
  res.status(httpStatus.CREATED).send({user, token});

});

const login = catchAsyncError(async(req,res) => {
  const {email, password} = req.body;
  const user = await authService.login(email, password);
  const token = await tokenService.generateAuthToken(user.id);
  res.status(httpStatus.OK).send({user,token});

});

const refreshToken = catchAsyncError(async(req,res) => {
  const token = await authService.refreshAuthToken(req.body.refreshToken);
  res.status(httpStatus.OK).send({ ...token });

});

module.exports = {
  registerUser,
  login,
  refreshToken,
};