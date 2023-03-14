import React from 'react'
import Input from './Input'
function Search() {
    return (
			<div>
				<Input
					type="text"
					placeholder="Type here"
					className="input input-bordered w-full max-w-xs"
				/>
				<div className="divider"></div>
			</div>
		);
}

export default Search
