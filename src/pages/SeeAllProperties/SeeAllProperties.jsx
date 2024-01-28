import React from "react";
import img from "../../assets/image/properties.jpg";
import Heading from "../../components/Heading/Heading";
import { FaPlayCircle } from "react-icons/fa";
import Select from "react-select";
import { RiMenu2Line } from "react-icons/ri";

import { sortBy } from "../../components/SelectOptions/Options";
import PropertiOptions from "../../components/PropertiOptions/PropertiOptions";
const allProperties = [
  {
    id: 1,
    name: "Lutfor Villa",
    title: "1421 San Pedro St, Los Angeles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    price: "£1.250.000",
    image: img,
  },
  {
    id: 1,
    name: "Lutfor Villa",
    title: "1421 San Pedro St, Los Angeles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    price: "£1.250.000",
    image: img,
  },
  {
    id: 1,
    name: "Lutfor Villa",
    title: "1421 San Pedro St, Los Angeles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    price: "£1.250.000",
    image: img,
  },
  {
    id: 1,
    name: "Lutfor Villa",
    title: "1421 San Pedro St, Los Angeles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    price: "£1.250.000",
    image: img,
  },
  {
    id: 1,
    name: "Lutfor Villa",
    title: "1421 San Pedro St, Los Angeles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    price: "£1.250.000",
    image: img,
  },
];

const SeeAllProperties = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 mb-14 ">
      <Heading label={"All Properties"} />
      <PropertiOptions />
      <div className="flex justify-between ml-5 py-14">
        <h3 className="font-semibold text-xl  text-gray-800">
          We found 45 properties available for you
        </h3>{" "}
        <div className="flex gap-2 items-center border-2 rounded-l">
          <RiMenu2Line className="text-2xl" />{" "}
          <span className="font-medium text-gray-600">Sort By </span>
          <Select
            options={sortBy}
            className="outline-none text-gray-600 "
            styles={{
              control: (provided) => ({
                ...provided,
                height: "full",
                width: "160px",
              }),
              menu: (provided) => ({
                ...provided,
                height: "100%",
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isSelected ? "#0ec6d5" : "#fff",
                color: state.isSelected ? "#fff" : "#000",
              }),
            }}
          />
        </div>
      </div>
      <div className="lg:ml-5 ">
        {allProperties.map((property) => {
          return (
            <div
              className="shadow-sm border hover:shadow-xl my-8 p-5 rounded-md"
              key={property.id}
            >
              <div className="flex gap-6  ">
                {/* image component */}
                <div className="relative group w-[30%]">
                  <div className="w-full h-[200px]">
                    <img
                      className="w-full h-full"
                      src={property.image}
                      alt=""
                    />
                  </div>

                  <div className="absolute inset-0 flex  items-end opacity-0 group-hover:opacity-40 group-hover:bg-black rounded-md transition duration-500 ease-in-out">
                    <div className="text-white text-lg font-semibold p-3">
                      <div className="flex items-center justify-center gap-3 ">
                        <span>9</span>
                        <FaPlayCircle />
                        <span>2</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* property Details */}
                <div className="w-[70%]">
                  <p className="text-xl font-semibold pb-3 text-gray-800 hover:text-secondary duration-500 ">
                    {property.name}
                  </p>
                  <p className="tex-lg text-gray-600 font-medium mb-2">
                    {property.title}
                  </p>
                  <p className="font-sm text-gray-500 mb-7 font-medium">
                    {property.description}
                  </p>
                  <div className="flex justify-between">
                    <div className="text-gray-500 font-semibold flex gap-10">
                      <span>3Br</span>
                      <span>3Ba</span>
                      <span>2300 Sq.Ft</span>
                      <span>1 Gr</span>
                      <span>2020</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-800">
                      {property.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeeAllProperties;
