const express = require('express');
const router = express.Router();
const usersRouter = require('./user');
const ethFacetRouter = require('./ethFacet');

router.use('/user', usersRouter);
router.use('/eth', ethFacetRouter);

module.exports = router;