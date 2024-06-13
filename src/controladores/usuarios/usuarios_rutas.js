// Importacion de dependencias
const express = require("express");

// Importacion de modulos
const Usuario = require("../../models/usuario");

// Definicion de rutas usuarios
const usuariosRouter = express.Router();

usuariosRouter.get("/registro", function(req, res){

    res.render("registro")
});

usuariosRouter.post("/registro", async (req, res) => {
    let numide = req.body.identificacion;
    const usuarioDB = await Usuario.findOne({ identificacion: numide});

    if (usuarioDB) {
        res.redirect("/usuarios/registrofallido")  
    } else {
        const bodyRegistro = req.body;
            try {
                const newusuarioDB = new Usuario(bodyRegistro);                        
                await newusuarioDB.save()                        
                res.redirect("/usuarios/registrook")                      
            } catch (error) {
                console.log(error);
            }
    }
});

usuariosRouter.get("/login", function(req, res){

    res.render("login")
});

usuariosRouter.get("/registrofallido", function(req, res){

    res.render("registrofallido")
});

usuariosRouter.get("/registrook", function(req, res){

    res.render("registrook")
});

module.exports = usuariosRouter;