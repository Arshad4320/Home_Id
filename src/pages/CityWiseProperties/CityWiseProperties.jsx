import React from "react";
import { useParams } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoArrowSwitch } from "react-icons/go";
import { IoIosHeart } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import { useState } from "react";
import img from "../../assets/image/carusol/img.jpg";
import img2 from "../../assets/image/carusol/img2.jpg";
import img3 from "../../assets/image/carusol/img3.jpg";
import img4 from "../../assets/image/carusol/img4.jpg";
import img5 from "../../assets/image/carusol/img5.jpg";
import Heading from "../../components/Heading/Heading";
import { sortBy } from "../../components/SelectOptions/Options";
import Select from "react-select";
const cards = [
  {
    id: 1,
    img: img,
    name: "Home Metric Way",
    location: "1421 San Pedro St, Los Angeles",
    price: "$12.800",
  },
  {
    id: 2,
    img: img2,
    name: "Home Metric Way",
    location: "1421 San Pedro St, Los Angeles",
    price: "$12.800",
  },
  {
    id: 3,
    img: img3,
    name: "Home Metric Way",
    location: "1421 San Pedro St, Los Angeles",
    price: "$12.800",
  },
  {
    id: 4,
    img: img4,
    name: "Home Metric Way",
    location: "1421 San Pedro St, Los Angeles",
    price: "$12.800",
  },
  {
    id: 5,
    img: img5,
    name: "Home Metric Way",
    location: "1421 San Pedro St, Los Angeles",
    price: "$12.800",
  },
];

const CityWiseProperties = () => {
  const [heart, setHeart] = useState(false);
  const { id } = useParams();

  const singleData = cards.find((card) => card.id === parseInt(id));

  return (
    <div className="md:max-w-7xl md:mx-auto pt-20  mb-14 mx-5">
      <Heading label={"City Wise Properties"} />

      <div className="mt-8 lg:ml-5 ">
        <Select
          options={sortBy}
          className="outline-none text-gray-600 w-64"
          styles={{
            control: (provided) => ({
              ...provided,
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
        <div className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="">
            <div className="relative group ">
              <img className="rounded-t-md" src={singleData.img} alt="" />

              <div className="absolute inset-0 flex  items-end opacity-0 group-hover:opacity-50 group-hover:bg-black rounded-md transition duration-1000 ease-in-out">
                <div className="text-white text-lg font-semibold p-3">
                  <div className="flex items-center justify-center gap-3">
                    <span>9</span>
                    <FaPlayCircle />
                    <span>2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border border-b-0">
              <p className="text-lg font-semibold text-gray-800">
                {singleData.name}
              </p>
              <p className="font-semibold text-sm mb-1 text-gray-500">
                {singleData.location}
              </p>

              <div className="flex justify-between px-8 text-sm font-semibold p-3 text-gray-600">
                <span>3Br</span>
                <span>3Ba</span>
                <span>23sqFt</span>
                <span>1Gr</span>
              </div>
            </div>
            <div className="flex justify-between p-4 rounded-b-md border">
              <p className="font-bold text-lg text-gray-800">
                {singleData.price}
              </p>
              <div className="flex gap-2">
                <div className="text-gray-800 font-bold">
                  {heart ? (
                    <div className="bg-blue-100 rounded-full border border-gray-500 w-8 h-8 flex items-center justify-center">
                      <IoIosHeart onClick={() => setHeart(false)} />
                    </div>
                  ) : (
                    <div className="bg-blue-100 rounded-full border border-gray-500 w-8 h-8 flex items-center justify-center">
                      <IoIosHeartEmpty onClick={() => setHeart(true)} />
                    </div>
                  )}
                </div>
                <div className="bg-blue-100 rounded-full border border-gray-500 w-8 h-8 flex items-center justify-center">
                  <GoArrowSwitch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityWiseProperties;
