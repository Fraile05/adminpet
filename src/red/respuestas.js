exports.exitosa = function(require, response, mensaje, status){

    const statusCode = status || 200;
    const mensajeOK = mensaje || "";

    response.status(statusCode).send({
        error : false,
        status: statusCode,
        body : mensajeOK
    });

};

exports.fallida = function(require, response, mensaje, status){

    const statusCode = status || 500;
    const mensajeFail = mensaje || "Error en el mensaje revisar su contenido";

    response.status(statusCode).send({
        error : true,
        status: statusCode,
        body : mensajeFail
    });

};