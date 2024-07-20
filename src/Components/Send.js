import React, { useState } from "react";
import { useFormik } from "formik";
import { PiEyeFill, PiEyeSlashFill } from "react-icons/pi";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import { getWeb3 } from "../Utils/Rpc";
import { decryptPrivateKey } from "../Utils/Crypto"; // Adjust path as per your project structure

function Send({ walletAddress, balance }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [privateKey, setPrivateKey] = useState("");
  const [error, setError] = useState(null);
  const [txHash, setTxHash] = useState("");
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordModal = () => {
    setShowPasswordModal(!showPasswordModal);
    setPassword(""); // Clear password field when modal toggles
  };

  const fetchPrivateKey = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND}/wallet/${walletAddress}/${password}`);
      const encryptedPrivateKey = response.data.encryptedPrivateKey;
      const decryptedPrivateKey = decryptPrivateKey(encryptedPrivateKey, password);
      setPrivateKey(decryptedPrivateKey);
      setError(null);
      togglePasswordModal(); // Close the modal after successful fetch
      formik.handleSubmit(); // Proceed to send transaction after fetching private key
    } catch (error) {
      setError("Error fetching or decrypting private key. Please try again.");
    }
  };

  const sendTransaction = async (values) => {
    try {
      const web3 = getWeb3(); // Ensure getWeb3 is a function and invoke it
      const amountWei = web3.utils.toWei(values.amount, "ether");

      const nonce = await web3.eth.getTransactionCount(walletAddress, "latest");
      const gasPrice = await web3.eth.getGasPrice();
      const gasLimit = 21000; // Basic transaction gas limit

      const tx = {
        from: walletAddress,
        to: values.walletAddress,
        value: amountWei,
        gas: gasLimit,
        gasPrice: gasPrice,
        nonce: nonce,
      };

      // Sign transaction with private key
      const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

      // Send signed transaction
      const txHash = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
      setTxHash(txHash.transactionHash);

      alert("Transaction sent successfully!");
      formik.resetForm(); // Assuming you have access to formik here
    } catch (error) {
      console.error("Failed to send transaction:", error);
      alert("Failed to send transaction.");
    }
  };

  const formik = useFormik({
    initialValues: {
      walletAddress: "",
      amount: "",
    },
    validationSchema: Yup.object({
      walletAddress: Yup.string().required("Required"),
      amount: Yup.number()
        .required("Required")
        .test("is-sufficient", "Insufficient balance", function (value) {
          return parseFloat(value) <= parseFloat(balance);
        }),
    }),
    onSubmit: (values) => {
      sendTransaction(values);
    },
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <>
      <div className="text-white flex flex-col items-center h-[100vh] md:h-[95vh] lg:h-[80vh] xl:h-[100vh] justify-center">
        <div className="flex flex-col items-center justify-center bg-[--bg-color] border-[--border-color] border shadow-sm p-5 rounded-2xl w-[300px] sm:w-[320px] md:w-[350px] lg:w-[350px] xl:w-[400px]">
          <div className="w-full">
            <h1>Send Transaction</h1>
            <div>
              <input
                type="text"
                placeholder="Recipient Wallet Address"
                className="bg-[--input-color] w-full h-[40px] px-2 rounded-sm focus:outline-[--green-color] b"
                id="walletAddress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.walletAddress}
              />
              {formik.touched.walletAddress && formik.errors.walletAddress ? (
                <div className="text-red-500">{formik.errors.walletAddress}</div>
              ) : null}
            </div>
            <div className="w-full mt-4">
              <input
                type="text"
                placeholder="Amount (in ETH)"
                className="bg-[--input-color] w-full h-[40px] px-2 rounded-sm focus:outline-[--green-color] b"
                id="amount"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.amount}
              />
              {formik.touched.amount && formik.errors.amount ? (
                <div className="text-red-500">{formik.errors.amount}</div>
              ) : null}
            </div>
            <button
              type="button"
              className="bg-[--green-color] text-white text-base w-full rounded-full p-2 mt-4"
              onClick={togglePasswordModal}
            >
              {password ? "Resend Transaction" : "Send Transaction"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </div>
        {txHash &&( <p>Transaction Hash:{txHash}</p>)}
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg w-[300px] h-[200px] lg:h-[200px] lg:w-[320px]">
            <h2 className="mb-4">Enter Password to Fetch Private Key</h2>
            <div className="relative">
            {passwordVisible ? (
                <PiEyeFill onClick={togglePasswordVisibility} className="absolute top-3 right-2 text-[--green-color] font-bold cursor-pointer" />
              ) : (
                <PiEyeSlashFill onClick={togglePasswordVisibility} className="absolute top-3 right-2 text-[--green-color] font-bold cursor-pointer" />
              )}
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="bg-transparent border border-[--border-color] w-full h-[40px] px-2 rounded-sm focus:outline-[--green-color] b"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="grid grid-cols-2 pt-8">
              <button
                className="bg-[--green-color] text-white px-4 py-2 rounded-full"
                onClick={fetchPrivateKey}
              >
                Confirm
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-full ml-2"
                onClick={togglePasswordModal}
              >
                Cancel
              </button>
            </div>
          </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Send;