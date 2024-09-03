import Image from 'next/image';

const Search = () => {
  return (
    <div className="flex justify-center mt-12 text-base">
      <div className="flex gap-4 bg-white rounded-full w-4/5 p-4">
        <form className="flex justify-evenly gap-4 items-center w-full">
          <div>
            <p className="px-3 flex flex-start">Destination</p>
            <input
              className="p-3 border-gray-300 rounded-lg outline-none"
              type="text"
              placeholder="Find a destination"
            />
          </div>
          <div>
            <p className="px-3 flex flex-start">Check In</p>
            <input
              className="p-3 border-gray-300 rounded-lg outline-none"
              type="text"
              placeholder="Add Dates"
            />
          </div>
          <div>
            <p className="px-3 flex flex-start">Check Out</p>
            <input
              className="p-3 flex justify-center border-gray-300 rounded-lg outline-none"
              type="text"
              placeholder="Add Dates"
            />
          </div>
          <div>
            <p className="px-3 flex flex-start">Guests</p>
            <input
              className="p-3 border-gray-300 rounded-lg outline-none"
              type="text"
              placeholder="Add Guests"
            />
          </div>
          <div className="bg-accentLight p-4 rounded-full hover:bg-accentDark">
            <Image
              src={'/search.svg'}
              alt="search"
              height={30}
              width={30}
              className="cursor-pointer "
            ></Image>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
