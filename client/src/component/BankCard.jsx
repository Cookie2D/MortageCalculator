import React from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";

const BankCard = ({bank}) => {
  return (
    <Card sx={{ maxWidth: 450, minWidth: 350 }}>
      <CardContent>
        <Typography  variant="h5" component="div" gutterBottom>
          {bank.name}
        </Typography>
        <Typography >
          Interest rate: {bank.interestRate}%
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Minimum down payment: {bank.minimumDownPayment}%
        </Typography>
        <Typography variant="body2">
          Credit maximum ${bank.creditMaximum}
        </Typography>
        <Typography variant="body2">
          Loan term: {bank.loanTerm} mouth
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Edit</Button>
        <Button size="small" variant="outlined" color="error">Delete</Button>
      </CardActions>
    </Card>
  );
};

export default BankCard;