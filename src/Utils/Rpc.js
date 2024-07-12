// src/utils/rpc.js
// import { ethers } from 'ethers';
import Web3 from 'web3';

const GNOSIS_RPC_URL = 'https://rpc.gnosischain.com/';

// export const getProvider = () => {
//   return new ethers.providers.JsonRpcProvider(GNOSIS_RPC_URL);
// };

export const getWeb3 = () => {
  return new Web3(new Web3.providers.HttpProvider(GNOSIS_RPC_URL));  
};
