'use client';

import { useState } from 'react';

import { CiSearch } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';
import { AiOutlineSend } from 'react-icons/ai';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // TODO: Add Search Functionality
  };

  const clearSearchBar = () => {
    setSearchQuery('');
  };

  return (
    <div className='flex w-full items-center justify-center bg-[#070f36] h-20 p-5'>
      <div className='flex w-full h-full items-center relative'>
        <CiSearch className='absolute z-10 text-[#070f36] w-8 h-8 left-1' />
        <input
          className='rounded-md w-full h-full outline-none text-black px-3 pl-10'
          placeholder='Search...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <RxCross1
          className='absolute z-10 text-[#070f36] w-8 h-8 right-1 hover:scale-110 cursor-pointer transition-all'
          role='button'
          onClick={clearSearchBar}
        />
      </div>
      <AiOutlineSend
        className='mx-2 h-8 w-8 hover:scale-110 cursor-pointer transition-all'
        onClick={handleSearch}
        role='button'
      />
    </div>
  );
}
