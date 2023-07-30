import React from "react";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseLisr from "./components/ExpenseList";
import AddExpenseFrom from "./components/AddExpenseFrom";
import AppProvider from "./context/AppContext";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<AppProvider>
			<h1>My Budget Planner</h1>
			<div className='control__bar'>
				<Budget />
				<Remaining />
				<ExpenseTotal />
			</div>
			{/* <div className='add__expense__form'> */}
				<AddExpenseFrom />
			{/* </div> */}

			<ExpenseLisr />
		</AppProvider>
	);
}

export default App;
