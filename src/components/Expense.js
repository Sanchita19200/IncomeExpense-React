import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { GlobalContext } from '../context/GlobalContext';
import Transaction from './Transaction';
import { useContext } from 'react';



const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);



export default function ExpenseCard() {

    const {transactions} = useContext(GlobalContext);

    const expense = transactions.map(transaction => transaction.amount).filter(item => item < 0);

    const totalExpense = expense.reduce((acc, item) => (acc += item), 0)
  return (
    <React.Fragment>
    <CardContent   
    sx={{
                border: "2px solid red",
                cursor: 'pointer', '&:hover': {backgroundColor: 'rgba(128, 0, 0, 0.1)', },
            }}
        >
        <Typography variant="h5" component="div"></Typography>
        <Typography variant="h5" component="div">
            E{bull}X{bull}P{bull}E{bull}N{bull}S{bull}E
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5, textAlign: 'center'  }}>Rs {totalExpense}</Typography>
        
    </CardContent>

</React.Fragment>
  );
}
