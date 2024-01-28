import React, { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoArrowSwitch } from "react-icons/go";
import { IoIosHeart } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
const PackageCard = ({ card }) => {
  const [heart, setHeart] = useState(false);
  return (
    <div className="">
      <div className="relative group ">
        <img className="rounded-t-md" src={card.img} alt="" />

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
      <div className="p-4 border border-b-0 bg-white rounded-b-md">
        <p className="text-lg font-semibold text-gray-800">
          <span className="text-secondary font-semibold"> Package Name : </span>
          {card.name}
        </p>
        <p className="font-semibold text-sm mb-1 text-gray-500">
          {card.location}
        </p>

        <div className="flex justify-between px-8 text-sm font-semibold p-3 text-gray-600">
          <span>3Br</span>
          <span>3Ba</span>
          <span>23sqFt</span>
          <span>1Gr</span>
        </div>

        <div className="flex justify-between p-4 rounded-b-md border">
          <p className="font-bold text-lg text-gray-800">
            Booking : {card.price}
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
  );
};

export default PackageCard;
