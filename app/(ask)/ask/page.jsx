import Navbar from './_components/navbar';
import PromptButton from './_components/prompt-button';
import SearchBar from './_components/search-bar';

export default function AskPage() {
  const predefinedPrompts = [
    {
      id: 1,
      label: 'What movie to watch?',
      backgroundColorClass: 'bg-[#eb6c46]',
    },
    {
      id: 2,
      label: 'What to eat for dinner?',
      backgroundColorClass: 'bg-[#8dd45c]',
    },
    {
      id: 3,
      label: 'What sport to play?',
      backgroundColorClass: 'bg-[#0000ff]',
    },
    {
      id: 4,
      label: 'What board game to play?',
      backgroundColorClass: 'bg-[#001c36]',
    },
    {
      id: 5,
      label: 'Where to go for a weekend getaway?',
      backgroundColorClass: 'bg-[#800080]',
    },
  ];

  return (
    <div className='flex flex-col h-screen'>
      <SearchBar />
      <div className='flex flex-col w-full h-full items-center gap-5 p-10'>
        {predefinedPrompts.map((prompt) => (
          <PromptButton
            key={prompt.id}
            label={prompt.label}
            backgroundColorClass={prompt.backgroundColorClass}
          />
        ))}
      </div>
      <Navbar />
    </div>
  );
}
