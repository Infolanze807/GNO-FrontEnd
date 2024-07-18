import React from 'react'
import { useNavigate } from "react-router-dom";


function DropDownPrivateKey() {
  const navigate = useNavigate();

  return (
      <>
        <div>
        <textarea
                    rows={3}
                    className="bg-[--border-color] w-full px-2 focus:outline-[--green-color] outline-none"
                  />
        </div>
        <div className="grid grid-cols-2 w-full mt-4">
              <div>
                <button className="text-[--green-color] text-base w-full p-2" onClick={() => navigate(-1)}>
                  Back
                </button>
              </div>
              <div>
                <button
                  className="bg-[--green-color] text-white text-base w-full rounded-full p-2"
                  type="submit"
                >
                  Next
                </button>
              </div>
            </div>
      </>
  )
}

export default DropDownPrivateKey

