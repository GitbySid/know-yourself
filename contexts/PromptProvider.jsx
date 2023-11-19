'use client';

import { createContext } from 'react';

export const PromptContext = createContext();

export const PromptContextProvider = ({ children }) => {
  const predefinedPrompts = [
    {
      id: '1',
      label: 'What movie to watch?',
      backgroundColorClass:
        'bg-button-background-1 bg-no-repeat bg-cover bg-center rounded-full',
    },
    {
      id: '2',
      label: 'What to eat for dinner?',
      backgroundColorClass:
        'bg-button-background-2 bg-no-repeat bg-cover bg-center rounded-full',
    },
    {
      id: '3',
      label: 'What sport to play?',
      backgroundColorClass:
        'bg-button-background-3 bg-no-repeat bg-cover bg-center rounded-full',
    },
    {
      id: '4',
      label: 'What board game to play?',
      backgroundColorClass:
        'bg-button-background-4 bg-no-repeat bg-cover bg-center rounded-full',
    },
    {
      id: '5',
      label: 'Where to go for a weekend getaway?',
      backgroundColorClass:
        'bg-button-background-5 bg-no-repeat bg-cover bg-center rounded-full',
    },
  ];

  const getPredefinedPrompt = (promptId) => {
    return predefinedPrompts.find((item) => {
      return item.id === promptId;
    });
  };

  return (
    <PromptContext.Provider value={{ predefinedPrompts, getPredefinedPrompt }}>
      {children}
    </PromptContext.Provider>
  );
};

export default PromptContextProvider;
