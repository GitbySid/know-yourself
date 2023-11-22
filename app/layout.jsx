import { twMerge } from 'tailwind-merge';
import { Raleway } from 'next/font/google';
import './globals.css';
import PromptContextProvider from '@/contexts/PromptProvider';

const raleway = Raleway({ subsets: ['latin'] });

// TODO: Add description
export const metadata = {
  title: 'Know Yourself',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='light'>
      <body
        className={twMerge(
          'bg-gradient-background bg-no-repeat bg-cover text-white',
          raleway.className
        )}
      >
        <PromptContextProvider>{children}</PromptContextProvider>
      </body>
    </html>
  );
}
