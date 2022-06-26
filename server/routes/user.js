const router = require('express').Router();
const controller = require('./../controller/login');

// GET /items Router와 Controller를 연결합니다.
router.post('/login', controller.login);

module.exports = router;