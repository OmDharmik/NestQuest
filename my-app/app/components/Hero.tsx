import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-screen mx-12 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={'/hero.jpg'}
          alt={'Hero Image'}
          fill
          style={{
            objectFit: 'cover',
          }}
          className="rounded-lg opacity-70"
        />
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-5xl md:text-6xl font-bold text-center px-4 max-w-2xl leading-tight">
          Your Next Great Escape Awaits
        </h1>
      </div>
    </div>
  );
};

export default Hero;
