const {Strategy: JwtStrategy, ExtractJwt} = require('passport-jwt');
const config = require('./config');
const {tokenTypes} = require('./token');
const {userService} = require('../services');

const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {
  try {
    if(payload.type != tokenTypes.ACCESS){
      throw new Error ("Invalid Token Type");
    }
    const user = userService.getUserById(payload.sub);

    if(!user){
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }

};
const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
  jwtStrategy,
}