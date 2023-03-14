import React from 'react';

function Input({ type, placeholder, className, onChange, value, onSubmit }) {
	// console.log(value);
	return (
		<form onSubmit={onSubmit}>
			<div>
				<div className=" flex justify-center">
					<div className="form-control w-full max-w-xs flex justify-center">
						<label className="label">
							{/* <span className="label-text text-2xl font-bold ml-9 mb-5">Enter the city name !</span> */}
						</label>
						<input
							onChange={onChange}
							value={value}
							type={type}
							placeholder={placeholder}
							className={className}
						/>
					</div>
				</div>
			</div>
		</form>
	);
}

export default Input;
