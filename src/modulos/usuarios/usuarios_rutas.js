// Importacion de dependencias
const express = require("express");

// Importacion de modulos
const usuariosControlador = require("./usuarios_controlador");
const respuestas = require("../../red/respuestas");

// Definicion de rutas usuarios
const usuariosRouter = express.Router();

// 
usuariosRouter.get("/", function(require, response){

    const todosUsuarios = usuariosControlador.TodosUsuarios();
    respuestas.exitosa(require,response,todosUsuarios,200);
});

usuariosRouter.get("/registro", function(require, response){

    response.render("registro")
});

usuariosRouter.get("/login", function(require, response){

    response.render("login")
});

module.exports = usuariosRouter;