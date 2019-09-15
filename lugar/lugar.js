const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodedURL = encodeURI(direccion);

    console.log(encodedURL);
    const instance = axios.create({

        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'x-rapidapi-key': 'f0c20bade1msh272d1bae6dda96fp16141ajsnc6cbbdbf1a4a' },
        timeout: 30000

    });

    const resp = await instance.get();
    //console.log(resp.data);
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }

    const data = resp.data.Results[0];
    const direccionr = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccionr,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng: getLugarLatLng

}