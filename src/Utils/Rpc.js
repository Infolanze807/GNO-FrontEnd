// src/utils/rpc.js
import { ethers } from 'ethers';

const GNOSIS_RPC_URL = 'https://rpc.gnosischain.com/';

export const getProvider = () => {
  return new ethers.providers.JsonRpcProvider(GNOSIS_RPC_URL);
};
