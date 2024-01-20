import React from "react";

const ButtonComponent = ({ onClick, label }) => {
  return (
    <button
      className=" text-white bg-secondary hover:bg-secondary2 duration-500 flex px-8 py-4 font-semibold rounded-md shadow-md items-center justify-center"
      onClick={onClick}
    >
      {" "}
      {label}
    </button>
  );
};

export default ButtonComponent;
