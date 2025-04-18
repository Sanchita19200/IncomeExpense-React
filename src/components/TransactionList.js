import React from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import Transaction from "./Transaction";



export default function TransactionList() {
    const {transactions} = useContext(GlobalContext);

  return (
    <div>

    <h3>History</h3>
          <ul id="list" className="list">
            {transactions.map(transaction => (
               <Transaction key={transaction.id} transaction={transaction}></Transaction>
            ))}
            
          </ul>
          
        </div>
      )
    }