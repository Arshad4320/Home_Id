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
const PackageList = () => {
  return (
    <div className="max-w-7xl  pt-20 mb-14 mx-6 lg:mx-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => {
          return (
            <div key={card.id} className="">
              <div className="relative group">
                <img className="rounded-t-md" src={card.img} alt="" />

                <div className="absolute inset-0 flex  items-end opacity-0 group-hover:opacity-50 group-hover:bg-black rounded-md transition duration-1000 ease-in-out">
                  <div className="text-white  text-sm lg:text-lg font-normal p-3">
                    <div className="flex items-center justify-center gap-3">
                      <span>9</span>

                      <span>2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border rounded-b-md">
                <div className="flex gap-2 ">
                  <p className=" text-sm lg:text-lg font-normal text-gray-700">
                    Property :
                  </p>{" "}
                  <p className=" text-sm lg:text-lg font-normal text-gray-500">
                    {card.name}
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className=" text-sm lg:text-lg font-normal text-gray-700">
                    Package :
                  </p>{" "}
                  <p className=" text-sm lg:text-lg font-normal text-gray-500">
                    {card.packageName}
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="font-normal  text-sm lg:text-lg mb-1 text-gray-700">
                    Address :
                  </p>{" "}
                  <p className="font-normal  text-sm lg:text-lg mb-1 text-gray-500">
                    {card.location}
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="font-normal  text-sm lg:text-lg mb-1 text-gray-700">
                    Deatils :
                  </p>{" "}
                  <p className="font-normal  text-sm lg:text-lg mb-1 text-gray-500">
                    {card.location}
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="font-normal  text-sm lg:text-lg mb-1 text-gray-700">
                    Booking :
                  </p>{" "}
                  <p className="font-normal  text-sm lg:text-lg mb-1 text-gray-500">
                    {card.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PackageList;
