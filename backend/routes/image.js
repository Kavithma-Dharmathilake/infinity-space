const express = require('express');
const { saveImage, getSavedImages, deleteImage } = require('../controllers/imageController');

const router = express.Router();

router.post('/save', saveImage);
router.get('/:userEmail', getSavedImages);
router.delete('/id',deleteImage)

module.exports = router;
