const express = require('express');
const router = express.Router();

const isAdmin= require('../../middleware/isAdmin');

const userTypeController = require('../../controller/UserType/userType');

router.get('', isAdmin, userTypeController.getAllTypes); 

router.post('', isAdmin, userTypeController.addUserType);

router.put('/:id', isAdmin, userTypeController.updateUserType);

router.delete('/:id', isAdmin, userTypeController.deleteUserType);

module.exports = router;