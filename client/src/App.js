import React from 'react';
import {Route, Routes} from "react-router-dom";
import BankManagement from "./pages/BankManagement";
import MortgageCalculator from "./pages/MortgageCalculator";
import Header from "./component/Header";
import {Container} from "@mui/material";

function App() {
  return (
    <Container className="App">
      <Header />
      <Routes>
        <Route path="/" element={<BankManagement/>}  />
        <Route path="/calculator" element={<MortgageCalculator/>}  />
      </Routes>
    </Container>
  );
}

export default App;
