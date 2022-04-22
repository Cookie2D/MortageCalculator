import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import BankManagement from "./pages/BankManagement";
import MortgageCalculator from "./pages/MortgageCalculator";
import Header from "./component/Header";
import {Container} from "@mui/material";
import {BankContext} from "./context/BankContext";

const gbanks = [
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

function App() {
  const [bankList, setBankList] = useState(JSON.parse(localStorage.getItem("bankList")))
  // localStorage.setItem("bankList", JSON.stringify(gbanks))
  useEffect(() => {
    localStorage.setItem("bankList", JSON.stringify(bankList))
  }, [bankList])

  const removeBank = id => {
    setBankList(bankList.filter(bank => {
      return bank.id !== id
    }))
  }

  const createBank = bank => {
    setBankList([...bankList, bank])
  }

  const updateBank = (bank) => {
    const temp = bankList.map(e => e.id === bank.id ? bank : e)
    setBankList(temp);
  }

  return (
    <BankContext.Provider value={{
      removeBank, createBank, updateBank
    }}>
      <Container className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<BankManagement bankList={bankList} />}/>
          <Route path="/calculator" element={<MortgageCalculator/>}/>
        </Routes>
      </Container>
    </BankContext.Provider>
  );
}

export default App;
