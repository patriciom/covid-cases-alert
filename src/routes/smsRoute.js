const express = require('express');
const router = express.Router();
const sendSMSController = require('../controllers/sendSMSController')

router.post('/', sendSMSController.sendSMS);

module.exports = router;