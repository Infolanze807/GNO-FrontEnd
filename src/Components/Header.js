import React from 'react';
import { FaBars } from 'react-icons/fa';

const Header = ({ handleMenu,walletAddress}) => {
//   const formatWalletAddress = (address) => {
//     if (address.length < 8) return address; 
//     const firstFour = address.substring(0, 4);
//     const lastFour = address.substring(address.length - 4);
//     return `${firstFour}....${lastFour}`; 
//   };

  return (
    <div className="grid grid-cols-12 p-3 mt-4 mx-3 md:mx-5 lg:mx-8 justify-stretch rounded-xl items-center bg-[--green-color]">
      <div className="col-span-4 flex text-white items-center">
        <img
          className="bg-white h-[45px] w-[45px] p-[6px] rounded-full"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAKlBMVEU+aVdHcEw+aVc9Z1U+aVc+aVc9aFY+aVc+aVc9aFY9aFY+aVc9aFY9aFa0wS0JAAAADnRSTlP/AIIU7Mhh3LkuO5wfSHwab1sAAAD3SURBVCiRdZProoQgCIQHvGHq+7/uAdTWdjvzw4pPx0AEbVVOEYiJ6x3CemYFQCk2xvyAQYMyZmSITgofeAEp3GYUFF8bKsv0UAbGgkCjLzVgwQDwkzEQHObyQ52VrDAifVFnCZFQYfYnnZ6a9wW2X5WDznX2w4yk7+NwXp5Dc1BnddVZmy6mboBXtHZsuhm6xUzNcoZn5DnoKGYx11ZiTagbDdQFkak7Mg/MA2nUO81KDosm+HLExmL72n7CzY9VUcWhJOdXtfL9o0ie5Lus8FTeWfHzDO8w3G3yq+tosDd2tOZjv6M176ZeOTyb2lRZ7DrIcR3+APX8BR6lfT+rAAAAAElFTkSuQmCC"
          alt="Logo"
        />
        {/* <p className='pl-3'>{formatWalletAddress(walletAddress)}</p> */}
        <p className='pl-3'>{walletAddress}</p>
      </div>
      <div className="col-span-8 flex text-white items-center justify-end">
        <button onClick={handleMenu}>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default Header;
