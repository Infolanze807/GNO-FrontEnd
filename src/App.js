// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import GenerateWallet from './GenerateWallet';
// import SetPassword from './SetPassword';
// import ValidatePassphrase from './ValidatePassphrase';

// function App() {
//   return (
//   <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<GenerateWallet />} />
//         <Route path="/set-password" element={<SetPassword />} />
//         <Route path="/validate-passphrase" element={<ValidatePassphrase />} />
//       </Routes>
//       </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import GenerateWallet from './GenerateWallet';
import SetPassword from './Components/SetPassword';
import ValidatePassphrase from './Components/ValidatePassphrase';
import WalletCreated from './Components/WalletCreated';
import Welcome from './Components/Welcome';
import Main from './Components/Main';
import Success from './Components/Success';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import logo from '../src/'

function App() {
  return (
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/validate-passphrase" element={<ValidatePassphrase />} />
        <Route path="/wallet-created" element={<WalletCreated />} />
        <Route path="/success" element={<Success />} />
        <Route path='/main' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
      </Routes>
      </BrowserRouter> 
  );
}

export default App;
