import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const MenuButton = ({to, children}) => {
  return (
    <Button variant="h6" component="div" sx={{flexGrow: 1, textDecoration: "none", fontWeight: "700"}}>
      <Link to={to} style={{ textDecoration: 'none', color: 'white' }}>
        {children}
      </Link>
    </Button>
  );
};

export default MenuButton;