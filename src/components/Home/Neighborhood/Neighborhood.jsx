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
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className=" bg-primary ">
      <div style={bannerStyle}>
        <div className="md:max-w-7xl mx-auto md:py-20  grid md:grid-cols-1 lg:grid-cols-2">
          <div className="w-full mt-10 md:mt-0 px-5 md:mx-0 h-[180px] md:h-[280px] ">
            <img className="w-full h-full rounded-md" src={banner2} alt="" />
          </div>
          <div className="  py-10">
            <Heading className="text-white" label={"Find your neighborhood"} />
            <Paragraph
              className="text-white my-4"
              label={
                "Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse"
              }
            />
            <div className="flex mx-5 ">
              <input
                className="rounded-md rounded-r-none px-4 pr-1 md:pr-16"
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
