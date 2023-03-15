import React from 'react';
import cloud from './../img/cloud.png';
function Card({temp}) {
	// consconstole.log(temp)
	console.log(temp);
	const newTemp = (temp - 273.15).toFixed();
	// console.log(newTemp);
	return (
		<div className="w-100 mt-20 flex justify-center">
			<div className="card card-side bg-base-100  shadow-xl">
				<figure>
					<img
						src={cloud}
						alt="Movie"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">Current City</h2>
					<p>Current Temparature : {newTemp} C </p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Watch</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
