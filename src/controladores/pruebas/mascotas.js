const express = require("express");
const pruebaRouter = express.Router();

const Mascota = require("../../models/mascota");



pruebaRouter.get("/", async (req, res) => {

    try {
        const arrayMascotasDB = await Mascota.find();

        res.render("mascota_prueba", {
            arrayMascotas: arrayMascotasDB
        });

    } catch (error) {
        console.log(error)
    }
})

module.exports = pruebaRouter;