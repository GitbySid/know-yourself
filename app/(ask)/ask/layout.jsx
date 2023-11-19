import Navbar from '@/components/navbar';
import SearchBar from '@/components/search-bar';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={'bg-gradient-background'}>
        <SearchBar />
        {children}
        <Navbar />
      </body>
    </html>
  );
}
