// Importación de dependencias
const express = require("express");

// Importación de modulos
const config = require("./config");

// Variables del entorno
const app = express();

// Configuracion y asignacion de valores
app.set("puerto", config.app.port);

// Exportación de modulos
module.exports = app;