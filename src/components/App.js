import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import '../CSS/App.css'

// component and pages import
import Home from "../pages/Home";
import UserLogin from "../pages/UserLogin";

const App = () => {
  const [accounts, setAccounts] = useState([]);

  // function to load blockchain data
  async function loadBlockChainData() {
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");

    setAccounts(await web3.eth.getAccounts());
    console.log(await web3.eth.getAccounts());
  }

  useEffect(() => {
    loadBlockChainData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/vote" element={<UserLogin />}></Route>
      </Routes>
    </BrowserRouter>
    // <div>
    //   <div>
    //     <Home />
    //   </div>
    // </div>
  );
};

export default App;
