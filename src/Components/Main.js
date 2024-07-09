import React from "react";
import { IoMdArrowRoundUp ,IoMdArrowRoundDown} from "react-icons/io";
import { MdSwapHorizontalCircle } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import Navbar from "./Navbar";

function Main() {
  return (
    <div className="">
      <div className="grid grid-cols-12 p-3 mt-4 mx-3 md:mx-5 lg:mx-8 justify-stretch rounded-xl items-center bg-[--green-color]">
        <div className="col-span-4 flex text-white gap-3 items-center">
          <div>
          <img
            className="bg-white h-[45px] w-[45px] p-[6px] rounded-full"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAKlBMVEU+aVdHcEw+aVc9Z1U+aVc+aVc9aFY+aVc+aVc9aFY9aFY+aVc9aFY9aFa0wS0JAAAADnRSTlP/AIIU7Mhh3LkuO5wfSHwab1sAAAD3SURBVCiRdZProoQgCIQHvGHq+7/uAdTWdjvzw4pPx0AEbVVOEYiJ6x3CemYFQCk2xvyAQYMyZmSITgofeAEp3GYUFF8bKsv0UAbGgkCjLzVgwQDwkzEQHObyQ52VrDAifVFnCZFQYfYnnZ6a9wW2X5WDznX2w4yk7+NwXp5Dc1BnddVZmy6mboBXtHZsuhm6xUzNcoZn5DnoKGYx11ZiTagbDdQFkak7Mg/MA2nUO81KDosm+HLExmL72n7CzY9VUcWhJOdXtfL9o0ie5Lus8FTeWfHzDO8w3G3yq+tosDd2tOZjv6M176ZeOTyb2lRZ7DrIcR3+APX8BR6lfT+rAAAAAElFTkSuQmCC"
          />
          </div>
          <div>
            <Navbar/>
          </div>
        </div>
      </div>
      <div className=" text-white flex flex-col items-center h-[100vh] md:h-[95vh] lg:h-[80vh] xl:h-[100vh] m-5">
    
      <div class="flex flex-col space-y-4 w-[440px] pb-3">
        <div class="flex items-center space-x-3">
          <div class="">
            <h2 class="massive-text text-textPrimary font-semibold transition-all ease-in-out duration-300">
              $0.00
            </h2>
          </div>
          <div>
            <div
              data-tooltip-id="refresh-balance-tooltip-7"
              data-tooltip-content="Refresh"
            >
              <div
                class="flex w-full"
                data-tooltip-id="button-tooltip-8"
                data-tooltip-place="top-end"
              >
                <button
                  data-testid="refresh-wallet-button"
                  type="button"
                  class="outline-none bg-transparent text-backgroundPrimary circle-button  p-0 w-full"
                >
                  <svg
                    class="text-iconNormal  -scale-100"
                    fill="none"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.6631 10.1751C16.6646 10.1169 16.6654 10.0585 16.6654 9.99992C16.6654 9.94134 16.6646 9.88294 16.6631 9.82472V10.1751ZM12.944 12.9475L10.7705 10.774H16.6631V16.6666L14.7116 14.7151C13.5053 15.9209 11.8391 16.6666 9.9987 16.6666C6.89226 16.6666 4.28207 14.5419 3.54203 11.6665H6.1791C6.82204 13.1381 8.29047 14.1666 9.9991 14.1666C11.149 14.1666 12.1901 13.7008 12.944 12.9475ZM16.4553 8.33325C15.7153 5.45787 13.1051 3.33325 9.9987 3.33325C8.15802 3.33325 6.49156 4.07923 5.28518 5.28535L3.33308 3.33325V9.22581H9.22564L7.05315 7.05332C7.80714 6.29949 8.84867 5.83325 9.9991 5.83325C11.7077 5.83325 13.1761 6.86166 13.8191 8.33325H16.4553ZM3.33203 9.99992C3.33203 9.95686 3.33244 9.91391 3.33325 9.87105V10.1288C3.33244 10.0859 3.33203 10.043 3.33203 9.99992Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div className="flex items-center justify-between px-5">
            <div className="flex flex-col space-y-2 items-center">
              <div
                data-tooltip-id="circle-action-tooltip-9"
                data-tooltip-place="top"
                className="text-white"
              >
                <div
                  className="flex w-full"
                  data-tooltip-id="button-tooltip-10"
                  data-tooltip-place="top-end"
                >
                  <button
                    data-testid="wallet-board-send-button"
                    type="button"
                    className="bg-[--green-color] rounded-full p-3"
                  >
                    <IoMdArrowRoundUp className="text-white text-[40px]"/>
                  </button>
                </div>
              </div>
              <div>
                <p className="text-white">
                  Send
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-center">
              <div
                data-tooltip-id="circle-action-tooltip-11"
                data-tooltip-place="top"
              >
                <div
                  className="flex w-full"
                  data-tooltip-id="button-tooltip-12"
                  data-tooltip-place="top-end"
                >
                  <button
                    data-testid="wallet-board-receive-button"
                    type="button"
                     className="bg-[--green-color] rounded-full p-3"
                  >
                   <IoMdArrowRoundDown className="text-white text-[40px]"/>
                  </button>
                </div>
              </div>
              <div>
                <p className="text-white">
                  Receive
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-center">
              <div
                data-tooltip-id="circle-action-tooltip-13"
                data-tooltip-place="top"
              >
                <div
                  className="flex w-full"
                  data-tooltip-id="button-tooltip-14"
                  data-tooltip-place="top-end"
                >
                  <button
                    data-testid="wallet-board-swap-button"
                    type="button"
                     className="bg-[--green-color] rounded-full p-3"
                  >
                    <MdSwapHorizontalCircle className="text-white text-[40px]"/>
                  </button>
                </div>
              </div>
              <div>
                <p className="text-white">
                  Swap
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-center">
              <div
                data-tooltip-id="circle-action-tooltip-15"
                data-tooltip-place="top"
              >
                <div
                  className="flex w-full"
                  data-tooltip-id="button-tooltip-16"
                  data-tooltip-place="top-end"
                >
                  <button
                    data-testid="wallet-board-buy-sell-button"
                    type="button"
                    className="bg-[--green-color] rounded-full p-3"
                  >
                   <CiCreditCard1 className="text-white text-[40px] " />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-white ">
                  Buy &amp; Sell
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Main;

  {/* <div className='grid grid-cols-4 text-white place'>
                    <div className='col-span-1'><HiArrowCircleUp />
                    <p>Send</p>
                    </div>
                    <div className='col-span-1'><HiArrowCircleDown />
                    <p>Receive</p>
                    </div>
                    <div className='col-span-1 justify-center'><MdSwapHorizontalCircle />
                   <p>Swap</p>
                    </div>
                    <div className='col-span-1'><CiCreditCard1 />
                    <p>Buy & Sell</p>
                    </div>
              </div> */}
      {/* <div className='grid grid-cols-12 text-center text-[30px] '>
                <div className='col-span-3'>
<i><HiArrowCircleUp /></i>
<h1>1</h1>
                </div>
                <div className='col-span-3'>
                <i><HiArrowCircleDown /></i>
                <h1>1</h1>
                </div>
                <div className='col-span-3'>
                <i><MdSwapHorizontalCircle /></i>
                <h1>1</h1>
                </div>
                <div className='col-span-3'>
                <i><CiCreditCard1 /></i>
                <h1>1</h1>
                </div>
              </div> */}
