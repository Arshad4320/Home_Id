/* eslint-disable react/jsx-no-comment-textnodes */
// import Slider from "react-slick";
import img from "../../assets/image/carusol/img.jpg";
import img2 from "../../assets/image/carusol/img2.jpg";
import img3 from "../../assets/image/carusol/img3.jpg";
import img4 from "../../assets/image/carusol/img4.jpg";
import img5 from "../../assets/image/carusol/img5.jpg";

const cards = [
  {
    id: 1,
    img: img,
    name: "Home Metric Way",
    location: "1421 San Pedro St,Los Angeles",
    price: "$12.800",
  },
  {
    id: 2,
    img: img2,
    name: "Home Metric Way",
    location: "1421 San Pedro St,Los Angeles",
    price: "$12.800",
  },
  {
    id: 3,
    img: img3,
    name: "Home Metric Way",
    location: "1421 San Pedro St,Los Angeles",
    price: "$12.800",
  },
  {
    id: 4,
    img: img4,
    name: "Home Metric Way",
    location: "1421 San Pedro St,Los Angeles",
    price: "$12.800",
  },
  {
    id: 5,
    img: img5,
    name: "Home Metric Way",
    location: "1421 San Pedro St,Los Angeles",
    price: "$12.800",
  },
];

import React from "react";

import Slider from "react-slick";

import CarusolCard from "./CarusolCard";
import { Link } from "react-router-dom";

const Carusol = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "0 20px",
          centerMargin: " 20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "0 20px",
          centerMargin: " 20px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "110px",
        },
      },
    ],
  };
  const slider = React.useRef(null);

  return (
    <>
      <Slider className="mt-4" ref={slider} {...settings}>
        {cards.map((card) => (
          <Link to={`/package/${card.id}`}>
            <CarusolCard
              className=" !flex flex-col mx-auto justify-center items-center"
              key={card.id}
              card={card}
            />
          </Link>
        ))}
      </Slider>
    </>
  );
};

export default Carusol;
