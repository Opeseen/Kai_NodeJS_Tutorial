const express = require('express');
const router = express.Router();
const {userValidation, authValidation} = require('../validations');
const validate = require('../middlewares/validate');
const {authController} = require('../controller');

router.post('/auth/register',validate(userValidation.createUserSchema),authController.registerUser);

router.post('/auth/login',validate(authValidation.loginSchema),authController.login);

module.exports = router;