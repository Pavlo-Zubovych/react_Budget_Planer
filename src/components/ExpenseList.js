import React, { useState, useContext, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

function ExpenseList() {
	const { expenses } = useContext(AppContext);

	const [filteredExpenses, setFilteredExpenses] = useState(expenses);

	useEffect(() => {
		setFilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (e) => {
		const serchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name
				.toLowerCase()
				.includes(e.target.value.toLowerCase())
        );
        setFilteredExpenses(serchResults);
    };
    
    // filteredExpenses.map((expense) => console.log("expense: ", expense));
    // filteredExpenses.map((expense) => console.log("expense.id: ", expense.id));
    

	return (
		<>
			<input
				type='text'
				class='form-control mb-2 mr-sm-2 serch_form'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<ul className='list-group mt-3 mb-3'>
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))}
			</ul>
		</>
	);
}

export default ExpenseList;
