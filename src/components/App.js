import React, { useEffect, useState } from "react";
import Web3 from "web3";

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
      <div>hello world</div>
    </div>
  );
};

export default App;
