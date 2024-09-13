'use client';
import { signIn } from 'next-auth/react';

interface Props {
  label: string;
}

const Button: React.FC<Props> = ({ label }) => {
  return (
    <button
      onClick={() => signIn}
      className="bg-accentLight rounded-md hover:bg-accentDark py-4 px-8 transition ease-in-out duration-300 mr-8 font-bold delay-50"
    >
      {' '}
      {label}
    </button>
  );
};

export default Button;
