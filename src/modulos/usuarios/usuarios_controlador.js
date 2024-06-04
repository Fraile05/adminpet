// Importacion de dependencias
const dbMongo = require("../../basesdedatos/mongo");

let tabla = "usuarios";

function TodosUsuarios(){
    return dbMongo.TodosUsuarios(tabla);
};

module.exports = {
    TodosUsuarios
};