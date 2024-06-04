// Importación de dependencias
const express = require("express");

// Importación de modulos
const config = require("./config");
const usuarios = require("./modulos/usuarios/usuarios_rutas");

// Variables del entorno
const app = express();

// Configuracion y asignacion de valores
app.set("puerto", config.app.port);

// Configuración de rutas
app.use("/usuarios", usuarios);

// Exportación de modulos
module.exports = app;