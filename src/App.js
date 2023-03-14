import Search from './components/Search'
import Card from './components/Card'
import searchWeather from './api'
function  App() {
//  searchWeather('mumbai')
  const handleSubmit = (city) => {
    searchWeather(city)
  }
  return (
		<div>
			<h1  className="text-4xl   font-bold text-center my-6 bg-gray-200 ">The Weather Channel
			</h1>

			<Search onSubmit={handleSubmit} />
      <div className="divider"></div>
      <Card/>
		</div>
	);
}

export default App;
