const express = require('express');
const routes = express.Router();

const postController = require('../controllers/PostController')

routes.get('/api/posts', postController.getPosts)

module.exports = routes;