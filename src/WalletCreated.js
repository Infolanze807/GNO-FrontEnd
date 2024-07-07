// import React from 'react';

// function WalletCreated() {
//   return (
//     <div>
//       <h1>Wallet Created Successfully!</h1>
//       <p>Your wallet has been created and the data has been saved.</p>
//     </div>
//   );
// }

// export default WalletCreated;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { decryptPrivateKey } from '../src/Utils/Crypto'; // Adjust path as per your project structure

// function WalletCreated() {
//   const [walletData, setWalletData] = useState(null);
//   const [error, setError] = useState(null);
//   const [address, setAddress] = useState('');
//   const [password, setPassword] = useState('');

//   const handleFetchWalletData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/wallet/${address}/${password}`); // Adjust endpoint as per your backend setup
//       setWalletData(response.data);
//     } catch (error) {
//       setError('Error fetching wallet data. Please check your wallet address and password.');
//     }
//   };

//   const decryptAndDisplayPrivateKey = () => {
//     if (walletData) {
//       try {
//         const decryptedPrivateKey = decryptPrivateKey(walletData.encryptedPrivateKey, walletData.password);
//         alert(`Wallet Address: ${walletData.address}\nPassword: ${walletData.password}\nDecrypted Private Key: ${decryptedPrivateKey}`);
//       } catch (error) {
//         console.error('Error decrypting private key:', error);
//         setError('Error decrypting private key.');
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Wallet Details</h1>
//       <div>
//         <label htmlFor="addressInput">Wallet Address:</label>
//         <input id="addressInput" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
//       </div>
//       <div>
//         <label htmlFor="passwordInput">Password:</label>
//         <input id="passwordInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <button onClick={handleFetchWalletData}>Fetch Wallet Data</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {walletData && (
//         <div>
//           <p>Wallet Address: {walletData.address}</p>
//           <p>Password: {walletData.password}</p>
//           <button onClick={decryptAndDisplayPrivateKey}>Show Private Key</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default WalletCreated;

import React, { useState } from 'react';
import axios from 'axios';
import { decryptPrivateKey } from '../src/Utils/Crypto'; // Adjust path as per your project structure

function WalletCreated() {
  const [walletData, setWalletData] = useState(null);
  const [error, setError] = useState(null);
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleFetchWalletData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/wallet/${address}/${password}`); // Adjust endpoint as per your backend setup
      setWalletData(response.data);
      setShowPrivateKey(false); // Reset showPrivateKey state on new fetch
    } catch (error) {
      setError('Error fetching wallet data. Please check your wallet address and password.');
    }
  };

  const decryptAndDisplayPrivateKey = () => {
    if (walletData) {
      try {
        const decryptedPrivateKey = decryptPrivateKey(walletData.encryptedPrivateKey, walletData.password);
        setShowPrivateKey(true);
        setCopied(false); // Reset copied state on new private key display
      } catch (error) {
        console.error('Error decrypting private key:', error);
        setError('Error decrypting private key.');
      }
    }
  };

  const handleCopyPrivateKey = () => {
    navigator.clipboard.writeText(decryptPrivateKey(walletData.encryptedPrivateKey, walletData.password))
      .then(() => setCopied(true))
      .catch(() => setError('Failed to copy private key. Please try again.'));
  };

  return (
    <div>
      <h1>Wallet Details</h1>
      <div>
        <label htmlFor="addressInput">Wallet Address:</label>
        <input id="addressInput" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <label htmlFor="passwordInput">Password:</label>
        <input id="passwordInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleFetchWalletData}>Fetch Wallet Data</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {walletData && (
        <div>
          <p>Wallet Address: {walletData.address}</p>
          <p>Password: {walletData.password}</p>
          {showPrivateKey && (
            <div>
              <p>Decrypted Private Key:</p>
              <textarea
                rows={5}
                readOnly
                value={decryptPrivateKey(walletData.encryptedPrivateKey, walletData.password)}
              />
              <button onClick={handleCopyPrivateKey}>{copied ? 'Copied!' : 'Copy Private Key'}</button>
            </div>
          )}
          <button onClick={decryptAndDisplayPrivateKey}>Show Private Key</button>
        </div>
      )}
    </div>
  );
}

export default WalletCreated;

