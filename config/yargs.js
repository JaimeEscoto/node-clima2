const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'En este parámetro se envía la dirección'

    }

}).help().argv;

module.exports = {
    argv
}