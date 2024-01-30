import { useParams } from "react-router-dom";
import img from "../../assets/image/carusol/img.jpg";
import img2 from "../../assets/image/carusol/img2.jpg";
import img3 from "../../assets/image/carusol/img3.jpg";
import img4 from "../../assets/image/carusol/img4.jpg";
import img5 from "../../assets/image/carusol/img5.jpg";
import { useForm } from "react-hook-form";
import ButtonComponent from "../../components/Button/ButtonComponent";

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
const SinglePackage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  const { id } = useParams();
  const data = cards.find((card) => card.id === parseInt(id));

  return (
    <div className="max-w-7xl  pt-20 mb-14 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-5  gap-8">
        <div key={data.id} className="">
          <div className="flex justify-between mb-4">
            <p className=" font-bold text-4xl text-gray-800">
              {data.packageName}
            </p>

            <p className="font-bold text-3xl lg:text-4xl text-gray-800">
              {data.price}
            </p>
          </div>
          <div className="relative group">
            <img className="rounded-t-md" src={data.img} alt="" />

            <div className="absolute inset-0 flex  items-end opacity-0 group-hover:opacity-50 group-hover:bg-black rounded-md transition duration-1000 ease-in-out">
              <div className="text-white text-lg font-normal p-3">
                <div className="flex items-center justify-center gap-3">
                  <span>9</span>

                  <span>2</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border rounded-b-md">
            <div className="flex gap-2 ">
              <p className="text-lg font-normal text-gray-700">Property :</p>{" "}
              <p className="text-lg font-normal text-gray-500">{data.name}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-normal text-lg mb-1 text-gray-700">
                Address :
              </p>{" "}
              <p className="font-normal text-lg mb-1 text-gray-500">
                {data.location}
              </p>
            </div>
            <div className="flex gap-2">
              <p className="font-normal text-lg mb-1 text-gray-700">
                Deatils :
              </p>{" "}
              <p className="font-normal text-lg mb-1 text-gray-500">
                {data.location}
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xl text-secondary my-2">Booking Now</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="font-medium text-gray-700" htmlFor="name">
                Name *
              </label>
              <input
                className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
                {...register("name")}
                placeholder="Enter Your name"
              />
            </div>
            <div>
              <label className="font-medium text-gray-700" htmlFor="name">
                Email*
              </label>
              <input
                className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
                {...register("name")}
                placeholder="Email"
              />
            </div>
            <div>
              <label className="font-medium text-gray-700" htmlFor="name">
                Phone*
              </label>
              <input
                className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
                {...register("name")}
                placeholder="Phone"
              />
            </div>
            <div>
              <label className="font-medium text-gray-700" htmlFor="name">
                Start Date*
              </label>
              <input
                className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
                {...register("name")}
                placeholder="start date"
                type="date"
              />
            </div>
            <div>
              <label className="font-medium text-gray-700" htmlFor="name">
                End Date*
              </label>
              <input
                className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
                {...register("name")}
                placeholder="End Date"
                type="date"
              />
            </div>
            <div className=" py-3">
              <ButtonComponent
                className={"w-full"}
                label={"Booking"}
                type="submit"
              />
            </div>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SinglePackage;
