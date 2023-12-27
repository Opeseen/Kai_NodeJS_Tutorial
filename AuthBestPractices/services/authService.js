const userService = require('./userService');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

const login = async (email, password) => {
  const user = await userService.getUserByEmail(email);
  if(!user || !(await user.isPasswordMatch(password))){
    throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect email of password provided");
  };
  return user;
};

module.exports = {
  login,
}