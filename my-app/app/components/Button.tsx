interface Props {
  label: string;
}

const Button: React.FC<Props> = ({ label }) => {
  return (
    <button className="bg-accentLight rounded-md hover:bg-accentDark py-4 px-8 transition ease-in-out duration-300 mr-8 font-bold">
      {' '}
      {label}
    </button>
  );
};

export default Button;
