const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');
const config = require('../config/config');
const {tokenTypes} = require('../config/token');

const generateAuthToken = (userId) => {
    const payload = {
        sub: userId,
        issuedAt: dayjs().unix(),
        expires: dayjs().add(config.jwt.accessExpirationMinutes, 'minute').unix(),
        type: tokenTypes.ACCESS,
    };

    return jwt.sign(payload,config.jwt.secret);
};

module.exports = {
    generateAuthToken,
};