import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
    
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
        {transaction.text}<span className='badge bg-danger transaction-badge'>{sign}${Math.abs(transaction.amount)}</span>
        <button onClick={() => deleteTransaction(transaction.id)} className='btn btn-sm btn-danger'>x</button>
    </li>
  )
}

export default Transaction
