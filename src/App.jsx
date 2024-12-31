import { ethers } from "ethers";
import { useEffect, useState } from "react";

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
               
      } catch (e) {
        console.error("Error connecting wallet", e)
      }    
    };

    useEffect(() => {
      connectWallet();
    }, [])

  return(
    <>
    <p>
    {accounts[0]}
    </p>
    </>
  ) 
}

export default App;
