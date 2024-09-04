'use client';
import Image from 'next/image';

const Search = () => {
  return (
    <div className="flex justify-center w-full mt-8">
      <form className="flex justify-evenly p-4 bg-white rounded-full gap-4 items-center w-4/5">
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
        <div className="bg-accentLight p-4 rounded-full hover:bg-accentDark">
          <button type="submit" className="flex rounded-full">
            <Image
              src={'/search.svg'}
              alt="search"
              height={30}
              width={30}
              className="cursor-pointer "
            ></Image>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
