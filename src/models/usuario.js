// Importación de dependencias
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    tipodocumento: { 
        type: String,
        require: true
    },
    identificacion: { 
        type: Number,
        require: true
    },
    nombres: { 
        type: String,
        require: true
    },
    apellidos: { 
        type: String,
        require: true
    },
    correoelectronico: { 
        type: String,
        require: true
    },
    contrasena: { 
        type: String,
        require: true
    },
    direccion: { 
        type: String,
        require: true
    },
    ciudad: { 
        type: String,
        require: true
    },
    telefono: { 
        type: Number,
        require: true
    }
});

// Crear modelo

const Usuario = mongoose.model("Usuario", usuarioSchema);

// Exportacion de modelo

module.exports = Usuario;