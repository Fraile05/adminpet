// Importacion de dependencias
const mongoose = require("mongoose");

//Importacion de modulos
const dbConfig = require("../config");

// Conexion a la base de datos
function ConexionMongoDb(){
    mongoose.connect(dbConfig.mongodb.host,
    )
    .then(() => console.log("La base de datos MongoDb se ha conectado correctamente"))
    .catch(error => console.log(error))
};

ConexionMongoDb();

module.exports = {
    ConexionMongoDb
};