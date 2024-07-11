import React, { useState } from "react";
import { FaCheckCircle ,FaRegCircle} from "react-icons/fa";
import { PiEyeFill,PiEyeSlashFill  } from "react-icons/pi";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from '../Images/gno-wallet.png'
import { useLocation, useNavigate } from "react-router-dom";


function SetPassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [validations, setValidations] = useState({
    length: false,
    upperCase: false,
    digit: false,
    symbol: false,
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { wallet } = location.state;

  const validatePassword = (password) => {
    setValidations({
      length: password.length >= 8,
      upperCase: /[A-Z]/.test(password),
      digit: /\d/.test(password),
      symbol: /[!@#$%^&*(),.?":{}|<>]/.test(
        password),
    });
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
      // checkBox:false,
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords do not match')
        .required("Required"),
        // checkBox: Yup.boolean()
        // .oneOf([true], 'Must agree to terms')
        // .required("Required"),
    }),
    onSubmit: (values) => {
      navigate('/validate-passphrase', { state: { wallet, password: values.password } });
    },
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <>
      <div className="text-white flex flex-col items-center h-[100vh] md:h-[95vh] lg:h-[80vh] xl:h-[100vh] justify-center">
      <img
          src={logo}
          className="mb-5 h-[90px] w-[100px] shadow-custom"
        />
        <div className="flex flex-col items-center justify-center bg-[--bg-color] border-[--border-color] border shadow-sm p-4 gap-3 rounded-2xl w-[300px] sm:w-[320px] md:w-[350px] lg:w-[400px] xl:w-[380px]">
          <h1 className="text-base">Set Password</h1>
          <p className="text-xs text-gray-400 text-center">
            This password is used to protect your wallet and provide access to
            the browser extension. It cannot be reset and it's separate from your
            mobile wallet.
          </p>

          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="w-full relative">
              {passwordVisible ? (
                <PiEyeFill onClick={togglePasswordVisibility} className="absolute top-9 right-2 text-[--green-color] font-semibold" />
              ) : (
                <PiEyeSlashFill onClick={togglePasswordVisibility} className="absolute top-9 right-2 text-[--green-color] font-semibold" />
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
                At least one upper case character
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
            <div className="w-full relative ">
              {passwordVisible ? (
                <PiEyeFill onClick={togglePasswordVisibility} className="absolute top-9 right-2 text-[--green-color] font-semibold" />
              ) : (
                <PiEyeSlashFill onClick={togglePasswordVisibility} className="absolute top-9 right-2 text-[--green-color] font-semibold" />
              )}
              <label className="text-base">Confirm new Password</label>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter a Confirm Password"
                className="bg-[--input-color] w-full h-[40px] px-2 rounded-sm focus:outline-[--green-color] outline-none b"
                id="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div className="text-red-500">{formik.errors.confirmPassword}</div>
              ) : null}
            </div>

            <div className="flex gap-1 w-full justify-center items-center mt-4">
              <input
                type="checkbox"
                className="h-[40px] px-2 rounded-sm focus:outline-[--green-color] outline-none b"
                // value={formik.values.checkBox}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
              />
              <p>
                I have read and agree to the
                <span className="text-[--green-color]">Terms of Service</span>
              </p>
              {/* {formik.touched.checkBox && formik.errors.checkBox ? (
                <div className="text-red-500">{formik.errors.checkBox}</div>
              ) : null} */}
            </div>

            {/* <div className="grid grid-cols-2 w-full mt-4"> */}
              {/* <div>
                <button className="text-[--green-color] text-base w-full p-2">
                  Back
                </button>
              </div> */}
              <div>
                <button
                  className="bg-[--green-color] text-white text-base w-full rounded-full p-2 mt-4"
                  type="submit"
                >
                  Next
                </button>
              </div>
            {/* </div> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default SetPassword;

