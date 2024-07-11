import React, { useState } from "react";
import { IoMdArrowRoundUp, IoMdArrowRoundDown } from "react-icons/io";
import { MdSwapHorizontalCircle } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import Header from "./Header";
import Navbar from "./Navbar";

function Main({walletAddress}) {
  const [navbar, setNavbar] = useState(false);

  const handleMenu = () => {
    setNavbar((prev) => !prev);
  };

  return (
    <>
      <Header handleMenu={handleMenu} walletAddress={walletAddress}/>
      <Navbar isOpen={navbar} handleMenu={handleMenu} />
      <div className="flex flex-col items-center h-[100vh] md:h-[95vh] lg:h-[80vh] xl:h-[100vh] py-8">
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
