import { useForm } from "react-hook-form";
import banner from "../../../assets/image/banner.jpg";
import Navbar from "./../../../share/Navbar/Navbar";

const Header = () => {
  const headerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    height: "700px",
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div style={headerStyle}>
        <Navbar className="" />
        <div className=" mt-24  text-center">
          <p className="text-white font-medium text-2xl">
            LET US GUIDE YOUR HOME
          </p>
          <h1 className="text-white font-semibold mt-10 text-7xl">
            Find Your Dream Home
          </h1>
          {/* search section*/}
        </div>
        <div className="max-w-7xl mx-auto mt-20 bg-white rounded-md">
          <div>
            <form
              className="grid grid-cols-4 gap-5 px-7"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="p-5">
                <label
                  htmlFor=""
                  className="text-gray-500 font-semibold text-sm"
                >
                  HOME TYPE
                </label>{" "}
                <br />
                <select
                  className="outline-none text-gray-600"
                  defaultValue="test"
                  {...register("example")}
                >
                  <option className=" " value="">
                    Single-Family Home
                  </option>
                  <option className="text-gray-600" value="">
                    Multi-Family Home
                  </option>
                  <option className="text-gray-600" value="">
                    Town House
                  </option>
                </select>
              </div>
              <div className="p-5 ">
                <label
                  htmlFor=""
                  className="text-gray-500 font-semibold text-sm"
                >
                  SEARCH
                </label>
                <br />
                <input
                  className="outline-none"
                  placeholder="find something"
                  {...register("exampleRequired")}
                />
              </div>

              <div className=" text-primary  hover:bg-blue-100 bg-blue-50 flex items-center justify-center">
                {" "}
                <p className="text-xl font-semibold">Advance Search</p>
              </div>
              <div className="p-6 flex justify-center">
                <button className="py-4 px-14 bg-secondary hover:bg-secondary2 text-white text-xl font-semibold rounded-md">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
