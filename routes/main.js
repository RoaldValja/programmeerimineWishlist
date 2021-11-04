const express = require('express');
const wishController = require('../controllers/mainController');
const router = express.Router();

router.get('/', wishController.getHomePage);

router.get('/admin', wishController.getAdminPage);

router.post('/', wishController.postNewWish);

router.post('/delete', wishController.postDeleteWish);

module.exports = router;