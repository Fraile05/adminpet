
const getHome = (req,res) => {
    res.render('home')
};

const getServices = (req,res) => {
    res.render('servicios')
};

const getGalleries = (req,res) => {
    res.render('galeria')
};

const getAbout = (req,res) => {
    res.render('nosotros')
};

const getContact = (req,res) => {
    res.render('contacto')
};

module.exports = {
    getHome,
    getServices,
    getGalleries,
    getAbout,
    getContact
};