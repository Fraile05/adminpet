// Importacion de dependencias
const express = require("express");

// Importacion de modulos

// Definicion de rutas usuarios
const homeRouter = express.Router();

// 
homeRouter.get("/", function(req, res){

    res.render("home")
});

homeRouter.get("/servicios", function(req, res){

    res.render("servicios")
});

homeRouter.get("/galeria", function(req, res){

    res.render("galeria")
});

homeRouter.get("/nosotros", function(req, res){

    res.render("nosotros")
});

homeRouter.get("/contacto", function(req, res){

    res.render("contacto")
});

module.exports = homeRouter;