/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";
const Button = ({ onClick, label }) => {
  return (
    <button
      className=" hover:bg-blue-100 bg-blue-50 text-primary flex px-8 py-4 font-semibold rounded-md shadow-md items-center justify-center"
      onClick={onClick}
    >
      {label} <FaArrowRightLong className="mt-1 ml-2 font-semibold" />
    </button>
  );
};

export default Button;
