const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const info = require('./info/info');


//lugar.getLugarLatLng(argv.direccion).then(resp => {
//    console.log(resp)
//    clima.getClima(resp.lat, resp.lng).then(temp => { console.log(temp) });
//});
info.getInfo(argv.direccion).then(resp => { console.log(resp); });


//clima.getClima(12, 12).then(resp => { console.log(resp); })