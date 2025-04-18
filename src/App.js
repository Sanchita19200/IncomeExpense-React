
import './App.css';
import Header from './components/Header';
import ProfitCard from './components/Profit';
import IncomeCard from './components/Income';
import ExpenseCard from './components/Expense';
import { GlobalProvider } from './context/GlobalContext';
import TransactionList from './components/TransactionList';
import React, { useState } from 'react';
import AddTransaction from './components/AddTransaction';
import { Button, Modal, Box } from '@mui/material';

import IncomeExpenseButton from './components/ExpenseButton';


function App() {
  return (
    <GlobalProvider>
    <>
    <div className='Navbar'>
    <Header></Header>
    </div>
    <br></br>
    <div className='buttons' style={{ display: 'flex', justifyContent: 'center' }}>
    <IncomeExpenseButton></IncomeExpenseButton>
    </div>
    <div className='cards'>
    <ProfitCard></ProfitCard>
    <IncomeCard></IncomeCard>
    <ExpenseCard></ExpenseCard>
    </div>
    <div className='list'>
    <TransactionList></TransactionList>
    </div>
    
    </>
    </GlobalProvider>
    );
}

export default App;
