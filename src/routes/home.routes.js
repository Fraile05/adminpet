const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home.controller');

router.get('/', homeController.getHome);
router.get('/servicios', homeController.getServices);
router.get('/galeria', homeController.getGalleries);
router.get('/nosotros', homeController.getAbout);
router.get('/contacto', homeController.getContact);

module.exports = router;