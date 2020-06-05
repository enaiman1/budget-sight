import React, {useContext} from 'react'
import { GlobalContext } from '../../Context/GlobalState'
import { numberWithCommas } from "../../utils/format"

export const Transaction = ({transaction}) => {
const {deleteTransaction} = useContext(GlobalContext);
    
// if the user inputs an expense(a number less then zero or a negative number) it will display a - other wise it will display a +
const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span>
        <button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
       </li> 
    )
}
