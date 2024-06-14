// Importación de dependencias
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    tipodocumento: String,
    identificacion: Number,
    nombres: String,
    apellidos: String,
    correoelectronico: String,
    contrasena: String,
    direccion: String,
    ciudad: String,
    telefono: Number,
}, {
    timestamps: true,
    versionKey: false  
});

// Crear modelo

const Usuario = mongoose.model("Usuario", usuarioSchema);

// Exportacion de modelo

module.exports = Usuario;