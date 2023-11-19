import { FaSearch } from 'react-icons/fa';
import { MdHistory } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { RiAccountBoxFill } from 'react-icons/ri';
import { IoIosSettings } from 'react-icons/io';

export default function Navbar() {
  // TODO: Add navigate functionality
  return (
    <div className='flex w-full items-center justify-between bg-[#02051c] h-20 p-5 sm:px-24'>
      <div className='flex flex-col items-center'>
        <FaSearch className='h-6 w-6 my-2' />
        <p>Search</p>
      </div>
      <div className='flex flex-col items-center'>
        <MdHistory className='h-6 w-6 my-2' />
        <p>History</p>
      </div>
      <div className='flex flex-col items-center'>
        <FaHeart className='h-6 w-6 my-2' />
        <p>Like</p>
      </div>
      <div className='flex flex-col items-center'>
        <RiAccountBoxFill className='h-6 w-6 my-2' />
        <p>Settings</p>
      </div>
      <div className='flex flex-col items-center'>
        <IoIosSettings className='h-6 w-6 my-2' />
        <p>Account</p>
      </div>
    </div>
  );
}
