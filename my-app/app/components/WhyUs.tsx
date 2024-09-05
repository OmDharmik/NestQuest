import Image from 'next/image';

const WhyUs = () => {
  return (
    <section className="flex flex-col justify-center items-center mx-20 mt-40">
      <div>
        <h1 className="text-lg font-extrabold mb-20">Why choose Us</h1>
      </div>
      <div className="grid grid-cols-3 items-center gap-12 text-center">
        <div>
          <div className="flex justify-center mb-8">
            <Image
              className=""
              src={'/hotel.png'}
              alt="hotel"
              height={100}
              width={100}
            ></Image>
          </div>
          <h2 className="text-xl font-bold mb-4">Quality Stays</h2>
          <p>
            Our website offers a carefully curated selection of flats, hotels,
            and unique accommodations that meet high standards of comfort,
            cleanliness, and convenience.
          </p>
        </div>
        <div>
          <div className="flex justify-center mb-8">
            <Image
              src={'/offer.png'}
              alt="offers"
              height={100}
              width={100}
            ></Image>
          </div>
          <h2 className="text-xl font-bold mb-4">Best Price Guarantee</h2>
          <p>
            We provide competitive pricing with a best price guarantee, ensuring
            you get the most value for your money.
          </p>
        </div>
        <div>
          <div className="flex justify-center mb-8">
            <Image
              mb-8
              src={'/customer-support.png'}
              alt="24 hr support"
              height={100}
              width={100}
            ></Image>
          </div>
          <h2 className="text-xl font-bold mb-4">24/7 Support</h2>
          <p>
            Our dedicated customer support team is available 24/7 to assist you
            with any inquiries or issues, ensuring a smooth booking experience
            from start to finish.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
