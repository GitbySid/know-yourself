'use client';

import { useContext } from 'react';
import { PromptContext } from '@/contexts/PromptProvider';
import PromptButton from './_components/prompt-button';

export default function AskPage() {
  const { predefinedPrompts } = useContext(PromptContext);
  return (
    <div className='flex flex-col w-full h-full items-center gap-7 sm:gap-8 p-10 mb-20'>
      {predefinedPrompts.map((prompt) => (
        <PromptButton
          key={prompt.id}
          id={prompt.id}
          label={prompt.label}
          backgroundColorClass={prompt.backgroundColorClass}
        />
      ))}
    </div>
  );
}
