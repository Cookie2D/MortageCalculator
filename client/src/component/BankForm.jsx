import React, {useContext, useEffect, useState} from 'react';
import {Box, Button, Modal, TextField, Typography} from "@mui/material";
import {BankContext} from "./../context/BankContext";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const BankForm = ({open, handleClose, bank = null}) => {
  const [id, setId] = useState(Date.now());
  const [name, setName] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [creditMaximum, setCreditMaximum] = useState('');
  const [minimumDownPayment, setMinimumDownPayment] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const {createBank, updateBank} = useContext(BankContext);

  useEffect(() => {
    if (bank) {
      setId(bank.id);
      setName(bank.name);
      setInterestRate(bank.interestRate);
      setCreditMaximum(bank.creditMaximum);
      setMinimumDownPayment(bank.minimumDownPayment);
      setLoanTerm(bank.loanTerm);
    }
    // eslint-disable-next-line
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    const newBank = {
      id,
      name,
      interestRate,
      creditMaximum,
      minimumDownPayment,
      loanTerm
    }

    if (bank) {
      updateBank(newBank)
    } else {
      createBank(newBank);
    }
    handleClose();
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': {m: 1, width: '25ch'},
            textAlign: "center",
          }}
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Bank create
          </Typography>
          <div>
            <TextField
              label="Bank name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label="Interest Rate"
              required
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
            <TextField
              label="Credit Maximum"
              required
              value={creditMaximum}
              onChange={(e) => setCreditMaximum(e.target.value)}
            />
            <TextField
              label="Minimum Down Payment (%)"
              required
              value={minimumDownPayment}
              onChange={(e) => setMinimumDownPayment(e.target.value)}
            />
            <TextField
              label="Loan term"
              required
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
            />
          </div>

          <Box sx={{mt: 2}}>
            <Button type="submit" sx={{mr: 1}} variant="contained">Save</Button>
            <Button variant="outlined" onClick={handleClose}>Cancel</Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default BankForm;