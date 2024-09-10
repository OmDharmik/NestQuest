import Image from 'next/image';

const Hero2 = () => {
  return (
    <div className="flex flex-col font-bold justify-center items-center mt-20">
      <h1 className="text-lg w-3/5 text-center leading-snug">
        Book Exceptional Properties for Your Stay
      </h1>
      <p className="text-2xl mt-8 font-semibold w-3/5 text-center leading-normal">
        Book unforgettable properties and create lasting memories with unique
        accommodations that suit every taste and budget.
      </p>
      <div className="grid-cols-2 grid md:grid-cols-3 gap-4 mx-16 mt-20 items-center">
        <div className="flex items-center gap-8 justify-center">
          <div className="relative flex justify-center rounded-full lg:h-[250px] lg:w-[200px] h-[200px] w-[150px] overflow-hidden object-cover">
            <Image
              src={'/hero2-1.jpg'}
              alt="hero2"
              fill
              style={{ objectFit: 'cover' }}
            ></Image>
          </div>
          <h2 className="flex font-bold text-xl lg:text-2xl w-2/5">
            Discover Your Perfect Stay
          </h2>
        </div>

        <div className="flex items-center gap-8 justify-center">
          <div className="relative flex justify-center rounded-full lg:h-[250px] lg:w-[200px] h-[200px] w-[150px] overflow-hidden object-cover">
            <Image
              src={'/hero2-2.jpg'}
              alt="hero2"
              fill
              style={{ objectFit: 'cover' }}
              className="relative"
            ></Image>
          </div>
          <h2 className="flex font-bold text-xl lg:text-2xl w-2/5">
            Epic Moments Await You
          </h2>
        </div>
        <div className="flex gap-8 items-center col-span-2 md:col-span-1 justify-center">
          <div className="relative flex justify-center rounded-full lg:h-[250px] lg:w-[200px] h-[200px] w-[150px] overflow-hidden object-cover">
            <Image
              src={'/hero2-3.jpg'}
              alt="hero2"
              fill
              style={{ objectFit: 'cover' }}
              className="relative"
            ></Image>
          </div>
          <h2 className="flex font-bold text-xl lg:text-2xl w-2/5">
            Stay. Relax. Repeat.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
