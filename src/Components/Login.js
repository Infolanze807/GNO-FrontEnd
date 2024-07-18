import React, { useState } from 'react';
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import logo from '../Images/gno-wallet.png';
import axios from 'axios';

function Login({ setFunctionData }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
       const WalletData = localStorage.getItem("Wallet Data:");
       const FetchWalletData = JSON.parse(WalletData);
       const address = FetchWalletData.Wallet_address;
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/wallet/${address}/${values.password}`);
        console.log(response);
        if (response.data && response.data.success) {
          console.log(response.data.address);
          setFunctionData(response.data.address);
          navigate("/main");
        } else {
          setError("Invalid address or password. Please try again.");
        }
      } catch (error) {
        setError("Invalid address or password. Please try again.");
      }
    },
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <>
      <div className="text-white flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[90vh] xl:h-[90vh] justify-center">
        <img src={logo} className="mb-5 h-[100px] w-[90px] shadow-custom" />
        <div className="flex flex-col items-center justify-center bg-[--bg-color] border-[--border-color] border shadow-sm p-10 rounded-2xl w-[300px] sm:w-[320px] md:w-[350px] lg:w-[350px] xl:w-[350px]">
          <div className="text-center w-full">
            <p className="text-lg">Secure and trusted multi-chain crypto wallet</p>
          </div>
          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="w-full relative mt-4">
              {passwordVisible ? (
                <FiEye onClick={togglePasswordVisibility} className="absolute top-9 right-2" />
              ) : (
                <FiEyeOff onClick={togglePasswordVisibility} className="absolute top-9 right-2" />
              )}
              <label className="text-base">Password</label>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                className="bg-[--border-color] w-full h-[40px] px-2 focus:outline-[--green-color] outline-none"
                id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="w-full my-4">
              <button type="submit" className="bg-[--green-color] text-white text-base w-full rounded-full p-2 mt-4">
                Unblock
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
