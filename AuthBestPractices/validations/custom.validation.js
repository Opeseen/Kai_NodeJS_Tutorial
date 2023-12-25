const validation = require('validator');

const password = (value, helpers) => {
  if(!validation.isStrongPassword(value)){
    return helpers.message("Password should be at least 8 character with at least one uppercase, lowercase, number and special character");
  };
  return value;
};

module.exports = {
  password,
};