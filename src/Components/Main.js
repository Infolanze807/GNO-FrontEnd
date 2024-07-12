import React, { useState,useEffect } from "react";
import { IoMdArrowRoundUp, IoMdArrowRoundDown } from "react-icons/io";
import { MdSwapHorizontalCircle } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import Header from "./Header";
import Navbar from "./Navbar";
import { getWeb3 } from "../Utils/Rpc";

function Main({walletAddress}) {

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


  const handleMenu = () => {
    setNavbar((prev) => !prev);
  };

  return (
    <>
      <Header handleMenu={handleMenu} walletAddress={walletAddress}/>
      <Navbar isOpen={navbar} handleMenu={handleMenu} />
      <div className="flex flex-col items-center h-full md:h-[90vh] lg:h-[90vh] xl:h-[90vh] py-8">
      <div className="text-white text-xl md:text-2xl lg:text-3xl font-bold pb-5">$ : {balance !== null ? `${balance} xDAI` : "Loading..."}</div>
        <div className="grid grid-cols-4 xl:gap-8 lg:gap-6 md:gap-5 sm:gap-3 gap-2 text-black">
          <div className="flex flex-col items-center">
            <button className="lg:p-4 md:p-3 sm:p-2 p-2 bg-[--green-color] text-white text-4xl rounded-full">
              <IoMdArrowRoundUp />
            </button>
            <p className="text-white">Send</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="lg:p-4 md:p-3 sm:p-2 p-2 bg-[--green-color] text-white text-4xl rounded-full">
              <IoMdArrowRoundDown />
            </button>
            <p className="text-white">Receive</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="lg:p-4 md:p-3 sm:p-2 p-2 bg-[--green-color] text-white text-4xl rounded-full">
              <MdSwapHorizontalCircle />
            </button>
            <p className="text-white">Swap</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="lg:p-4 md:p-3 sm:p-2 p-2 bg-[--green-color] text-white text-4xl rounded-full">
              <CiCreditCard1 />
            </button>
            <p className="text-white">Buy & Sell</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
