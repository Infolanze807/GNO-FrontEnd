import React, { useState,useEffect } from "react";
import { IoMdArrowRoundUp, IoMdArrowRoundDown } from "react-icons/io";
import { MdSwapHorizontalCircle } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import Header from "./Header";
import Navbar from "./Navbar";
import { getWeb3 } from "../Utils/Rpc";
import Send from "./Send";
import Receive from "./Receive";

function Main({walletAddress}) {
  const [navbar, setNavbar] = useState(false);
  const [balance, setBalance] = useState(null);
  const [send,setSend]=useState(false);
  const [receive,setReceive]=useState(false);
  const [swap,setSwap]=useState(false);
  const [buy_sell,setBuy_Sell]=useState(false);

  const showSend = ()=>{
    setSend(true);
    setReceive(false);
    setSwap(false);
    setBuy_Sell(false);
  }
  const showReceive = ()=>{
    setSend(false);
    setReceive(true);
    setSwap(false);
    setBuy_Sell(false);
  }
  const showSwap = ()=>{
    setSend(false);
    setReceive(false);
    setSwap(true);
    setBuy_Sell(false);
  }
  const showBuy_Sell = ()=>{
    setSend(false);
    setReceive(false);
    setSwap(false);
    setBuy_Sell(true);
  }

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
            <button onClick={showSend} className="lg:p-4 md:p-3 sm:p-2 p-2 bg-[--green-color] text-white text-4xl rounded-full">
              <IoMdArrowRoundUp />
            </button>
            <p className="text-white">Send</p>
          </div>
          <div className="flex flex-col items-center">
            <button onClick={showReceive} className="lg:p-4 md:p-3 sm:p-2 p-2 bg-[--green-color] text-white text-4xl rounded-full">
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
        {send && <Send/>}
        {receive && <Receive/>}
      </div>
    </>
  );
}

export default Main;
