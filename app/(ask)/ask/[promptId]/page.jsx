'use client';

import { useContext } from 'react';

import { PromptContext } from '@/contexts/PromptProvider';
import QuestionForm from './_components/question-form';

export default function PromptPage({ params }) {
  const { getPredefinedPrompt } = useContext(PromptContext);

  const prompt = getPredefinedPrompt(params.promptId);

  return (
    <div className='p-5 sm:p-10 mb-20'>
      <QuestionForm prompt={prompt} />
    </div>
  );
}
