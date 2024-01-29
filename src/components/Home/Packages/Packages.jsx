import Carusol from "../../Carusol/Carusol";
import Heading from "../../Heading/Heading";
import Paragraph from "../../paragraph/paragraph";
import Button from "../../Button/Button";
import img from "../../../assets/image/carusol/img.jpg";
import img2 from "../../../assets/image/carusol/img2.jpg";
import img3 from "../../../assets/image/carusol/img3.jpg";
import img4 from "../../../assets/image/carusol/img4.jpg";
import img5 from "../../../assets/image/carusol/img5.jpg";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    img: img,
    name: "Home Metric Way",
    location: "1421 San Pedro St,Los Angeles",
    packageName: "Basic",
    price: "$12.800",
  },
  {
    id: 2,
    img: img2,
    name: "Home Metric Way",
    location: "1421 San Pedro St,Los Angeles",
    packageName: "Premium",
    price: "$12.800",
  },
  {
    id: 3,
    img: img3,
    name: "Home Metric Way",
    location: "1421 San Pedro St,Los Angeles",
    packageName: "Standard",
    price: "$12.800",
  },
  {
    id: 4,
    img: img4,
    name: "Home Metric Way",
    location: "1421 San Pedro St,Los Angeles",
    packageName: "Premium",
    price: "$12.800",
  },
  {
    id: 5,
    img: img5,
    name: "Home Metric Way",
    location: "1421 San Pedro St,Los Angeles",
    packageName: "Standard",
    price: "$12.800",
  },
];
const Packages = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 mb-14 ">
      <div className="  md:flex  justify-between ">
        <Heading className={" mb-3 md:mb-0"} label={"Packages"} />
        <br />
        <Link to="/admin/dashboard/user/package-list">
          {" "}
          <Button className="" label="Seel All Package" />
        </Link>
      </div>
      <Paragraph
        label={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit"
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => {
          return (
            <div key={card.id} className="">
              <div className="relative group">
                <img className="rounded-t-md" src={card.img} alt="" />

                <div className="absolute inset-0 flex  items-end opacity-0 group-hover:opacity-50 group-hover:bg-black rounded-md transition duration-1000 ease-in-out">
                  <div className="text-white text-lg font-semibold p-3">
                    <div className="flex items-center justify-center gap-3">
                      <span>9</span>

                      <span>2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border rounded-b-md">
                <div className="flex gap-2 ">
                  <p className="text-lg font-semibold text-gray-700">
                    Property :
                  </p>{" "}
                  <p className="text-lg font-normal text-gray-500">
                    {card.name}
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="text-lg font-semibold text-gray-700">
                    Package :
                  </p>{" "}
                  <p className="text-lg font-normal text-gray-500">
                    {card.packageName}
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="font-semibold text-lg mb-1 text-gray-700">
                    Address :
                  </p>{" "}
                  <p className="font-normal text-lg mb-1 text-gray-500">
                    {card.location}
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="font-semibold text-lg mb-1 text-gray-700">
                    Deatils :
                  </p>{" "}
                  <p className="font-normal text-lg mb-1 text-gray-500">
                    {card.location}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <p className="font-bold text-lg mb-1 text-gray-700">
                      Booking :
                    </p>{" "}
                    <p className="font-bold text-lg mb-1 text-gray-500">
                      {card.price}
                    </p>
                  </div>
                  <Link to={`/single-package/${card.id}`}>
                    <div className="w-8 h-8 bg-sky-100 rounded-full border border-blue-950 flex items-center justify-center">
                      <IoIosHeartEmpty className="l text-blue-950" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Packages;
