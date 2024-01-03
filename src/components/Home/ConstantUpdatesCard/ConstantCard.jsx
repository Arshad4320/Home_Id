import Heading from "../../Heading/Heading";
import buyHome from "../../../assets/image/buyHome.jpg";
import sellHome from "../../../assets/image/sellHome.jpg";
import rentHome from "../../../assets/image/rentHome.jpg";

// const bannerStyle = {
//   backgroundImage: `url(${banner})`,
//   backgroundSize: "500px",
//   height: "430px",
//   backgroundRepeat: "no-repeat",
//   display: "flex",
//   backgroundPosition: "end",
//   flexDirection: "justify-content-end",
// };
const carts = [
  {
    id: 1,
    img: buyHome,
    name: "Buy a new Home",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium reiciendis ducimus! Voluptatibus, facere iste.",
  },
  {
    id: 1,
    img: sellHome,
    name: "Sell a Home",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium reiciendis ducimus! Voluptatibus, facere iste.",
  },
  {
    id: 1,
    img: rentHome,
    name: "Rent a home",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium reiciendis ducimus! Voluptatibus, facere iste.",
  },
];

const ConstantCard = () => {
  return (
    <div className="bg-green-50 mt-20">
      <div className="max-w-7xl mx-auto  py-10">
        <div className="max-w-2xl mx-auto">
          <Heading label="We have the most listings and constant updates. So you’ll never miss out." />
        </div>
        <div className="grid grid-col-1 gap-5 md:grid-cols-2 lg:grid-cols-3 py-10">
          {carts.map((cart) => {
            return (
              <div className=" py-8 " key={cart.id}>
                <div className="flex gap-1 justify-center shadow-md hover:shadow-xl bg-white rounded-md p-8">
                  <div className="h-20 w-full mt-4">
                    <img className="h-full w-full" src={cart.img} alt="" />
                  </div>
                  <div className="m-3">
                    <h3 className="text-2xl text-gray-800">{cart.name}</h3>
                    <p className=" text-gray-600 ">{cart.description}</p>
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

export default ConstantCard;
