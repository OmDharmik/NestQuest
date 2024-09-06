import Image from 'next/image';
import { hotels } from '../utils/constants';
import LocationCard from './LocationCard';

const Trending = () => {
  return (
    <section className="h-fit mx-8 mt-20">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-extrabold ml-4">Trending Stays</h2>
        <div className="mr-12">
          <button className="bg-accentLight flex rounded-full text-white px-4 py-2 mt-8 hover:bg-accentDark transition ease-in-out duration-300 delay-50">
            <Image
              src={'/arrow-right.svg'}
              alt="see more"
              width={28}
              height={28}
              className="object-contain"
            ></Image>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 mx-12 mt-8 gap-4">
        {hotels.map((hotel) => (
          <LocationCard
            key={hotel.id}
            label={hotel.label}
            title={hotel.title}
            description={hotel.description}
            price={hotel.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Trending;
