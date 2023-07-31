import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

function AddExpenseFrom(props) {
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState("");
	const [cost, setCost] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: uuidv4(),
			name: name,
			cost: parseInt(cost),
		};
		// console.log("expense:", expense);

		dispatch({
			type: "ADD_EXPENSE",
			payload: expense,
		});

		setName("");
		setCost("");
	};

	return (
		<>
			<form onSubmit={onSubmit} className='add__expense__form'>
				{/* <div> */}
				<div>
					{/* <label for='name'>Name</label> */}
					<input
						required='required'
						type='text'
						className='form-control add-form'
						id='name'
						value={name}
						placeholder='Add new expense'
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div>
					<input
						required='required'
						type='number'
						className='form-control add-form'
						id='cost'
						value={cost}
						placeholder='Cost'
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>
				<div>
					<div>
						<button type='submit' className='btn btn-primary btn__size'>
							Save
						</button>
					</div>
				</div>
			</form>
		</>
	);
}

export default AddExpenseFrom;
