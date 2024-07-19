import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import SetPassword from './Components/SetPassword';
import ValidatePassphrase from './Components/ValidatePassphrase';
import WalletCreated from './Components/WalletCreated';
import Welcome from './Components/Welcome';
import Main from './Components/Main';
import Success from './Components/Success';
import Login from './Components/Login';
import ImportWallet from './Components/ImportWallet';
import Dashboard from './Components/Dashboard';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  const [walletAddress, setWalletAddress] = useState("");
  const setFunctionData = (Address) => {
       setWalletAddress(Address)

  }
  return (
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Welcome />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/validate-passphrase" element={<ValidatePassphrase />} />
        <Route path="/wallet-created" element={<WalletCreated />} />
        <Route path="/success" element={<Success />} />
        <Route path='/main' element={<Main walletAddress = {walletAddress}/>}/>
        <Route path='/login' element={<Login setFunctionData={setFunctionData} />}/>
        <Route path='/importWallet' element={<ImportWallet/>}/>
        <Route path='/dash' element={<Dashboard/>}/>

      </Routes>
      </BrowserRouter> 
  );
}

export default App;
