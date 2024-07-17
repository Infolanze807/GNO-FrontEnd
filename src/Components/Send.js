import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";

function Send() {
  const formik = useFormik({
    initialValues: {
      walletAddress: "",
      amount: "",
    },
    validationSchema: Yup.object({
        walletAddress: Yup.string().required("Required"),
        amount: Yup.number().required("Required"),
      }),
    // onSubmit: (values) => {
    //   navigate('/validate-passphrase', { state: { wallet, password: values.password } });
    // },
  });
  
  return (
    <>
         <div className="text-white flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[90vh] xl:h-[90vh] justify-center">
        {/* <img
          src={logo}
          className="mb-5 h-[90px] w-[100px] shadow-custom"
        /> */}
        <div className="flex flex-col items-center justify-center bg-[--bg-color] border-[--border-color] border shadow-sm p-4 gap-3 rounded-2xl w-[300px] sm:w-[320px] md:w-[350px] lg:w-[350px] xl:w-[350px]">
        <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="w-full relative">
              
              <label className="text-base">Wallet Address</label>
              <input
                type="text"
                placeholder="Enter a Wallet Address"
                className="bg-[--input-color] w-full h-[38px] px-2 rounded-sm focus:outline-[--green-color] b"
                id="walletAddress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.walletAddress}
              />
              {formik.touched.walletAddress && formik.errors.walletAddress ? (
                <div className="text-red-500">{formik.errors.walletAddress}</div>
              ) : null}
            </div>
            <div className="w-full relative">
             
              <label className="text-base">Amount</label>
              <input
                type= "number"
                placeholder="Enter a Amount"
                className="bg-[--input-color] w-full h-[38px] px-2 rounded-sm focus:outline-[--green-color] b"
                id="amount"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.amount}
              />
              {formik.touched.amount && formik.errors.amount ? (
                <div className="text-red-500">{formik.errors.amount}</div>
              ) : null}</div>
            </form>
            <div className="grid grid-cols-2 w-full mt-4">
              <div>
                <button
                  className="bg-[--green-color] text-white text-base w-full rounded-full p-2"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </div>
            </div>
            
        </div>
    </>
)
}

export default Send