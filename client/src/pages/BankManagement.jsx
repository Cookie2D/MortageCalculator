import React, {useEffect, useState} from 'react';
import {Box, Button} from "@mui/material";
import BankCard from "../component/BankCard";
import BankForm from "../component/BankForm";

const BankManagement = ({bankList}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Box sx={{mt: 2, display: "flex"}}>
        <Button variant="outlined" component="div" sx={{margin: "0 auto"}} onClick={handleOpen}>
          Create Bank
        </Button>
      </Box>
      <Box sx={{display: 'flex', justifyContent: "space-around"}}>
        {bankList.map((bank, i) => <BankCard key={i} bank={bank}/>)}
      </Box>

      <BankForm open={open} handleClose={handleClose} />
    </Box>
  );
};

export default BankManagement;