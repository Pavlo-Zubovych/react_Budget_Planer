import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";



function Remaining() {
	
	const { expenses, budget } = useContext(AppContext);

	//ExpenseTotalValue
	const expenseTotalValue = expenses.reduce(
		(accumulator, currentValue) => accumulator + currentValue.cost,
		0
    );
    
    let remaningValue = budget - expenseTotalValue;


    return (
			<div className='control__container control__remaining'>
				Remaining: {remaningValue}$
			</div>
		);
}

export default Remaining;
