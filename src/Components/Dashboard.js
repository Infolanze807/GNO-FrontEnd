// import React, { useEffect, useState } from 'react'
// import Header from './Header'
// import Navbar from './Navbar';
// import { getWeb3 } from '../Utils/Rpc';

// function Dashboard({walletAddress}) {
//     useEffect(() => {
//         const fetchBalance = async () => {
//           if (!walletAddress) return;
    
//           try {
//             const web3 = getWeb3();
//             const balanceInWei = await web3.eth.getBalance(walletAddress);
//             const balanceInEth = web3.utils.fromWei(balanceInWei, 'ether');
//             setBalance(balanceInEth);
//           } catch (error) {
//             console.error("Error fetching balance:", error);
//           }
//         };
    
//         fetchBalance();
//       }, [walletAddress]);
    
//       const [navbar, setNavbar] = useState(false);
//       const [balance, setBalance] = useState(null);
    
    
//       const handleMenu = () => {
//         setNavbar((prev) => !prev);
//       };
    
//       return (
//         <>
//           <Header handleMenu={handleMenu} walletAddress={walletAddress}/>
//           <Navbar isOpen={navbar} handleMenu={handleMenu} />
//           <div className="flex flex-col items-center h-full md:h-[90vh] lg:h-[90vh] xl:h-[90vh]  py-8">
//           <div className="text-white text-xl md:text-2xl lg:text-3xl font-bold pb-5">$ : {balance !== null ? `${balance} xDAI` : "Loading..."}</div>
            
//           </div>
//         </>
//       );
//     }

// export default Dashboard

import React, { useEffect, useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import { getWeb3 } from '../Utils/Rpc';

function Dashboard({ walletAddress }) {
  useEffect(() => {
    const fetchBalance = async () => {
      if (!walletAddress) return;

      try {
        const web3 = getWeb3();
        const balanceInWei = await web3.eth.getBalance(walletAddress);
        const balanceInEth = web3.utils.fromWei(balanceInWei, 'ether');
        setBalance(balanceInEth);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();
  }, [walletAddress]);

  const [navbar, setNavbar] = useState(false);
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const handleMenu = () => {
    setNavbar((prev) => !prev);
  };

  // Mock data for transactions
  useEffect(() => {
    // Example of setting mock transactions
    const mockTransactions = [
      {
        number: 1,
        hash: '0x123abc...',
        from: '0xabc123...',
        to: '0xdef456...',
        amount: '1.5 xDAI',
      },
      {
        number: 2,
        hash: '0x456def...',
        from: '0xdef456...',
        to: '0xabc123...',
        amount: '0.75 xDAI',
      },
      // Add more transactions as needed
    ];

    setTransactions(mockTransactions); // Set your actual transaction data here
  }, []);

  return (
    <>
      <Header handleMenu={handleMenu} walletAddress={walletAddress} />
      <Navbar isOpen={navbar} handleMenu={handleMenu} />
      <div className="flex flex-col items-center h-full md:h-[90vh] lg:h-[90vh] xl:h-[90vh] py-8">
        <div className="text-white text-xl md:text-2xl lg:text-3xl font-bold pb-5">
          Balance: {balance !== null ? `${balance} xDAI` : "Loading..."}
        </div>
        <div className=''>
        <table className="">
            <caption className='text-xl font-bold text-white mb-4'>Transaction</caption>
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No.
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction Hash
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                From
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                To
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.hash}>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.number}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.hash}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.from}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.to}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
