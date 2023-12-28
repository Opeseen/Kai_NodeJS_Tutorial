const express = require('express');
const router = express.Router();
const {userValidation, authValidation} = require('../validations');
const validate = require('../middlewares/validate');
const {authController} = require('../controller');

router.post('/auth/register',validate(userValidation.createUserSchema),authController.registerUser);

router.post('/auth/login',validate(authValidation.loginSchema),authController.login);

router.post('/auth/refreshToken',validate(authValidation.refreshTokenSchema),authController.refreshToken);

module.exports = router;