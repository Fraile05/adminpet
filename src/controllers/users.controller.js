// Importacion de modulos
const Usuario = require("../models/usuario");

// Logica
const getRegister = (req, res) => {
    res.render("registro")
};

const getLogin = (req, res) => {
    res.render("login")
};

const postUser = async (req, res) => {
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
};

const postLogin = async (req, res) => {
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
};

const getRegisterFail = (req, res) => {
    res.render("registrofallido")
};

const getRegisterOk = (req, res) => {
    res.render("registrook")
};

const getLoginFail = (req, res) => {
    res.render("loginfallido")
};

const getLoginOk = (req, res) => {
    res.render("loginok")
};

module.exports = {
    getRegister,
    getLogin,
    postUser,
    postLogin,
    getRegisterFail,
    getRegisterOk,
    getLoginFail,
    getLoginOk
};