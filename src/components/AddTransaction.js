import React from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';




export default function AddTransaction(){
const [text, setText] = useState("")
const [amount, setAmount] = useState();

const {AddTransaction} = useContext(GlobalContext);

const onSubmit = (e) =>
{
 e.preventDefault();

 const newTransaction = {
  id: Math.floor(Math.random() * 100000),
  text,
  amount: +amount
 }

AddTransaction(newTransaction)
}



  return(
    <>
    <div>
    <h3>Add new transaction</h3>
    <form id="htmlForm" onSubmit={onSubmit}>
      <div className="htmlForm-control">
        <label htmlFor="text" style={{fontWeight: 'bolder', fontSize: '18px'}}>Details</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Transactions Details..." />
      </div>
      <div className="htmlForm-control">
        <label htmlFor="amount"
          > <span style={{ fontWeight: 'bolder', fontSize: '18px' }}>Amount</span> <br />
          <span style={{textAlign: 'center'}}>Enter a <span style={{fontWeight:'bolder'}}>negative</span> amount is expense and <span style={{fontWeight:'bolder'}}>Positive</span> is amount is income</span>
          <p style={{textAlign: 'center'}}>"Example(-200 is an expense, 400 is an income)"</p>
        /</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Enter amount..." />
      </div>
      <button className="btn">Add transaction</button>
    </form>
    </div>

    </>
  )
}


