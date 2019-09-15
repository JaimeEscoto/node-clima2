const axios = require('axios');

const getClima = async(lat, lon) => {



    const instance = axios.create({

        baseURL: `https://api.openweathermap.org/data/2.5/weather?appid=62808a9b76bd89dfad2038e5f4a29fb0&lat=${lat}&lon=${lon}&units=metric`,
        //headers: { 'x-rapidapi-key': 'f0c20bade1msh272d1bae6dda96fp16141ajsnc6cbbdbf1a4a' },
        timeout: 30000

    });

    const resp = await instance.get();
    //console.log(resp);

    return resp.data.main.temp;
}

module.exports = {
    getClima: getClima

}