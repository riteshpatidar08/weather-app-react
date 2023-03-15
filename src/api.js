import axios from 'axios';

const searchWeather = async (city) => {
	console.log(city);
	
var config = {
	method: 'get',
	maxBodyLength: Infinity,
	url: `https://api.openweathermap.org/data/2.5/weather`,
	params: {
		q: city,
		appid: '3b929d326c31b5445776259f3fd40ecb',
	},
	// headers: {
	// 	'X-RapidAPI-Key': "3bf2a3b13dmsh26a3835a2b3b17fp1ecdefjsn92ee63febb90'",
	// 	'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
	// },
	//
};


	const cityData = await axios(config);
	console.log(cityData.data.main.temp);
	console.log(cityData.data);
	return cityData.data.main.temp;
};

export default searchWeather;
