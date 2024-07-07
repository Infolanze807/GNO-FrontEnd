// // import React, { useState, useEffect } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import { encryptPrivateKey } from '../src/Utils/Crypto';
// // import axios from 'axios';

// // function ValidatePassphrase() {
// //   const [selectedWords, setSelectedWords] = useState(['', '', '', '']); // Initialize with empty strings
// //   const [validationWords, setValidationWords] = useState([]);
// //   const [validationError, setValidationError] = useState('');
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const { wallet, password } = location.state;

// //   useEffect(() => {
// //     const words = wallet.phrase.split(' '); // Split passphrase by spaces
// //     setValidationWords(words.slice(0, 4)); // Select first 4 words for validation
// //   }, [wallet]);

// //   const handleValidatePassphrase = async () => {
// //     console.log('Validation Words:', validationWords);
// //     console.log('Selected Words:', selectedWords);

// //     const isValid = validationWords.every((word, index) => selectedWords[index].trim() === word.trim());

// //     console.log('Validation Result:', isValid);

// //     if (isValid) {
// //       const encryptedPrivateKey = encryptPrivateKey(wallet.privateKey, password);
// //       const walletData = {
// //         address: wallet.address,
// //         encryptedPrivateKey,
// //         password,
// //       };
// //       try {
// //         await axios.post('http://localhost:5000/wallet', walletData);
// //         navigate('/wallet-created');
// //       } catch (error) {
// //         console.error('Error creating wallet:', error);
// //         setValidationError('Error creating wallet. Please try again.');
// //       }
// //     } else {
// //       setValidationError("The entered words do not match the passphrase.");
// //     }
// //   };

// //   const handleInputChange = (index, value) => {
// //     const updatedWords = [...selectedWords];
// //     updatedWords[index] = value;
// //     setSelectedWords(updatedWords);
// //     setValidationError(''); // Clear error message when user starts correcting input
// //   };

// //   return (
// //     <div>
// //       <p>Full Passphrase: {wallet.phrase}</p>
// //       {validationWords.map((word, index) => (
// //         <input
// //           key={index}
// //           type="text"
// //           placeholder={`Word ${index + 1}`}
// //           value={selectedWords[index]}
// //           onChange={(e) => handleInputChange(index, e.target.value)}
// //         />
// //       ))}
// //       {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
// //       <button onClick={handleValidatePassphrase}>Create Wallet</button>
// //     </div>
// //   );
// // }

// // export default ValidatePassphrase;

// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { encryptPrivateKey } from '../src/Utils/Crypto';
// import axios from 'axios';

// function ValidatePassphrase() {
//   const [selectedWords, setSelectedWords] = useState(['', '', '', '']); // Initialize with empty strings
//   const [validationIndexes, setValidationIndexes] = useState([]);
//   const [validationError, setValidationError] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { wallet, password } = location.state;

//   useEffect(() => {
//     const words = wallet.phrase.split(' '); // Split passphrase by spaces
//     const shuffledIndexes = [1, 3, 5, 7]; // Example: Choose indexes to hide
//     setValidationIndexes(shuffledIndexes); // Set indexes for validation
//   }, [wallet]);

//   const handleValidatePassphrase = async () => {
//     // Create an array with the filled words based on validationIndexes
//     const filledWords = validationIndexes.map(index => selectedWords[index].trim());
//     // Create an array with the full passphrase words
//     const fullPassphraseWords = wallet.phrase.split(' ').map(word => word.trim());

//     // Check if filled words match the corresponding words in the full passphrase
//     const isValid = validationIndexes.every((index, i) => filledWords[i] === fullPassphraseWords[index]);

//     if (isValid) {
//       const encryptedPrivateKey = encryptPrivateKey(wallet.privateKey, password);
//       const walletData = {
//         address: wallet.address,
//         encryptedPrivateKey,
//         password,
//       };
//       try {
//         await axios.post('http://localhost:5000/wallet', walletData);
//         navigate('/wallet-created');
//       } catch (error) {
//         console.error('Error creating wallet:', error);
//         setValidationError('Error creating wallet. Please try again.');
//       }
//     } else {
//       setValidationError("The entered words do not match the passphrase.");
//     }
//   };

//   const handleInputChange = (index, value) => {
//     const updatedWords = [...selectedWords];
//     updatedWords[index] = value;
//     setSelectedWords(updatedWords);
//     setValidationError(''); // Clear error message when user starts correcting input
//   };

//   return (
//     <div>
//       <p>Full Passphrase:</p>
//       <div style={{ marginBottom: '10px' }}>
//         {wallet.phrase.split(' ').map((word, index) => (
//           <span key={index}>
//             {validationIndexes.includes(index) ? (
//               <input
//                 type="text"
//                 placeholder={`Word ${index + 1}`}
//                 value={selectedWords[index]}
//                 onChange={(e) => handleInputChange(index, e.target.value)}
//               />
//             ) : (
//               <span>{word} </span>
//             )}
//           </span>
//         ))}
//       </div>
//       <p>Full Passphrase Visible:</p>
//       <div style={{ marginBottom: '10px' }}>
//         {wallet.phrase}
//       </div>
//       {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
//       <button onClick={handleValidatePassphrase}>Create Wallet</button>
//     </div>
//   );
// }

// export default ValidatePassphrase;

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { encryptPrivateKey } from '../src/Utils/Crypto';
import axios from 'axios';

function ValidatePassphrase() {
  const [selectedWords, setSelectedWords] = useState([]); // Initialize with an empty array
  const [validationIndexes, setValidationIndexes] = useState([]);
  const [validationError, setValidationError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { wallet, password } = location.state;

  useEffect(() => {
    const words = wallet.phrase.split(' '); // Split passphrase by spaces
    const shuffledIndexes = [1, 3, 5, 7]; // Example: Choose indexes to hide
    setValidationIndexes(shuffledIndexes); // Set indexes for validation
    setSelectedWords(Array(words.length).fill('')); // Initialize with empty strings
  }, [wallet]);

  const handleValidatePassphrase = async () => {
    // Create an array with the filled words based on validationIndexes
    const filledWords = validationIndexes.map(index => selectedWords[index]?.trim());
    // Create an array with the full passphrase words
    const fullPassphraseWords = wallet.phrase.split(' ').map(word => word.trim());

    // Check if filled words match the corresponding words in the full passphrase
    const isValid = validationIndexes.every((index, i) => filledWords[i] === fullPassphraseWords[index]);

    if (isValid) {
      const encryptedPrivateKey = encryptPrivateKey(wallet.privateKey, password);
      const walletData = {
        address: wallet.address,
        encryptedPrivateKey,
        password,
      };
      try {
        await axios.post('http://localhost:5000/wallet', walletData);
        navigate('/wallet-created');
      } catch (error) {
        console.error('Error creating wallet:', error);
        setValidationError('Error creating wallet. Please try again.');
      }
    } else {
      setValidationError("The entered words do not match the passphrase.");
    }
  };

  const handleInputChange = (index, value) => {
    const updatedWords = [...selectedWords];
    updatedWords[index] = value;
    setSelectedWords(updatedWords);
    setValidationError(''); // Clear error message when user starts correcting input
  };

  return (
    <div className="text-white flex flex-col items-center h-[100vh] md:h-[95vh] lg:h-[80vh] xl:h-[100vh] justify-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH8ST6Yay0nq4aV9GjLq6gyMQKzZE4TCmfDw&s"
        className="mb-5 h-[50px] w-[50px]"
        alt="Logo"
      />
      <div className="flex flex-col items-center justify-center bg-[--bg-color] border-[--border-color] border shadow-sm p-10 rounded-2xl w-[300px] sm:w-[320px] md:w-[350px] lg:w-[400px] xl:w-[450px]">
        <h1 className="pb-10 text-xl">Validate Passphrase Words</h1>
        <div className='w-full border-2 border-[--green-color] my-5'>
          <p className='p-3 text-balance text-center text-gray-400'>{wallet.phrase}</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {wallet.phrase.split(' ').map((word, index) => (
            validationIndexes.includes(index) ? (
              <input
                key={index}
                type="text"
                placeholder={`Word ${index + 1}`}
                className="bg-gray-600 outline-none p-2"
                value={selectedWords[index] || ''}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            ) : (
              <input
                key={index}
                type="text"
                className="bg-gray-600 outline-none p-2"
                value={word}
                readOnly
              />
            )
          ))}
        </div>
        {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
        <button
          onClick={handleValidatePassphrase}
          className="bg-[--green-color] text-white text-base w-full rounded-full p-2 mt-4"
        >
          Create Wallet
        </button>
      </div>
    </div>
  );
}

export default ValidatePassphrase;
