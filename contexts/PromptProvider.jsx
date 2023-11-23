'use client';

import { createContext } from 'react';

export const PromptContext = createContext();

export const PromptContextProvider = ({ children }) => {
  const predefinedPrompts = [
    {
      id: '1',
      label: 'What movie to watch?',
      backgroundColor: 'orange',
    },
    {
      id: '2',
      label: 'What to eat for dinner?',
      backgroundColor: 'green',
    },
    {
      id: '3',
      label: 'What sport to play?',
      backgroundColor: 'purple',
    },
    {
      id: '4',
      label: 'What board game to play?',
      backgroundColor: 'yellow',
    },
    {
      id: '5',
      label: 'Where to go for a weekend getaway?',
      backgroundColor: 'pink',
    },
  ];

  const getPredefinedPrompt = (promptId) => {
    return predefinedPrompts.find((item) => item.id === promptId);
  };

  return (
    <PromptContext.Provider value={{ predefinedPrompts, getPredefinedPrompt }}>
      {children}
    </PromptContext.Provider>
  );
};

export default PromptContextProvider;
