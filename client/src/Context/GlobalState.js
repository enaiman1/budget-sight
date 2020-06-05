// this file is being used to create state for the budget tracker

import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer"
import axios from "axios"

const initialState = {
  transactions: [],
  error: null,
  loading: true
};

// Create context
export const GlobalContext = createContext(initialState);

// provide omponent

export const GlobalProvider = ({children}) =>{
 const [state, dispatch] = useReducer(AppReducer, initialState);

//  actions

async function getTransactions(){
  try {
    const res = await axios.get('/api/budget')

    dispatch({
      type: "GET_TRANSACTIONS",
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: "TRANSACTIONS_ERROR",
      payload: error
    })
  }
}

async function deleteTransaction(id){
try {
  await axios.delete(`/api/budget/${id}`)
  dispatch({
    type: 'DELETE_TRANSACTION',
    payload: id
  })
} catch (error) {
  dispatch({
    type: "TRANSACTIONS_ERROR",
    payload: error
  })
}
  
}

async function addTransaction(transaction){
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post('/api/budget', transaction, config)
     dispatch({
    type: 'ADD_TRANSACTION',
    payload: res.data
  })
  } catch (error) {
    dispatch({
      type: "TRANSACTIONS_ERROR",
      payload: error
    })
  }
 
}

 return(
 <GlobalContext.Provider value={{
     transactions:state.transactions,
     error: state.error,
     loading: state.loading,
     getTransactions,
     deleteTransaction,
     addTransaction
 }}>
     {children}
 </GlobalContext.Provider>)
}