const express = require('express');
const router = express.Router();
const usersRouter = require('./user');
const ethFacetRouter = require('../controller/ethFacet');
const minttokenRouter = require('../controller/token');
const commentRouter = require('../controller/comment');
const postRouter = require('../controller/post');
const loginRouter = require('../controller/login');

router.use('/user', usersRouter);
router.use('/eth', ethFacetRouter);
router.use('/token', minttokenRouter);
router.use('/comment', commentRouter);
router.use('/post', postRouter);
router.use('/login', loginRouter);

module.exports = router;