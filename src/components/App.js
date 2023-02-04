import React, { useEffect , useState} from "react";
import Web3 from "web3";

const App = () => {
  // function to load blockchain data
  async function loadBlockChainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
  }

  useEffect(() => {
    loadBlockChainData();
  }, []);

  return (
    <div>
      <idv>hello world</idv>
    </div>
  );
};

export default App;
