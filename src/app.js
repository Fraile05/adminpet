// Importación de dependencias
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// Importación de modulos
const config = require("./config");
const usersRoutes = require("./routes/users.routes");
const homeRoutes = require("./routes/home.routes");
const userSignInRoutes = require("./routes/usersigin.routes");

// Variables del entorno
const app = express();

// Configuracion y asignacion de valores
app.set("puerto", config.app.port);

// invocación del motor de vistas
app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

// middleware para leer dato de los formularios y json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuración de la ruta estatica
app.use(express.static(__dirname + "/public"));

app.use(morgan('dev'));

// Configuración de rutas
app.use("/", homeRoutes);
app.use("/usuarios", usersRoutes);
app.use("/home", userSignInRoutes);

// Exportación de modulos
module.exports = app;