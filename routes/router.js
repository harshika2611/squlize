const express = require('express');
const router = express.Router();
const studentRoute = require('../routes/studentRoute');

router.use('/student', studentRoute);

module.exports = router;
