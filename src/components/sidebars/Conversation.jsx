import React from 'react'

const Conversation = () => {
  return (
    <>
    <div className='flex gap-2 items-center bg-[#312F2F] hover:bg-[#757575] rounded p-2 py-1 cursor-pointer'>
      <div className='avatar online'>
        <div className='w-12 rounded-full'>
          <img src='/src/assets/chat.jpg' 
          />
        </div>
      </div>

        <div className='flex justify-between'>
          <p className='font-medium text-gray-200 ml-1'>Akash God</p>
        </div>
    </div>
    </>
  )
}

export default Conversation
