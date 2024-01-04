import Heading from "../../Heading/Heading";
import Paragraph from "./../../paragraph/paragraph";
import card from "./../../../assets/image/card.jpg";
import card2 from "./../../../assets/image/card2.jpg";
import card3 from "./../../../assets/image/card3.jpg";
import card4 from "./../../../assets/image/card4.jpg";
import card5 from "./../../../assets/image/card5.jpg";
const cards = [
  {
    id: 1,
    img: card,
    name: "New York",
    price: "From $40.000-90.000",
  },
  {
    id: 2,
    img: card2,
    name: "New York",
    price: "From $40.000-90.000",
  },
  {
    id: 3,
    img: card3,
    name: "New York",
    price: "From $40.000-90.000",
  },
  {
    id: 4,
    img: card4,
    name: "New York",
    price: "From $40.000-90.000",
  },
  {
    id: 5,
    img: card5,
    name: "New York",
    price: "From $40.000-90.000",
  },
];
const Destinations = () => {
  return (
    <div className="max-w-7xl  md:mx-auto pt-20 mb-14 ">
      <div>
        <Heading label={"Destinations We Love The Most"} />
        <Paragraph
          className={"my-7"}
          label={
            "Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit"
          }
        />
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:mx-5">
          {cards.map((card) => {
            return (
              <div className="relative group" key={card.id}>
                <div className="relative overflow-hidden">
                  <img
                    src={card.img}
                    alt=""
                    className="w-full h-auto transition-group  duration-1000 ease-in-out  group-hover:scale-125"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0  bg-black rounded-md transition duration-500 ease-in-out  opacity-40 "></div>
                  <div className="z-50 text-white absolute bottom-7 left-7 ">
                    <p className="text-xl font-bold">{card.name}</p>
                    <p className="font-semibold text-lg">{card.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
