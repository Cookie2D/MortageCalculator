import React, {useContext} from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {BankContext} from "../context/BankContext";
import BankForm from "./BankForm";

const BankCard = ({bank}) => {
  const {removeBank} = useContext(BankContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{maxWidth: 450, minWidth: 350, mt: 2}}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {bank.name}
          </Typography>
          <Typography>
            Interest rate: {bank.interestRate}%
          </Typography>
          <Typography sx={{mb: 1.5}} color="text.secondary">
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
          <Button size="small" variant="contained" onClick={handleOpen}>
            Edit
          </Button>
          <Button size="small" variant="outlined" color="error" onClick={() => {
            removeBank(bank.id)
          }}>
            Delete
          </Button>
        </CardActions>
      </Card>
      <BankForm bank={bank} open={open} handleClose={handleClose}/>
    </>
  );
};

export default BankCard;