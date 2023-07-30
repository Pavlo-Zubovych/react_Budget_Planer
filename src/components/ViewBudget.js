import React from "react";

function ViewBudget(props) {
	return (
		<>
			<span>Budget: {props.budget}$ </span>
			<button
				id='budget__btn__size'
				type='button'
				className='btn btn-primary'
				onClick={() => props.handleEditClick()}
			>
				Edit
			</button>
		</>
	);
}

export default ViewBudget;
