import React from 'react';
import Input from './Input';
import { useState } from 'react';
function Search({ onSubmit }) {
    const [value, setvalue] = useState(' ');
    

	const handleOnSubmit = (event) => {
		event.preventDefault();
		onSubmit(value);
	};


	const handleChange = (event) => {
		setvalue(event.target.value);
		
	};
	return (
		<div>
			<Input
				type="text"
				placeholder="Search City"
				className="input input-bordered w-full max-w-xs"
				onChange={handleChange}
				value={value}
				onSubmit={handleOnSubmit}
			/>
		</div>
	);
}

export default Search;
