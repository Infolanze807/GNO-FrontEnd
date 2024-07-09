import React, { useState } from "react";
import { FaBars, FaTimes,FaWallet, FaLink, FaBan, FaKey, FaLanguage, FaBell,FaAngleRight } from "react-icons/fa";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const handleMenu=()=>{
    setNavbar((prev)=> !prev)
    console.log(navbar);
  }
  return (
    <>
      <div className="text-white ">
        <button
          type="button"
          className=" p-2 absolute right-7  top-8 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          onClick={handleMenu}
        >   
           <FaBars />
        </button>
        {navbar?(<div className="absolute  h-full w-full left-0 bg-black z-10 top-0">
          <button
          type="button"
          className=" p-2 absolute right-0  rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          onClick={handleMenu}
        >
          <FaTimes />
        </button>
        <nav className="bg-gray-800 text-white p-4 h-full">
      <ul className="flex flex-col ">
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <FaWallet className="mr-2" />
            Manage Wallets
          </div>
          <FaAngleRight />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <FaLink className="mr-2" />
            Connected dApps
          </div>
          <FaAngleRight />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <FaBan className="mr-2" />
            Blocked dApps
          </div>
          <FaAngleRight />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <FaKey className="mr-2" />
            View Secret Phrase
          </div>
          <FaAngleRight />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <FaLanguage className="mr-2" />
            Language
          </div>
          <FaAngleRight />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <FaBell className="mr-2" />
            Notifications
          </div>
          <FaAngleRight />
        </li>
      </ul>
    </nav>
        </div>):null}
        
      </div>
    </>
  );
}

export default Navbar;
