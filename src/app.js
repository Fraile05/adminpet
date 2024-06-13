// Importación de dependencias
const express = require("express");
const bodyParser = require("body-parser");

// Importación de modulos
const config = require("./config");
const usuariosRouter = require("./controladores/usuarios/usuarios_rutas");
const homeRouter = require("./controladores/home/home_rutas");
const pruebaRouter = require("./controladores/pruebas/mascotas");

// Variables del entorno
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

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
app.use("/pruebas", pruebaRouter);

// Exportación de modulos
module.exports = app;