import React from "react";
import { createContext } from "react";
import { useState } from "react";

//Initial State
const initialState = {
    transactions: [

        //dummy data with ttiel and amount
        { id: 1, text: "Cash", amount: 400 },
        { id: 2, text: "Book", amount: -100 },
        { id: 3, text: "Camera", amount: -200 },
        { id: 4, text: "Cash", amount: 400 },
        { id: 5, text: "Book", amount: -100 },
        { id: 6, text: "Camera", amount: -200 },
     
    ]
};

//creating the context
export const GlobalContext = createContext(initialState);
//function create a context with dta to use accross components

//Provider Components
export const GlobalProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    const [userInputs, setUserInputs] = useState([]); // State to store user inputs

    //delete function
    function DeleteTransaction(id) {
        setState((prevState) => ({
            ...prevState,
            transactions: prevState.transactions.filter(transaction => transaction.id !== id)
        }));
    }


    //add transaction function
    function AddTransaction(transaction) {
        setState((prevState) => ({
            ...prevState,
            transactions: [transaction, ...prevState.transactions]
        }));
        setUserInputs((prevInputs) => [transaction, ...prevInputs]); // Store user input in the array
    }

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions,
            userInputs, 
            DeleteTransaction,
            AddTransaction,
            
        }}>
            {children}
        </GlobalContext.Provider>
    );
};