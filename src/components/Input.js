import React from 'react'

function Input({type ,placeholder , className}) {
  return (
		<div>
			<div className=" flex justify-center">
				<div className="form-control w-full max-w-xs flex justify-center">
					<label className="label">
						<span className="label-text text-2xl font-bold">Enter the city name !</span>
					</label>
					<input type={type} placeholdr={placeholder} className={className} />
				</div>
			</div>
		</div>
	);
}

export default Input
