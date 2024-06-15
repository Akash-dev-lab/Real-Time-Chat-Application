import React from 'react'

const ToggleBox = () => {
  return (
    <>
    <div className='rounded-3xl h-8 bg-black mt-3 flex justify-center items-center'>
      <button className=' rounded-full w-20 h-7 bg-[#322F2F] text-sm flex items-center justify-center'>All Chats</button>
      <button className=' w-20 h-7 text-sm flex items-center justify-center'>Group</button>
      <button className='w-20 h-7 text-sm flex items-center justify-center'>Contacts</button>
    </div>
    </>
  )
}

export default ToggleBox
