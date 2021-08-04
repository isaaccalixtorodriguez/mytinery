const { response, request } = require('express');

const get = async(req = request, res = response) => {
    res.send({ msg: "Ruta de prueba de ciudades." });
}

module.exports = {
    get
}