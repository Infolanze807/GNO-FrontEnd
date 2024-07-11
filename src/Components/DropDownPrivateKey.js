import React from 'react'

function DropDownPrivateKey() {
  return (
      <>
        <div>
        <textarea
                    rows={3}
                    readOnly
                    className="bg-[--border-color] w-full px-2 focus:outline-[--green-color] outline-none"
                  />
        </div>
      </>
  )
}

export default DropDownPrivateKey