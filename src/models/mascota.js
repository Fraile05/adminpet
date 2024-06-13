// Importación de dependencias
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
    nombre: String,
    raza: String,
});

// Crear modelo

const Mascota = mongoose.model("Mascota", mascotaSchema);

// Exportacion de modelo

module.exports = Mascota;