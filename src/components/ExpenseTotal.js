import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ExpenseTotal() {
	const { expenses } = useContext(AppContext);

	//ExpenseTotalValue
	const expenseTotalValue = expenses.reduce(
		(accumulator, currentValue) => accumulator + currentValue.cost,
		0
	);
    return (
			<div className='control__container control__expense__total'>
				ExpenseTotal: {expenseTotalValue}
			</div>
		);
}

export default ExpenseTotal;
