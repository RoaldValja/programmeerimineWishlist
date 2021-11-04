const express = require('express');
const wishController = require('../controllers/errorController');
const router = express.Router();

router.get('*', wishController.getErrorPage);

module.exports = router;