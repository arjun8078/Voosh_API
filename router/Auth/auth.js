const express = require('express');
const router = express.Router();

const authController = require('../../controller/Auth/auth');

router.post('', authController.login);

router.post('/signup', authController.signup);

module.exports = router;