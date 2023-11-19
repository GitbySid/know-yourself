'use client';

import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export default function PromptButton({ id, label, backgroundColorClass }) {
  const router = useRouter();
  const handlePromptClick = () => {
    router.push(`/ask/${id}`);
  };

  return (
    <div className={twMerge('my-5 mx-2 p-5 w-full', backgroundColorClass)}>
      <button onClick={handlePromptClick}>{label}</button>
    </div>
  );
}
