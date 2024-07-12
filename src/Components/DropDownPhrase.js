import React from 'react'

function DropDownPhrase() {
  return (
    <>
      <div>
        <div className='grid gap-1 grid-cols-2 pt-2'>
<input type='text' className='px-2 bg-[--input-color] text-sm p-2 outline-none   rounded-md ' placeholder='Word #1'/>
<input type='text' className='px-2 bg-[--input-color] text-sm p-2 outline-none   rounded-md ' placeholder='Word #2'/>
<input type='text' className='px-2 bg-[--input-color] text-sm p-2 outline-none   rounded-md ' placeholder='Word #3'/>
<input type='text' className='px-2 bg-[--input-color] text-sm p-2 outline-none   rounded-md ' placeholder='Word #4'/>
<input type='text' className='px-2 bg-[--input-color] text-sm p-2 outline-none   rounded-md ' placeholder='Word #5'/>
<input type='text' className='px-2 bg-[--input-color] text-sm p-2 outline-none   rounded-md ' placeholder='Word #6'/>
<input type='text' className='px-2 bg-[--input-color] text-sm p-2 outline-none   rounded-md ' placeholder='Word #7'/>
<input type='text' className='px-2 bg-[--input-color] text-sm p-2 outline-none   rounded-md ' placeholder='Word #8'/>
<input type='text' className='px-2 bg-[--input-color] text-sm p-2 outline-none   rounded-md ' placeholder='Word #9'/>
<input type='text' className='px-2 bg-[--input-color] text-sm p-2 outline-none   rounded-md ' placeholder='Word #10'/>
<input type='text' className='px-2 bg-[--input-color] text-sm p-2 outline-none   rounded-md ' placeholder='Word #11'/>
<input type='text' className='px-2 bg-[--input-color] text-sm p-2 outline-none   rounded-md ' placeholder='Word #12'/>
        </div>
        <div className='text-[--green-color] text-center pt-2 text-sm'>
          <p>Clear All</p>
        </div>
        <div className="grid grid-cols-2 w-full mt-4">
              <div>
                <button className="text-[--green-color] text-sm w-full p-2">
                  Back
                </button>
              </div>
              <div>
                <button
                  className="bg-[--green-color] text-white text-sm w-full rounded-full p-2 "
                  type="submit"
                >
                  Next
                </button>
              </div>
            </div>
      </div>
    </>
  )
}

export default DropDownPhrase