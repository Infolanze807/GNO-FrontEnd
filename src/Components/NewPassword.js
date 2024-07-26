import React, { useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { PiEyeFill, PiEyeSlashFill } from "react-icons/pi";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from '../Images/gno-wallet.png';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { ethers } from "ethers";
import {encryptPrivateKey} from "../Utils/Crypto"

function NewPassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [validations, setValidations] = useState({
    length: false,
    upperCase: false,
    digit: false,
    symbol: false,
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { seedPhrase } = location.state;

  const validatePassword = (password) => {
    setValidations({
      length: password.length >= 8,
      upperCase: /[A-Z]/.test(password),
      digit: /\d/.test(password),
      symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords do not match')
        .required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        // Extract private key from seed phrase
        const wallet = ethers.Wallet.fromPhrase(seedPhrase);
        const address = wallet.address;
        const privateKey = wallet.privateKey;

        // Encrypt private key
        const encryptedPrivateKey = encryptPrivateKey(privateKey, values.password);

        // Send request to backend to create or update wallet
        const response = await axios.post(`${process.env.REACT_APP_BACKEND}/wallet`, {
          address,
          encryptedPrivateKey,
          password: values.password,
        });

        if (response.data.message === "Password updated successfully!" || response.data.message === "Wallet created successfully!") {
          alert(response.data.message);
          const {address,_id} = response.data.wallet;
          const WalletDatas = {Wallet_address:address,User_id:_id}
          localStorage.setItem("Wallet Data:",JSON.stringify(WalletDatas))
          navigate('/login'); // Navigate to login page after successful operation
        }
      } catch (error) {
        console.error('Error setting password:', error);
      }
    },
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const isFormValid = () => {
    return (
      validations.length &&
      validations.upperCase &&
      validations.digit &&
      validations.symbol &&
      termsAccepted &&
      formik.values.password === formik.values.confirmPassword &&
      formik.values.password.length > 0 &&
      formik.values.confirmPassword.length > 0
    );
  };

  return (
    <>
      <div className="text-white flex flex-col items-center h-[80vh] md:h-[90vh] lg:h-[90vh] xl:h-[90vh] justify-center">
        <img
          src={logo}
          className="mb-5 h-[90px] w-[100px] shadow-custom"
        />
        <div className="flex flex-col items-center justify-center bg-[--bg-color] border-[--border-color] border shadow-sm p-4 gap-3 rounded-2xl w-[300px] sm:w-[320px] md:w-[350px] lg:w-[350px] xl:w-[350px]">
          <h1 className="text-base">Set Password</h1>
          <p className="text-xs text-gray-400 text-center">
            This password is used to protect your wallet and provide access to
            the browser extension. It cannot be reset and it's separate from your
            mobile wallet.
          </p>

          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="w-full relative">
              {passwordVisible ? (
                <PiEyeFill onClick={togglePasswordVisibility} className="absolute top-9 right-2 text-[--green-color] font-bold cursor-pointer" />
              ) : (
                <PiEyeSlashFill onClick={togglePasswordVisibility} className="absolute top-9 right-2 text-[--green-color] font-bold cursor-pointer" />
              )}
              <label className="text-base">New Password</label>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter a Password"
                className="bg-[--input-color] w-full h-[38px] px-2 rounded-sm focus:outline-[--green-color] b"
                id="password"
                onChange={(e) => {
                  formik.handleChange(e);
                  validatePassword(e.target.value);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="text-xs text-gray-400 py-5">
              <p className="flex items-center">
                {validations.length ? <FaCheckCircle className="text-green-500 mr-1" /> : <FaRegCircle className="mr-1" />}
                8 or more characters
              </p>
              <p className="flex items-center">
                {validations.upperCase ? <FaCheckCircle className="text-green-500 mr-1" /> : <FaRegCircle className="mr-1" />}
                At least one uppercase character
              </p>
              <p className="flex items-center">
                {validations.digit ? <FaCheckCircle className="text-green-500 mr-1" /> : <FaRegCircle className="mr-1" />}
                At least one digit
              </p>
              <p className="flex items-center">
                {validations.symbol ? <FaCheckCircle className="text-green-500 mr-1" /> : <FaRegCircle className="mr-1" />}
                At least one symbol
              </p>
            </div>
            <div className="w-full relative">
              {passwordVisible ? (
                <PiEyeFill onClick={togglePasswordVisibility} className="absolute top-9 right-2 text-[--green-color] font-bold cursor-pointer" />
              ) : (
                <PiEyeSlashFill onClick={togglePasswordVisibility} className="absolute top-9 right-2 text-[--green-color] font-bold cursor-pointer" />
              )}
              <label className="text-base">Confirm Password</label>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Confirm your Password"
                className="bg-[--input-color] w-full h-[38px] px-2 rounded-sm focus:outline-[--green-color] b"
                id="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div className="text-red-500">{formik.errors.confirmPassword}</div>
              ) : null}
            </div>
            <div className="w-full mt-2">
              <label className="text-sm flex items-center">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                  className="h-[15px] rounded-sm  accent-[--green-color] outline-none b"
                />
                <span className="ml-2">I agree to the terms and conditions</span>
              </label>
            </div>
            <div className="text-center mt-4">
              <button
                className={`bg-[--green-color] text-white text-base w-full rounded-full p-2 ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`}
                type="submit"
                disabled={!isFormValid()}
              >
                Set Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewPassword;
