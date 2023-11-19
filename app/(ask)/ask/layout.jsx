import Navbar from '@/components/navbar';
import SearchBar from '@/components/search-bar';

export default function RootLayout({ children }) {
  return (
    <div className='bg-gradient-background bg-cover bg-no-repeat'>
      <SearchBar />
      {children}
      <Navbar />
    </div>
  );
}
