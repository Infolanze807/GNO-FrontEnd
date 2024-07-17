import React from 'react'
import logo from '../Images/gno-wallet.png';


function Receive() {
  return (
    <>
    <div className="text-white flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[90vh] xl:h-[90vh] justify-center">
        {/* <img
          src={logo}
          className="mb-5 h-[90px] w-[100px] shadow-custom"
        /> */}
        <div className="flex flex-col items-center justify-center bg-white border-[--border-color] border shadow-sm p-4 gap-3 rounded-2xl w-[300px] sm:w-[320px] md:w-[350px] lg:w-[350px] xl:w-[350px]">
          <div className='bg-[--bg-color] h-[200px] w-[200px] '>
           <img
          src={logo}
          className="mb-5 h-full w-full object-fill"
        />
          </div>
          <div className='w-full'>
            <textarea className='bg-[--bg-color] w-full text-white'/>
          </div>
            </div>
        </div>
    </>
)
}

export default Receive