import React from 'react';
import {Box, Button} from "@mui/material";
import BankCard from "../component/BankCard";

const bankList = [
  {
    id: 1,
    name: "Credo Bank",
    interestRate: 5,
    creditMaximum: 200000,
    minimumDownPayment: 15,
    loanTerm: 6
  },
  {
    id: 2,
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
      <Box sx={{display: 'flex', justifyContent: "space-around"}}>
        {bankList.map((bank, i) => <BankCard key={i} bank={bank}/>)}
      </Box>
    </Box>
  );
};

export default BankManagement;