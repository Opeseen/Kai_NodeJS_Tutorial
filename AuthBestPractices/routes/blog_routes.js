const express = require('express');
const router = express.Router();
const {blogValidation} = require('../validations');
const validate = require('../middlewares/validate');
const {blogController} = require('../controller');

router.get('/blog',blogController.getBlog);
router.post('/blog',validate(blogValidation.createBlogSchema),blogController.createBlog);

module.exports = router;