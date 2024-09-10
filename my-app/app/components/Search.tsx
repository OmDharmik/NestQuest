'use client';
import Image from 'next/image';

const Search = () => {
  return (
    <div className="flex justify-center mt-8 mx-8">
      <button className="md:hidden bg-white p-4 flex w-full rounded-full items-center">
        <Image src={'/search.svg'} alt="search" height={30} width={30}></Image>
        <div className="flex flex-col text-left ml-4">
          <p className="text-primaryText">Find a Destination</p>
          <div className="flex text-slate-400">
            <p className="">Check In </p>
            <span className="text-xl">•</span>
            <p>Check Out </p>
            <span className="text-xl">•</span>
            <p>Guest</p>
          </div>
        </div>
      </button>
      <form className="hidden md:flex justify-evenly p-4 bg-white rounded-full gap-2 items-center">
        <div className="border-r px-2">
          <p className="flex flex-start">Destination</p>
          <input
            className=" border-gray-300 rounded-lg outline-none"
            type="text"
            placeholder="Find a destination"
          />
        </div>
        <div className="border-r px-2">
          <p className="flex flex-start">Check In</p>
          <input
            className=" border-gray-300 rounded-lg outline-none"
            type="date"
            placeholder="Add Dates"
          />
        </div>
        <div className="border-r px-2">
          <p className="flex flex-start">Check Out</p>
          <input
            className="flex justify-center border-gray-300 rounded-lg outline-none"
            type="date"
            placeholder="Add Dates"
          />
        </div>
        <div className="px-2">
          <p className="flex flex-start">Guests</p>
          <input
            className=" border-gray-300 rounded-lg outline-none"
            type="text"
            placeholder="Add Guests"
          />
        </div>
        <div className="bg-accentLight p-4 rounded-full hover:bg-accentDark cursor-pointer">
          <button type="submit" className="flex rounded-full">
            <Image
              src={'/search.svg'}
              alt="search"
              height={30}
              width={30}
            ></Image>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
