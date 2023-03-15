import Search from './components/Search';
import Card from './components/Card';
import searchWeather from './api';
// import {BrowserRouter} from "react-router-dom"
import {useState} from 'react'
function App() {
const [Temp , setTemp] = useState('')
	 
	const handleSubmit = async(city) => {
		const result = await searchWeather(city);
		setTemp(result)
		console.log(result)
		console.log(Temp);
	};


	return (
		<div>
			<h1 className="text-4xl  text-blue-600 font-bold text-center my-6  ">The Weather App</h1>

			<Search onSubmit={handleSubmit} />
			<div className="divider"></div>
			<Card temp ={Temp}  />
		</div>
	);
}

export default App;
