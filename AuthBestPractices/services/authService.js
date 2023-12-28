const userService = require('./userService');
const tokenService = require('./tokenService');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const {tokenTypes} = require('../config/token');

const login = async (email, password) => {
  const user = await userService.getUserByEmail(email);
  if (!user || !(await user.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
  };
  return user;
};

const refreshAuthToken = async(refreshToken) =>{
  try {
    const refreshTokenDoc = await tokenService.verifyToken(refreshToken, tokenTypes.REFRESH);

    const user = await userService.getUserById(refreshTokenDoc.user);
    if(!user){
      throw new Error("Something went wrong as user doesn't esists");
    }
    await refreshTokenDoc.remove();
    return tokenService.generateAuthToken(user.id);

  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Please Authenticate")
  }

};

module.exports = {
  login,
  refreshAuthToken,
};