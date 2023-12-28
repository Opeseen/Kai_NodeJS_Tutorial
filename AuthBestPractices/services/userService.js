const {User} = require('../models/');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const createUser = async(userDetails) => {
  // Check if email exists
  if(await User.isEmailTaken(userDetails.email)){
    throw new ApiError(httpStatus.BAD_REQUEST, "Email Adddress Is Already Taken");
  };
  const user = await User.create(userDetails);
  return user;
};


const getUserByEmail = async(email) => {
  return await User.findOne({email});
};


module.exports = {
  createUser,
  getUserByEmail
}