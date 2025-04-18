import React from 'react'
import { GlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';


export default function Transaction({transaction}) {
    const sign = transaction.amount < 0 ? '-' : '+';

    //access the delete function in the global context
    const { DeleteTransaction } = React.useContext(GlobalContext);

  return (
    <div>


        
          <li className={transaction.amount<0 ? 'minus' : 'plus'}>
          {transaction.text} <span>{sign}  Rs{Math.abs(transaction.amount)}</span><button onClick={()=> DeleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
      
    </div>
  )
}
