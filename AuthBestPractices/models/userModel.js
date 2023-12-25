const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowwercase: true,
      validate(value){
        if(!validator.isEmail(value)){
          throw new Error("Invalid Email Address");
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      validate(value){
        if(!validator.isStrongPassword(value)){
          throw new Error("Password should contain at least one uppercase and lowercase, number and special character");
        }
      }
    },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.isEmailTaken = async function(email){
  const user = await this.findOne({email});
  return !!user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;