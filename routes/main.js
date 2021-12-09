const express = require('express');
const wishController = require('../controllers/mainController');
const router = express.Router();
const path = require('path');
const multer = require('multer');


let upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) =>{
            cb(null, './images');
        },
        filename: function(req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        }
    })
});

router.get('/', wishController.getHomePage);

router.get('/admin', wishController.getAdminPage);

router.get('/random', wishController.getRandomWish);

router.post('/', upload.single('userFile'), wishController.postNewWish);

router.post('/delete', wishController.postDeleteWish);

module.exports = router;