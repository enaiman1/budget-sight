// this component list out al lthe transactions the user created
import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../../Context/GlobalState'
import Transaction  from '../Transaction/Transaction'
import './TransactionList.scss'

 const TransactionList = () => {

const {transactions, getTransactions} = useContext(GlobalContext)

useEffect(()=>{
  getTransactions();
  //eslint-disable-net-line react/hooks/exhaustive-deps
}, [])

    return (
        <>
        <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction  key={transaction._id} transaction ={transaction}/>
        ))}
        
      </ul>
      </>
    )
}

export default TransactionList