const clima = require('../clima/clima');
const lugar = require('../lugar/lugar');

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${direccion} es ${temp}`;
    } catch (e) {
        return `No se pudo calcular el clima de ${direccion}`;
    }



}


module.exports = {
    getInfo: getInfo

}