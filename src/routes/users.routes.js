const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

router.get('/registro', usersController.getRegister);
router.get('/login', usersController.getLogin);
router.get('/registrook', usersController.getRegisterOk);
router.get('/registrofallido', usersController.getRegisterFail);
router.get('/loginok', usersController.getLoginOk);
router.get('/loginfallido', usersController.getLoginFail);

router.post('/registro', usersController.postUser);
router.post('/login', usersController.postLogin);

module.exports = router;