// this component is the logic to update the balance, income, and expense
import React, {useContext} from 'react'
import { GlobalContext } from "../../Context/GlobalState";
import { numberWithCommas } from "../../utils/format"
import "./Balance.css"

const Balance = () => {
    const {transactions} = useContext(GlobalContext)
  
    const amounts = transactions.map(transaction => transaction.amount);
  
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  
    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
  
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);
  
      return (
        <>
        <h4>Your Balance</h4>
        <h1>{numberWithCommas(total)}</h1>
          <div className="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p className="money plus">${numberWithCommas(income)}</p>
          </div>
          <div>
            <h4>Expense</h4>
            <p  className="money minus">${numberWithCommas(expense)}</p>
          </div>
        </div>
        </>
      )
  }

  export default Balance;