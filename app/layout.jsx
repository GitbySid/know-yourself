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
    <html lang='en'>
      <body
        className={twMerge(
          'bg-gradient-background bg-no-repeat bg-cover',
          raleway.className
        )}
      >
        <PromptContextProvider>{children}</PromptContextProvider>
      </body>
    </html>
  );
}
