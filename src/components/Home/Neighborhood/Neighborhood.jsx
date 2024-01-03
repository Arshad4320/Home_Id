import banner from "../../../assets/image/banner.png";
import banner2 from "../../../assets/image/banner2.jpg";
// import banner3 from "../../../assets/image/banner2.png";
import Heading from "../../Heading/Heading";
import Paragraph from "./../../paragraph/paragraph";
import { IoSearch } from "react-icons/io5";

const Neighborhood = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "45%",
    height: "430px",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className=" bg-primary ">
      <div style={bannerStyle}>
        <div className="max-w-7xl mx-auto py-20  grid grid-cols-1 md:grid-cols-2 ">
          <div className="w-[550px] h-[280px] ">
            <img className="w-full h-full rounded-md" src={banner2} alt="" />
          </div>
          <div className="py-10">
            <Heading className="text-white" label={"Find your neighborhood"} />
            <Paragraph
              className="text-white my-4"
              label={
                "Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse"
              }
            />
            <div className="flex">
              <input
                className="rounded-md rounded-r-none px-4 pr-16"
                type="text"
                placeholder="Enter and address neighborhood "
              />
              <button className="bg-secondary px-7 py-3 rounded-l-none rounded-md text-white flex items-center justify-center">
                <IoSearch className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neighborhood;
