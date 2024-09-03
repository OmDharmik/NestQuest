import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-screen mx-12 overflow-hidden">
      <div className="">
        <Image
          src={'/hero.jpg'}
          alt={'Hero Image'}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
