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
      <div className="grid grid-cols-3 gap-4 mx-16 mt-20 items-center">
        <div className="flex items-center gap-8 justify-center">
          <div className="flex rounded-full bg-yellow-300 h-[250px] w-[200px] overflow-hidden object-cover">
            <Image
              src={'/hero2-1.jpg'}
              alt="hero2"
              height={250}
              width={200}
            ></Image>
          </div>
          <h2 className="flex font-bold text-2xl w-2/5">
            Discover Your Perfect Stay
          </h2>
        </div>

        <div className="flex items-center gap-8 justify-center">
          <div className="flex rounded-full bg-yellow-300 h-[250px] w-[200px] overflow-hidden object-cover">
            <Image
              src={'/hero2-2.jpg'}
              alt="hero2"
              height={250}
              width={200}
            ></Image>
          </div>
          <h2 className="flex font-bold text-2xl w-2/5">
            Unforgettable Experiences Await
          </h2>
        </div>
        <div className="flex gap-8 items-center justify-center">
          <div className="flex justify-center rounded-full bg-yellow-300 h-[250px] w-[200px] overflow-hidden object-cover">
            <Image
              src={'/hero2-3.jpg'}
              alt="hero2"
              height={250}
              width={200}
            ></Image>
          </div>
          <h2 className="flex font-bold text-2xl w-2/5">
            Stay. Relax. Repeat.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
