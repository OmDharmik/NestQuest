import Image from 'next/image';

interface LocationCardProps {
  title: string;
  description: string;
  price: number;
  label: string;
}

const LocationCard = ({
  label,
  title,
  description,
  price,
}: LocationCardProps) => {
  return (
    <a href="/product/">
      <div className="flex flex-col">
        <div className="relative h-80 w-80 rounded-lg overflow-hidden">
          <Image
            src={`${label}`}
            alt="image"
            fill
            style={{
              objectFit: 'cover',
            }}
          ></Image>
        </div>
        <div className="flex flex-col mt-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="w-5/6">{description}</p>
          <p className="font-bold mt-2">Rs {price}/Night</p>
        </div>
      </div>
    </a>
  );
};

export default LocationCard;
