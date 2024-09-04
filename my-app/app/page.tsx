import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Trending from './components/Trending';

export default function Home() {
  return (
    <>
      <div className="h-screen w-full">
        <Navbar />
        <Hero />
        <Search />
        <Hero2 />
        <Trending />
      </div>
    </>
  );
}
