import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2);

  return (
    <div className='mb-4'>
      <div className='mb-3'>
        <h4 className='mb-2'>Income</h4>
        <p className='text-success'>{income}</p>
      </div>

      <div >
        <h4 className='mb-2'>Expense</h4>
        <p className='text-danger'>{expense}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
