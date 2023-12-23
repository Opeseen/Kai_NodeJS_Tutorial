const express = require('express');
const router = express.Router();
const {createBlogSchema} = require('../validations/blog.validation');
const validate = require('../middlewares/validate');
const {createBlog, getBlog} = require('../controller/blog_controller');

router.get('/blog',getBlog);
router.post('/blog',validate(createBlogSchema),createBlog);

module.exports = router;