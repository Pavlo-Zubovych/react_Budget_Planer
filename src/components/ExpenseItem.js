import React, { useContext } from 'react'
import { AppContext } from "../context/AppContext";
import { TiDelete } from "react-icons/ti";

function ExpenseItem(props) {
    const { dispatch } = useContext(AppContext)
    
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        })
    }
  return (
		<li
			key={props.id}
			className='list-group-item d-flex justify-content-between align-items-center'
		>
			{props.name}
			<div>
				<span>{props.cost}$</span>
				<TiDelete size='1.5em' onClick={handleDeleteExpense} />
			</div>
		</li>
  );
}

export default ExpenseItem