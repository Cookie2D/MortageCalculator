import React from 'react';
import {AppBar, Box, Toolbar} from "@mui/material";
import MenuButton from "./MenuButton";

const Header = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <MenuButton to="/">Management</MenuButton>
          <MenuButton to="/calculator">Calculator</MenuButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;