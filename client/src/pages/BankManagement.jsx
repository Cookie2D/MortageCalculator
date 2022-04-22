import React from 'react';
import {Box, Button} from "@mui/material";

const bankList = [
  {
    name: "Credo Bank",
    interestRate: 5,
    creditMaximum: 200000,
    minimumDownPayment: 15,
    loanTerm: 6
  },
  {
    name: "Privat 24",
    interestRate: 25,
    creditMaximum: 100000,
    minimumDownPayment: 20,
    loanTerm: 12
  }
]

const BankManagement = () => {
  return (
    <Box>
      <Box sx={{mt: 2, display: "flex"}}>
        <Button variant="outlined" component="div" sx={{margin: "0 auto"}}>
          Create Bank
        </Button>
      </Box>
      <Box>

      </Box>
    </Box>
  );
};

export default BankManagement;