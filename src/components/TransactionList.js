import React, { useContext } from 'react';
import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className='mb-3'>
        <h3 className='mb-3'>History</h3>
        <ul className='list-group'>
          {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
        </ul>
    </div>
  )
}

export default TransactionList
