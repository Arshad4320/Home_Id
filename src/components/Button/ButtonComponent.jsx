import React from "react";

const ButtonComponent = ({ onClick, label, className }) => {
  return (
    <button
      className={` text-white bg-secondary hover:bg-secondary2 duration-500 flex px-6 py-3 md:px-8 md:py-4 font-semibold rounded-md shadow-md items-center justify-center ${className}`}
      onClick={onClick}
    >
      {" "}
      {label}
    </button>
  );
};

export default ButtonComponent;
