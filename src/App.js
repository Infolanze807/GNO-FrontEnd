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
import SetPassword from './SetPassword';
import ValidatePassphrase from './ValidatePassphrase';
import WalletCreated from './WalletCreated';

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<GenerateWallet />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/validate-passphrase" element={<ValidatePassphrase />} />
        <Route path="/wallet-created" element={<WalletCreated />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
