import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { MdHistory } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { RiAccountBoxFill } from 'react-icons/ri';
import { IoIosSettings } from 'react-icons/io';

export default function Navbar() {
  // TODO: Change hrefs for navbar links

  return (
    <div className='flex fixed bottom-0 w-full items-center justify-between bg-[#02051c] h-20 p-5 sm:px-24'>
      <Link className='flex flex-col items-center' href='/ask'>
        <FaHome className='h-6 w-6 my-2' />
        <p>Home</p>
      </Link>
      <Link className='flex flex-col items-center' href='/'>
        <MdHistory className='h-6 w-6 my-2' />
        <p>History</p>
      </Link>
      <Link className='flex flex-col items-center' href='/'>
        <FaHeart className='h-6 w-6 my-2' />
        <p>Like</p>
      </Link>
      <Link className='flex flex-col items-center' href='/'>
        <RiAccountBoxFill className='h-6 w-6 my-2' />
        <p>Settings</p>
      </Link>
      <Link className='flex flex-col items-center' href='/'>
        <IoIosSettings className='h-6 w-6 my-2' />
        <p>Account</p>
      </Link>
    </div>
  );
}
