// Importación de dependencias
const express = require("express");

// Importación de modulos
const config = require("./config");
const usuariosRouter = require("./modulos/usuarios/usuarios_rutas");
const homeRouter = require("./modulos/home/home_rutas");

// Variables del entorno
const app = express();

// Configuracion y asignacion de valores
app.set("puerto", config.app.port);

// invocación del motor de vistas
app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

// Configuración de la ruta estatica
app.use(express.static(__dirname + "/public"));

// Configuración de rutas
app.use("/", homeRouter);
app.use("/usuarios", usuariosRouter);

// Exportación de modulos
module.exports = app;