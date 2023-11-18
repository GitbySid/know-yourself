import { twMerge } from 'tailwind-merge';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// TODO: Add description
export const metadata = {
  title: 'Know Yourself',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={twMerge('bg-gradient-background', inter.className)}>
        {children}
      </body>
    </html>
  );
}
