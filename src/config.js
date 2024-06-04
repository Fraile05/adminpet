// Configuración de variables globales

// Importación de dependencias
require("dotenv").config();

// Exportación de modulos
module.exports = {
    app: {
        port : process.env.PORT || 4000
    },
    mongodb: {
        host : process.env.HOST
    }
}