import React from 'react'
import { IoSearch } from 'react-icons/io5'

const SearchInput = () => {
  return (
    <>
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='search' className='input rounded-3xl h-9 bg-[#543639] flex text-justify' />
        <button type='submit' className='btn btn-circle text-white bg-[#1F1D1D]'>
            <IoSearch className='w-5 h-5' />
        </button>

    </form>
    </>
  )
}

export default SearchInput
