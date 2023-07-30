import React, { useState, useContext } from "react";
// import Card from "react-bootstrap/Card";

import { AppContext } from "../context/AppContext";
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";

function Budget() {
	const { budget, dispatch } = useContext(AppContext);
	const [isEditing, setIsEditing] = useState(false);
    

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		dispatch({
			type: "SET_BUDGET",
			payload: value,
		});
		setIsEditing(false);
	};

	return (
		<>
			<div className='control__container control__budget'>
				{isEditing ? (
					<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
				) : (
					<ViewBudget handleEditClick={handleEditClick} budget={budget} />
				)}
			</div>
		</>
	);
}

export default Budget;
