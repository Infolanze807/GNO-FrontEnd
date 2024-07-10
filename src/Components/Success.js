import React from 'react'

function Success() {
  return (
    <>
    <div className=" text-white flex flex-col items-center h-[100vh] md:h-[95vh] lg:h-[80vh] xl:h-[100vh] justify-center">
        <img
          src="../public/gno-wallet.png"
          className="mb-5 h-[50px] w-[50px]"
        />
        <div className="flex flex-col items-center justify-center bg-[--bg-color] border-[--border-color] border shadow-sm p-10 rounded-2xl w-[300px]  sm:w-[320px] md:w-[350px] lg:w-[400px] xl:w-[450px] ">
        <img
          src="../public/gno-wallet.png"
          className="mb-5 h-[40px] w-[40px]"
        />  
            <div className='text-center w-full '>
                <p className='text-lg'>Your Wallet is ready to use!</p>
                <p className='text-sm mt-2 text-gray-400'>Remember to backup and keep your Secret Phrase safe.</p>
                <p className='text-sm  text-gray-400'>Remember to backup and keep your Secret PrivateKey safe.</p>
            </div>
            <div className='w-full my-4'>
            <button className="bg-[--green-color] text-white text-base w-full rounded-full p-2 mt-4" >
                    Open Wallet
              </button>
            </div>
              </div>
        </div>
        
    </>
  )
}

export default Success