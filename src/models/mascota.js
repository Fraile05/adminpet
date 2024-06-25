// Importación de dependencias
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
    nombre: String,
    raza: String,
    edad: Number,
    genero: String,
    especie: String
}, {
    timestamps: true,
    versionKey: false  
});

// Crear modelo

const Mascota = mongoose.model("Mascota", mascotaSchema);

// Exportacion de modelo

module.exports = Mascota;