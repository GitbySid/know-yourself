'use client';

import { twMerge } from 'tailwind-merge';

export default function PromptButton({ label, backgroundColorClass }) {
  const handlePromptClick = () => {
    // TODO: Add Functionality
  };
  return (
    <button
      className={twMerge(
        `my-5 mx-2 p-5 w-full rounded-md`,
        backgroundColorClass
      )}
      onClick={handlePromptClick}
    >
      {label}
    </button>
  );
}
