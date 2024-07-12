// import React, { useState } from 'react';
// import axios from 'axios';
// import { decryptPrivateKey } from '../Utils/Crypto'; // Adjust path as per your project structure
// import logo from '../Images/gno-wallet.png'


// function WalletCreated() {
//   const [walletData, setWalletData] = useState(null);
//   const [error, setError] = useState(null);
//   const [address, setAddress] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPrivateKey, setShowPrivateKey] = useState(false);
//   const [copied, setCopied] = useState(false);

//   const handleFetchWalletData = async () => {
//     try {
//       const response = await axios.get(`https://gno-ten.vercel.app/wallet/${address}/${password}`); // Adjust endpoint as per your backend setup
//       setWalletData(response.data);
//       setShowPrivateKey(false); // Reset showPrivateKey state on new fetch
//     } catch (error) {
//       setError('Error fetching wallet data. Please check your wallet address and password.');
//     }
//   };

//   const decryptAndDisplayPrivateKey = () => {
//     if (walletData) {
//       try {
//         const decryptedPrivateKey = decryptPrivateKey(walletData.encryptedPrivateKey, walletData.password);
//         setShowPrivateKey(true);
//         setCopied(false); // Reset copied state on new private key display
//       } catch (error) {
//         console.error('Error decrypting private key:', error);
//         setError('Error decrypting private key.');
//       }
//     }
//   };

//   const handleCopyPrivateKey = () => {
//     navigator.clipboard.writeText(decryptPrivateKey(walletData.encryptedPrivateKey, walletData.password))
//       .then(() => setCopied(true))
//       .catch(() => setError('Failed to copy private key. Please try again.'));
//   };

//   return (
//     <div className=" text-white flex flex-col items-center h-[100vh] md:h-[95vh] lg:h-[80vh] xl:h-[100vh] justify-center">
//      <img
//           src={logo}
//           className="mb-5 h-[90px] w-[100px] shadow-custom"
//         />
//     <div className="flex flex-col items-center justify-center bg-[--bg-color] border-[--border-color] border shadow-sm p-4 rounded-2xl w-[300px] sm:w-[320px] md:w-[350px] lg:w-[400px] xl:w-[380px] ">
//     <div className='w-full'>
//       <h1>Wallet Details</h1>
//       <div>
//         {/* <label htmlFor="addressInput">Wallet Address:</label> */}
//         <input id="addressInput" type="text" 
//                 className="bg-[--border-color] my-4 text-base  rounded-sm b w-full h-[33px] px-2 focus:outline-[--green-color] outline-none"
//         placeholder='Wallet Address'
//         value={address} onChange={(e) => setAddress(e.target.value)} />
//       </div>
//       <div>
//         {/* <label htmlFor="passwordInput">Password:</label> */}
//         <input id="passwordInput" type="password"
//                 className="bg-[--border-color] w-full rounded-sm b h-[40px] px-2 focus:outline-[--green-color] outline-none"
//         placeholder='Password'
//         value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <button 
//                   className="bg-[--green-color] text-white text-base w-full rounded-full p-2 mt-4"
      
//       onClick={handleFetchWalletData}>Fetch Wallet Data</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {walletData && (
//         <div className='w-full'>
//           <div className='w-full'>
//           <p className='text-wrap'>Wallet Address: {walletData.address}</p>
//           <p>Password: {walletData.password}</p>
//           {showPrivateKey && (
//             <div>
//               <p>Decrypted Private Key:</p>
//               <textarea
//                 rows={3}
//                 readOnly
//                 className="bg-[--border-color] w-full  px-2 focus:outline-[--green-color] outline-none"

//                 value={decryptPrivateKey(walletData.encryptedPrivateKey, walletData.password)}
//               />
//               <button onClick={handleCopyPrivateKey}>{copied ? 'Copied!' : 'Copy Private Key'}</button>
//             </div>
//           )}
//           <button  onClick={decryptAndDisplayPrivateKey}>Show Private Key</button>
//         </div>
//         </div>
//       )}
      
//     </div>
//     </div>
//     </div>
//   );
// }

// export default WalletCreated;

import React, { useState } from "react";
import axios from "axios";
import { decryptPrivateKey } from "../Utils/Crypto"; // Adjust path as per your project structure
import logo from "../Images/gno-wallet.png";

function WalletCreated() {
  const [walletData, setWalletData] = useState(null);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleFetchWalletData = async () => {
    try {
      const response = await axios.get(`https://gno-ten.vercel.app/wallet/${password}`); // Adjust endpoint as per your backend setup
      setWalletData(response.data);
      setShowPrivateKey(false); // Reset showPrivateKey state on new fetch
      setError(null); // Reset error state on new fetch
    } catch (error) {
      setError("Error fetching wallet data. Please check your password.");
    }
  };

  const decryptAndDisplayPrivateKey = () => {
    if (walletData) {
      try {
        const decryptedPrivateKey = decryptPrivateKey(walletData.encryptedPrivateKey, password);
        setShowPrivateKey(true);
        setCopied(false); // Reset copied state on new private key display
      } catch (error) {
        console.error("Error decrypting private key:", error);
        setError("Error decrypting private key.");
      }
    }
  };

  const handleCopyPrivateKey = () => {
    if (walletData) {
      navigator.clipboard.writeText(decryptPrivateKey(walletData.encryptedPrivateKey, password))
        .then(() => setCopied(true))
        .catch(() => setError("Failed to copy private key. Please try again."));
    }
  };

  return (
    <div className="text-white flex flex-col items-center h-[100vh] md:h-[95vh] lg:h-[80vh] xl:h-[100vh] justify-center">
      <img src={logo} className="mb-5 h-[90px] w-[100px] shadow-custom" alt="logo" />
      <div className="flex flex-col items-center justify-center bg-[--bg-color] border-[--border-color] border shadow-sm p-4 rounded-2xl w-[300px] sm:w-[320px] md:w-[350px] lg:w-[350px] xl:w-[350px]">
        <div className="w-full">
          <h1>Wallet Details</h1>
          <div>
            <input
              id="passwordInput"
              type="password"
              className="bg-[--input-color] w-full h-[40px] px-2 rounded-sm focus:outline-[--green-color] outline-none b"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-[--green-color] text-white text-base w-full rounded-full p-2 mt-4"
            onClick={handleFetchWalletData}
          >
            Fetch Wallet Data
          </button>

          {error && <p style={{ color: "red" }}>{error}</p>}

          {walletData && (
            <div className="w-full">
              <p className="text-wrap">Wallet Address: <br /> {walletData.address}</p>
              <p>Password:<br /> {password}</p>
              {showPrivateKey && (
                <div>
                  <p>Decrypted Private Key:</p>
                  <textarea
                    rows={3}
                    readOnly
                    className="bg-[--border-color] w-full px-2 focus:outline-[--green-color] outline-none"
                    value={decryptPrivateKey(walletData.encryptedPrivateKey, password)}
                  />
                  <button onClick={handleCopyPrivateKey}>
                    {copied ? "Copied!" : "Copy Private Key"}
                  </button>
                </div>
              )}
              <button onClick={decryptAndDisplayPrivateKey}>
                Show Private Key
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WalletCreated;
