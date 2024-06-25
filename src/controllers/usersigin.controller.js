const Mascota = require("../models/mascota");

const getPets = async (req, res) => {
    try {
        const arrayMascotasDB = await Mascota.find();

        res.render("mismascotas", {
            arrayMascotas: arrayMascotasDB
        });

    } catch (error) {
        console.log(error)
    }
};

const getPetById = async (req, res) => {

    const id = req.params.id

    try {
        const mascotaDB = await Mascota.findOne({_id: id})
        res.render("detallemascota", {
            mascota : mascotaDB,
            error: false
        })
    } catch (error) {
        console.log(error)
        res.render("detallemascota", {
            error: true,
            mensaje: "El ID de mascota no se encuentra"
        })
    }
};

const createPet = async (req, res) => {
    const body = req.body
    try {
        const mascotaDB = new Mascota(body)
        await mascotaDB.save()
        
        res.redirect("../mismascotas")

    } catch (error) {
        console.log(error)
    }
    console.log(body)
};

const updatePetById = async (req, res) => {

    const id = req.params.id
    const body = req.body

    try {
        const mascotaDB = await Mascota.findByIdAndUpdate(
            id,
            body,
            { useFindAndModify: false}
        )
        console.log(mascotaDB)
        res.json({
            estado: true,
            mensaje: "Se ha editado la mascota"
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: "No se ha logrado editar la mascota"
        })
    }
};

const deletePetById = async (req, res) => {
    
    const id = req.params.id

    try {
        const mascotaDB = await Mascota.findByIdAndDelete({_id: id}) 

        if (mascotaDB) {
            res.json({
                estado: true,
                mensaje: "Se ha eliminado la mascota"
            })
        } else {
            res.json({
                estado: false,
                mensaje: "No se ha logrado eliminar la mascota"
            })
        }
    } catch (error) {
        console.log(error)
    }
};

const pageInConstruction = async (req, res) => {
    res.render("paginaenconstruccion")
};

const getLoginOk = async (req, res) => {
    res.render("loginok")
};

const getCreatePet = async (req, res) => {
    res.render("crearmascota")
};

const getUpdatePetById = async (req, res) => {

    const id = req.params.id

    try {
        const mascotaDB = await Mascota.findOne({_id: id})
        res.render("actualizarmascota", {
            mascota : mascotaDB,
            error: false
        })
    } catch (error) {
        console.log(error)
        res.render("actualizarmascota", {
            error: true,
            mensaje: "El ID de mascota no se encuentra"
        })
    }

};

module.exports = {
    getPets,
    getPetById,
    createPet,
    updatePetById,
    deletePetById,
    pageInConstruction,
    getLoginOk,
    getCreatePet,
    getUpdatePetById
};