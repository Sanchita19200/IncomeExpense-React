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





export default function ProfitCard() {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount)

    const total = amounts.reduce((acc, item) => (acc += item), 0)


  return (
    <React.Fragment>
    <CardContent sx={{ border: "2px solid purple",
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(113, 0, 128, 0.1)', // Light green background on hover
        },
     }}>
        <Typography variant="h5" component="div"></Typography>
        <Typography variant="h5" component="div">
            P{bull}R{bull}O{bull}F{bull}I{bull}T
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 , textAlign: 'center' }}>Rs {total}</Typography>
      
    </CardContent>

</React.Fragment>
  );
}
