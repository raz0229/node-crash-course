const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.post('/blogs', controller.postBlog);

router.get('/blogs', controller.getBlog);

router.get('/create-blog', controller.createBlog);

module.exports = router;
