import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import AddTransaction from './AddTransaction';

function AddTransactionContent() {
  return (
    <Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 1 }}>
      <h2>Add Transaction</h2>
      <AddTransaction></AddTransaction>
    </Box>
  );
}

export default function IncomeExpenseButton() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handleOpen}>
          Income
        </Button>
        <Button variant="outlined" onClick={handleOpen}>
          Expense
        </Button>
      </Stack>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 1,
          }}
        >
          <AddTransactionContent />
        </Box>
      </Modal>
    </>
  );
}
