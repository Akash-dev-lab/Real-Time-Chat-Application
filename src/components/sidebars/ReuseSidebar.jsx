import React from 'react'
import Conversations from './Conversations'
import { IoMdAddCircleOutline } from "react-icons/io"

const ReuseSidebar = () => {
  return (
    <div className='menu mt-8 p-4 w-80 ml-3 text-base-content rounded-b-lg bg-[#1F1D1D]'>
      <div className='flex items-center gap-28'>
      <p className=' font-semibold text-xl mt-1 text-white'>Calls</p>
      <p className=' font-semibold text-xl mt-1 text-white flex items-center justify-center gap-2'><IoMdAddCircleOutline />New Meet</p>
      </div>
      <Conversations />
    </div>
  )
}

export default ReuseSidebar
