import React from "react";
import { GoHome } from "react-icons/go";

import { FiEye } from "react-icons/fi";
import { FaRegCommentDots, FaRegHeart } from "react-icons/fa";

const cardData = [
  {
    id: 1,
    image: <GoHome className="h-8 w-8 md:h-10 md:w-10 text-secondary" />,
    number: 120,
    description: "Properties",
  },
  {
    id: 2,
    image: <FiEye className="h-8 w-8 md:h-10 md:w-10 text-green-500" />,
    number: 120,
    description: "Total views",
  },
  {
    id: 3,
    image: (
      <FaRegCommentDots className="h-8 w-8 md:h-10 md:w-10 text-orange-500" />
    ),
    number: 120,
    description: "Total Visitor Reviews",
  },
  {
    id: 4,
    image: <FaRegHeart className="h-8 w-8 md:h-10 md:w-10 text-secondary" />,
    number: 120,
    description: "Total Favorites",
  },
];
const DeshboardProfile = () => {
  return (
    <div className="">
      <div className=" flex flex-col md:flex-row md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-gray-700">
            Welcome back, Ronald Hunter!
          </h3>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At iusto,
            laboriosam. Atque
          </p>
        </div>
        <div>
          <button className="bg-secondary mt-3 md:mt-0 hover:bg-secondary2 text-white rounded-md px-6 py-4  font-semibold flex gap-2 items-center ">
            Add New Property <GoHome className="text-2xl " />
          </button>
        </div>
      </div>
      {/* profile Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3 lg:mb-0 my-14">
        {cardData.map((item) => {
          return (
            <div
              className="flex shadow-sm justify-around bg-white py-10 rounded-md"
              key={item.id}
            >
              <div className="w-16 h-16 md:w-24 md:h-24  rounded-full  flex items-center justify-center bg-gray-100  border-2 ">
                {" "}
                {item.image}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl mb-2 text-center text-gray-500 font-semibld">
                  {item.number}
                </h1>{" "}
                <p className="text-gray-700 font-medium text-center">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DeshboardProfile;
