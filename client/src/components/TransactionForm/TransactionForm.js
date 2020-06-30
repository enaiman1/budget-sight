// this components is for the user to input the transaction and the Amount
import React, {useState, useContext} from 'react'
import { GlobalContext } from '../../Context/GlobalState'

import "./TransactionForm.scss"


export const TransactionForm = () => {
  const [ text, setText] = useState('')
  const [amount, setAmount ] = useState(0)

  const {addTransaction} = useContext(GlobalContext);

  const onSubmit = e =>{
    e.preventDefault()

    const newTransaction = {
      id:  Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction)
  }

    return (
        <>
           <h3 className="form__title">Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="submitBtn">Add transaction</button>
      </form>
    
        </>
    )
}
