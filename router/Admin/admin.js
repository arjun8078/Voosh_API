const express = require('express');
const router = express.Router();

const isAdmin= require('../../middleware/isAdmin');

const adminController = require('../../controller/Admin/admin');

router.get('',isAdmin, adminController.getAllUsers);

module.exports = router;