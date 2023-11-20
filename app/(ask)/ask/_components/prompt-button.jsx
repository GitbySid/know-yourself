'use client';

import { useRouter } from 'next/navigation';
import bg1 from '@/public/assets/button-background-1.svg';
import bg2 from '@/public/assets/button-background-2.svg';
import bg3 from '@/public/assets/button-background-3.svg';
import bg4 from '@/public/assets/button-background-4.svg';
import bg5 from '@/public/assets/button-background-5.svg';

const bgMap = {
  1: bg1,
  2: bg2,
  3: bg3,
  4: bg4,
  5: bg5,
};

export default function PromptButton({ id, label }) {
  const router = useRouter();
  const handlePromptClick = () => {
    router.push(`/ask/${id}`);
  };

  return (
    <button
      style={{
        backgroundImage: `url(${bgMap[id].src})`,
      }}
      className='my-5 mx-2 p-5 w-full max-w-3xl bg-no-repeat bg-cover bg-center rounded-full'
      onClick={handlePromptClick}
    >
      {label}
    </button>
  );
}
