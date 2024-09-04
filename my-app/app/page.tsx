import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Navbar from './components/Navbar';
import Search from './components/Search';

export default function Home() {
  return (
    <>
      <div className="h-screen w-full">
        <Navbar />
        <Hero />
        <Search />
        <Hero2 />
      </div>
    </>
  );
}
