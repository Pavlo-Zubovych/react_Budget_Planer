import React, { createContext } from "react";
import {useEffect, useReducer } from "react";

import { v4 as uuidv4 } from "uuid";

const AppReduser = (state, action) => {
    console.log({ state });//
    switch (action.type) {
        case "SET_BUDGET":
            return {
                ...state,
                budget: Number(action.payload),
            };

        case "DELETE_EXPENSE":
            return {
                ...state,
                //expenses: { name: "iPhone", cost: 1000, id: uuidv4() }
                expenses: state.expenses.filter(
                    (filteredExpense) =>
                        filteredExpense.id !== action.payload
                ),
            };

        case "ADD_EXPENSE":
            // return state.expenses.push(action.payload);
            return {
					...state,
					expenses: [...state.expenses, action.payload],
				};

		default:
			break;
	}
};

const initialState = {
	budget: 3000,
	expenses: [
		{ name: "bicycle", cost: 500, id: uuidv4() },
		{ name: "macBookAir", cost: 1100, id: uuidv4() },
		{ name: "iPhone", cost: 1000, id: uuidv4() },
	],
};

export const AppContext = createContext();

function AppProvider(props) {

	const [state, dispatch] = useReducer(AppReduser, initialState);

	// analog componentDidMount
	useEffect(() => {
		console.log("init");
	}, []);

	return (
		<AppContext.Provider
			value={{ expenses: state.expenses, budget: state.budget, dispatch }}
		>
			{props.children}
		</AppContext.Provider>
	);
}

export default AppProvider;
