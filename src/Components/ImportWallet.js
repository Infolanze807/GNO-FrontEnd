import React, { useState } from "react";
import logo from "../Images/gno-wallet.png";
import { Link } from "react-router-dom";
import DropDownPhrase from "./DropDownPhrase";
import DropDownPrivateKey from "./DropDownPrivateKey";

function ImportWallet() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropDownChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className=" text-white flex flex-col items-center h-full md:h-[95vh] lg:h-[80vh] xl:h-[100vh] justify-center">
        <img src={logo} className="mb-5 h-[90px] w-[100px] shadow-custom" />
        <div className="flex flex-col items-center justify-center bg-[--bg-color] border-[--border-color] border shadow-sm rounded-2xl p-4 w-[300px] sm:w-[320px] md:w-[350px] lg:w-[350px] xl:w-[350px] ">
          <div className="border-t-2 border-t-[--green-color] border-b-2 border-b-[--green-color]   w-full py-3">
            <div>
              <select onChange={handleDropDownChange} value={selectedOption} className="bg-[--border-color] h-[35px] px-2 w-full text-sm rounded-sm focus:outline-[--green-color] outline-none b">
              <option
                  value=""
                  disabled selected
                  className="text-sm accent-slate-900 "
                >
                 Select
                </option>
                <option
                  value="option 1"
                  className="text-sm"
                >
                  I Have a 12 word Secret Phrase
                </option>
                <option value="option 2" className="text-sm">
                  I Have a Private Key
                </option>
              </select>
              {selectedOption=="option 1" && ( 
                <div className="pt-5">
                <DropDownPhrase/>
                </div>
              )}
              {selectedOption=="option 2" && ( 
              <div className="pt-5">
                <DropDownPrivateKey/>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImportWallet;
