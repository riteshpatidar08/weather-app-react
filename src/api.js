import axios from 'axios'


const searchWeather = async (city) => {

const options = await {
	method: 'GET',
	url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
	params: { namePrefix: city },
	headers: {
		'X-RapidAPI-Key': '3bf2a3b13dmsh26a3835a2b3b17fp1ecdefjsn92ee63febb90',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
	},
};

    const cityData =  await axios(options);
    console.log(cityData.data.data)
    return cityData.data.data;
}    

export default searchWeather