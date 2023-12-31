const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');
const config = require('../config/config');
const {tokenTypes} = require('../config/token');
const {Token} = require('../models');

// Function to generate Token
const generateToken = (userId, expires, type, secrets=config.jwt.secret) => {
    const payload = {
        sub: userId,
        issuedAt: dayjs().unix(),
        expires: expires.unix(),
        type,
    };

    return jwt.sign(payload,secrets);
};

// Save the user refresh token into the database.
const saveToken = async(token, userId, expires, type, blacklisted=false) => {
    const tokenDoc = await Token.create({
        token,
        user: userId,
        expires: expires.toDate(),
        type,
        blacklisted,
    });

    return tokenDoc;
};

const verifyToken = async (token, type) =>{
    const payload = jwt.verify(token, config.jwt.secret);
    const TokenDoc = await Token.findOne({token, user: payload.sub, type, blacklisted: false});
    if(!TokenDoc){
        throw new Error("Token not Found");
    };
    return TokenDoc;
};

// Function to generate Authentication Token
const generateAuthToken = async(userId) =>{
    const accessTokenExpires = dayjs().add(config.jwt.accessExpirationMinutes, 'minute');
    const accessToken = generateToken(userId,accessTokenExpires,tokenTypes.ACCESS);
    const refreshTokenExpires = dayjs().add(config.jwt.refreshExpirationMinutes, 'days');
    const refreshToken = generateToken(userId,refreshTokenExpires,tokenTypes.REFRESH);
    await saveToken(refreshToken,userId,refreshTokenExpires,tokenTypes.REFRESH);

    // Return access and refresh token to the user upon request
    return  {
        access:{
            token: accessToken,
            expires: accessTokenExpires.toDate()
        },
        refresh:{
            token: refreshToken,
            expires: refreshTokenExpires.toDate()
        }
    }
};

module.exports = {
    generateToken,
    generateAuthToken,
    verifyToken,
    saveToken,
};