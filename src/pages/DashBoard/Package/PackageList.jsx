import React from "react";

import img from "../../../assets/image/carusol/img.jpg";
import img2 from "../../../assets/image/carusol/img2.jpg";
import img3 from "../../../assets/image/carusol/img3.jpg";
import img4 from "../../../assets/image/carusol/img4.jpg";
import img5 from "../../../assets/image/carusol/img5.jpg";
import PackageCard from "./PackageCard";

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

const PackageList = () => {
  return (
    <div className="md:max-w-7xl md:mx-auto  m-10  mb-14">
      <div className=" lg:ml-5 ">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <PackageCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageList;
