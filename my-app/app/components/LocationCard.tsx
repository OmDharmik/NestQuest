import Image from 'next/image';

const LocationCard = () => {
  return (
    <a href="/product/1">
      <div className="flex flex-col">
        <div className="relative h-80 w-80 rounded-lg overflow-hidden">
          <Image
            src={'/hero2-1.jpg'}
            alt="image"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <div className="flex flex-col mt-4">
          <h2 className="text-xl font-bold">1 Room at Hotel Palace</h2>
          <p>1 Bed | 1 Bathroom | Wifi</p>
          <p className="font-bold">Rs 1300/Night</p>
        </div>
      </div>
    </a>
  );
};

export default LocationCard;
