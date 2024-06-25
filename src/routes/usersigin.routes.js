const express = require('express');
const router = express.Router();
const usersiginController = require('../controllers/usersigin.controller');

router.get('/', usersiginController.getLoginOk);
router.get('/mismascotas', usersiginController.getPets);
router.get('/mismascotas/crearmascota', usersiginController.getCreatePet);
router.get('/mismascotas/:id', usersiginController.getPetById);
router.get('/mismascotas/actualizar/:id', usersiginController.getUpdatePetById);
router.get('/paginaenconstruccion', usersiginController.pageInConstruction);

router.post('/mismascotas/crearmascota', usersiginController.createPet);

router.delete('/mismascotas/:id', usersiginController.deletePetById);

router.put('/mismascotas/actualizar/:id', usersiginController.updatePetById);

module.exports = router;