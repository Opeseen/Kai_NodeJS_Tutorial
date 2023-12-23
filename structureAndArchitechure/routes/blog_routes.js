const express = require('express');
const router = express.Router();
const {createBlog, getBlog} = require('../controller/blog_controller');

router.get('/blog',getBlog);
router.post('/blog',createBlog);

module.exports = router;