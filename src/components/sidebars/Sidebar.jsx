import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import ToggleBox from './ToggleBox'

const Sidebar = () => {
  return (
    <>
    <div className='menu p-4 w-80 ml-3 text-base-content rounded-b-lg bg-[#1F1D1D]'>
      <SearchInput />
      <p className='font-semibold text-xl mt-1 text-white'>Messages</p>
      <ToggleBox />
      <Conversations />
    </div>
    </>
  )
}

export default Sidebar
