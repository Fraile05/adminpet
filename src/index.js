// Importación de modulos
const app = require("./app");

// Puesta arriba del servidor
app.listen(app.get("puerto"), function(error){
    if (error){
        console.log("No se logro inciar el servidor");
        console.log(error);
    }
    else{
        console.log("Servidor iniciado correctamente en el puerto: ", app.get("puerto"));
    }
});

