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

usuariosRouter.post("/iniciarsesion", async (req, res) => {
    let correologin = req.body.correologin;
    let contrasenalogin = req.body.contrasenalogin;

    const userDB = await Usuario.findOne({ correoelectronico: correologin});

    if (!userDB) {
        res.redirect("/usuarios/loginfallido");
        console.log("El correo ingresado no existe en la base");  
    } else {

        try {
            let correoOK = (correologin == userDB.correoelectronico);
            let contrasenaOK = (contrasenalogin == userDB.contrasena);

            if ((correoOK == true) && (contrasenaOK == true)) {
                console.log("Las credenciales coinciden");
                res.redirect("/usuarios/loginok");
            } else {
                console.log("Las credenciales no coinciden");
                res.redirect("/usuarios/loginfallido");
            }
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

usuariosRouter.get("/loginfallido", function(req, res){

    res.render("loginfallido")
});

usuariosRouter.get("/loginok", function(req, res){

    res.render("loginok")
});

module.exports = usuariosRouter;