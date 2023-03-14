import React from 'react'
import spidy from './../img/spidy.jpg'
function Card() {
  return (
		 <div className="w-100 mt-20 flex justify-center">
			<div className="card card-side bg-base-100  shadow-xl">
				<figure>
					<img
						src={spidy}
						alt="Movie"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">New movie is released!</h2>
					<p>Click the button to watch on Jetflix app.</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Watch</button>
					</div>
				</div>
			</div>
      </div>
		
	);
}

export default Card
