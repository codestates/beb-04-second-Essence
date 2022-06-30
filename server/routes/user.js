const router = require('express').Router();
const loginRouter = require('../controller/signup');

// GET /items Router와 Controller를 연결합니다.
router.use('/signup', loginRouter);

module.exports = router;