import React, { useState } from "react";

function EditBudget(props) {
	const [value, setValue] = useState(props.budget);
	return (
		<div className='edit__budget'>
			<input
				className='edit__budget__input'
				required='reqvaired'
				type='number'
				id='name'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button
				id='budget__btn__size'
				className='btn btn-primary'
				type='button'
				onClick={() => props.handleSaveClick(value)}
			>
				Save
			</button>
		</div>
	);
}

export default EditBudget;
