import React, {useState} from 'react';
import {Box, Button, MenuItem, Select, TextField, Typography} from "@mui/material";

const MortgageCalculator = ({bankList}) => {
  const [initialLoan, setInitialLoan] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [bank, setBank] = useState(bankList[0]);
  const [calculation, setCalculation] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();

    const P = +initialLoan; // Amount borrowed
    const r = bank.interestRate / 100; // annual interest rate
    const n = +bank.loanTerm; // number of monthly payments
    // Monthly payment
    const M = (P * (r / 12) * Math.pow((1 + r / 12), n)) / (Math.pow((1 + r / 12), n) - 1);

    setCalculation(+M.toFixed(2));
  }
  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Initial loan"
          sx={{width: "100%", mt: 2}}
          value={initialLoan}
          onChange={(e) => setInitialLoan(e.target.value)}
          required
        />
        <TextField
          label="Down payment"
          sx={{width: "100%", mt: 2}}
          required
          value={downPayment}
          onChange={(e) => setDownPayment(e.target.value)}
        />
        <Select
          sx={{width: "100%", mt: 2}}
          value={bank}
          required
          label="Select your bank"
          onChange={e => setBank(e.target.value)}
        >
          {bankList.map(e => <MenuItem value={e} key={e.id}>
            {e.name}
          </MenuItem>)}
        </Select>
        <Button size="large" variant="contained" type="submit" sx={{mt: 2}}>
          Calculate
        </Button>
      </Box>

      <Typography variant="h3" sx={{mt: 2, textAlign: 'center'}}>
        Your monthly payments is: ${calculation}
      </Typography>
    </>
  );
};

export default MortgageCalculator;