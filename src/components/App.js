import React, { useEffect, useState } from "react";
import Web3 from "web3";

// component and pages import
import Home from "../pages/Home";

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
    <div>
      <div>
        <Home />
      </div>
    </div>
  );
};

export default App;
