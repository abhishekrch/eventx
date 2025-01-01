import { ethers } from "ethers";
import { useEffect, useState } from "react";
import "./index.css"
import Navigation from "./components/Navigation";

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [accounts, setAccounts] = useState([]);

    const connectWallet = async () => {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(provider);

        const signer = await provider.getSigner();
        setSigner(signer);
        
        const accounts = await provider.listAccounts();
        const accountAddresses = accounts.map((account) => account.address);
        setAccounts(accountAddresses);

        // Refresh Account
        window.ethereum.on("accountsChanged", async () =>{
          const updatedAccounts = await provider.listAccounts();
          const updatedAccountAddresses = updatedAccounts.map((account) => account.address);
          setAccounts(updatedAccountAddresses);
        })
               
      } catch (e) {
        console.error("Error connecting wallet", e)
      }    
    };

    useEffect(() => {
      connectWallet();
    }, [])

  return(
    <>
    <div>
      <header>
        <Navigation />
      </header>
    </div>
    </>
  ) 
}

export default App;
