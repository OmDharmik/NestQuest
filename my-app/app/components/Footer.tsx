import Image from 'next/image';
import { footerLinks } from '../utils/constants';
import Button from './Button';

const Footer = () => {
  return (
    <section className="h-1/2 mt-40">
      <div className="flex flex-col justify-center border-b p-12">
        <div className="flex justify-center gap-8">
          <Image src={'/Logo.png'} alt={'Logo'} height={50} width={50} />
          <h1 className="text-md">NestQuest</h1>
        </div>
        <h2 className="text-md font-extrabold text-center p-4 mt-12">
          Join Our Community of Travelers
        </h2>
        <div className="flex justify-center items-center gap-20 mt-12">
          <input
            type="text"
            placeholder="Email"
            className="p-4 rounded-lg bg-primaryBackground border w-1/4"
          />
          <Button label="Subscribe"></Button>
        </div>
      </div>
      <div className="flex justify-around p-12">
        {footerLinks.map((footerLink) => {
          return (
            <div className="flex flex-col items-center mt-12">
              <h3 className="text-md font-bold">{footerLink.title}</h3>
              <div className="flex flex-col gap-4 mt-4">
                {footerLink.links.map((link) => {
                  return (
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-primary"
                    >
                      {link}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Footer;
