import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar = () => {
  return (
    <nav className="flex  justify-between p-4 text-primaryText items-center">
      <Image src={'/Logo.png'} alt={'Logo'} height={50} width={50} />
      <div className="hidden lg:flex justify-center gap-8">
        <Link className="hover:text-black hover:font-semibold" href="/discover">
          Discover
        </Link>
        <Link className="hover:text-black hover:font-semibold" href="/about">
          About
        </Link>
        <Link className="hover:text-black hover:font-semibold" href="/faq">
          FAQ
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Button label={'Login'} />
        <Image
          className="lg:hidden mr-4 cursor-pointer"
          src={'/menu.svg'}
          alt="Menu"
          height={30}
          width={30}
        ></Image>
      </div>
    </nav>
  );
};

export default Navbar;
