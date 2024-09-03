import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';

export default function Home() {
  return (
    <>
      <div className="h-screen w-full">
        <Navbar />
        <Hero />
        <Search />
      </div>
    </>
  );
}
