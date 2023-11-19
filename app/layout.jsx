import { twMerge } from 'tailwind-merge';
import { Inter } from 'next/font/google';
import './globals.css';
import PromptContextProvider from '@/contexts/PromptProvider';

const inter = Inter({ subsets: ['latin'] });

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
          inter.className
        )}
      >
        <PromptContextProvider>{children}</PromptContextProvider>
      </body>
    </html>
  );
}
