'use client';

import { useRouter } from 'next/navigation';
import { Raleway, League_Spartan } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

const raleway = Raleway({ subsets: ['latin'] });
const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export default function HomePage() {
  const router = useRouter();
  const handleClick = () => {
    return router.push('/ask');
  };

  return (
    <main className='flex flex-col items-center w-full h-screen'>
      <p
        className={twMerge(
          'flex h-1/2 justify-center items-center text-secondary w-10 text-7xl sm:text-8xl break-normal text-center font-bold',
          leagueSpartan.className
        )}
      >
        Know yourself
      </p>
      <div className='flex flex-col h-1/2 justify-center items-center'>
        <p
          className={twMerge(
            'text-4xl sm:text-5xl p-5 max-w-xs sm:max-w-lg text-center leading-[50px] sm:leading-[60px]',
            raleway.className
          )}
        >
          Discover your best version with
        </p>
        <button
          className={twMerge(
            'text-4xl sm:text-5xl max-w-xs sm:max-lg text-center leading-[50px] sm:leading-[60px] underline',
            raleway.className
          )}
          onClick={handleClick}
        >
          Know Yourself
        </button>
      </div>
    </main>
  );
}
