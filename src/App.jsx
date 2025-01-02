import { ethers } from "ethers";
import { useEffect, useState } from "react";
import "./index.css"
import Navigation from "./components/Navigation";
import EventXABI  from "./utils/abis/eventx.json"
import deployment from "./utils/deployment.json"

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [ occasions, setOccasions] = useState([]);

  const CONTRACT_ADDRESS = deployment.anvil.EventX.address;

    const connectWallet = async () => {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(provider);

        const signer = await provider.getSigner();
        setSigner(signer);
        
        const accounts = await provider.listAccounts();
        const accountAddresses = accounts.map((account) => account.address);
        setAccounts(accountAddresses);

        const contract = new ethers.Contract(CONTRACT_ADDRESS, EventXABI, signer);
        setContract(contract);

        const totalOccasions = await contract.totalOccasions()
        const occasions = [];

        for (let i = 1; i <= totalOccasions; i++) {
          const occasion = await contract.getOccasion(i)
          occasions.push(occasion);
        }
        
        setOccasions(occasions);
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
        <Navigation 
        connectWallet={connectWallet}
        account={accounts.length > 0 ? accounts[0] : null}
        />
        <div>
          {occasions.map((occasion, index) => (
            <p key={index}>{occasion.name}</p>
          ))}
        </div>
      </header>
    </div>
    </>
  ) 
}

export default App;
