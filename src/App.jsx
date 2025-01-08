import { ethers } from "ethers";
import { useEffect, useState } from "react";
import "./index.css"
import Navigation from "./components/Navigation";
import EventXABI  from "./utils/abis/eventx.json"
import deployment from "./utils/deployment.json"
import Cards from "./components/Cards";
import SeatChart from "./components/SeatChart";

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [occasions, setOccasions] = useState([]);
  const [toggle, setToggle] = useState(false)
  const [occasion, setOccasion] = useState({})

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
        // console.log({totalOccasions : totalOccasions.toString()})

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
       </header>

        <div>
          {occasions.map((occasion, index) => (
               <Cards
               occasion={occasion}
               id={index + 1}
               contract={contract}
               provider={provider}
               account={accounts}
               toggle={toggle}
               setToggle={setToggle}
               setOccasion={setOccasion}
               key={index}
             />
           ))}
         </div>
         {toggle && occasion.name &&(
          <SeatChart
          occasion={occasion}
          contract={contract}
          provider={provider}
          setToggle={setToggle}
          /> 
         )}
        </div>
    </>
  ) 
}

export default App;
