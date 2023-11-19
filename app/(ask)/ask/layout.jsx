import Navbar from '@/components/navbar';
import SearchBar from '@/components/search-bar';

export default function RootLayout({ children }) {
  return (
    <div>
      <SearchBar />
      {children}
      <Navbar />
    </div>
  );
}
