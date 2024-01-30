import { useForm } from "react-hook-form";
import banner from "../../../assets/image/banner.jpg";
import Navbar from "./../../../share/Navbar/Navbar";
import SearchInput from "./SearchInput";
import ScrollNavbar from "../../../share/Navbar/ScrollNavbar";
import { useEffect, useState } from "react";
import MobileNavber from "../../../share/Navbar/MobileNavbar";
import { FiPlusCircle } from "react-icons/fi";
import { HiOutlineMinusCircle } from "react-icons/hi";
import { CgSearch } from "react-icons/cg";
import Select from "react-select";

import {
  allAreaOptions,
  allCitiesOptions,
  bathRoomOptions,
  bedRoomOptions,
  homeType,
} from "../../SelectOptions/Options";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const headerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    // height: `${open ? "900px" : "100%"}`,
    // height: "100%",
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // console.log(currentScrollY);

      if (currentScrollY > prevScrollY) {
        // Scrolling down
        setScrolling(true);
      } else {
        // Scrolling up
        setScrolling(false);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div style={headerStyle}>
        <Navbar />
        <ScrollNavbar show={scrolling} />
        <div className="flex items-center justify-center">
          <div className="py-28">
            <div className="sm:mt-20 md:mt-24 mx-4 md:mx-8  md:mx-18 md:text-center">
              {/* <p className="text-white font-medium text-2xl ">
                LET US GUIDE YOUR HOME
              </p> */}
              <h1 className="text-white font-semibold mt-4 md:mt-10  text-4xl sm:text-5xl md:text-6xl lg:text-7xl  ">
                FIND YOUR PLACE TO STAY
              </h1>
              {/* search section*/}
            </div>
            <SearchInput open={open} setOpen={setOpen} />
            <div className="max-w-7xl mx-auto mt-20 bg-white rounded-md hidden lg:block">
              <div>
                {/* <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-4 gap-5 px-7 ">
                    <div className="p-6">
                      <label
                        htmlFor=""
                        className="text-gray-500 font-semibold text-sm"
                      >
                        Home Type
                      </label>
                      <br />
                      <Select
                        {...register("example")}
                        options={homeType}
                        className="outline-none text-gray-600 mt-1"
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            height: "full",
                          }),
                          menu: (provided) => ({
                            ...provided,
                            height: "100%",
                          }),
                          option: (provided, state) => ({
                            ...provided,
                            backgroundColor: state.isSelected
                              ? "#0ec6d5"
                              : "#fff",
                            color: state.isSelected ? "#fff" : "#000",
                          }),
                        }}
                      />
                    </div>
                    <div className="p-5 ">
                      <label
                        htmlFor=""
                        className="text-gray-500 font-semibold text-sm"
                      >
                        SEARCH
                      </label>
                      <br />
                      <div className="flex items-center justify-center border border-gray-300 mt-1  rounded py-2 px-2">
                        <input
                          className="outline-none   "
                          placeholder="find something"
                          {...register("exampleRequired")}
                        />{" "}
                        <CgSearch className=" text-2xl text-gray-400 " />
                      </div>
                    </div>

                    <div className=" text-primary  hover:bg-blue-100 bg-blue-50 flex items-center justify-center">
                      {" "}
                      <div className="text-xl font-semibold flex items-center justify-center gap-2">
                        <p> Advance Search</p>
                        <div>
                          {open ? (
                            <HiOutlineMinusCircle
                              onClick={() => {
                                setOpen(false);
                              }}
                              className="text-3xl font-bold  transition-all  duration-700 ease-in-out"
                            />
                          ) : (
                            <FiPlusCircle
                              onClick={() => {
                                setOpen(true);
                              }}
                              className="text-3xl font-bold transition-all  duration-700 ease-in-out"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex justify-center">
                      <button className="py-4 px-14 bg-secondary hover:bg-secondary2 text-white text-xl font-semibold rounded-md">
                        Search
                      </button>
                    </div>
                  </div>
                  {open && (
                    <div>
                      <div className="grid grid-cols-4 gap-5  p-12 transition-all duration-700 ease-in-out">
                        <div>
                          <label
                            htmlFor=""
                            className="text-gray-500 font-semibold text-sm"
                          >
                            BEDROOMS
                          </label>
                          <br />
                          <Select
                            {...register("example")}
                            options={bedRoomOptions}
                            className="outline-none text-gray-600 mt-1"
                            styles={{
                              control: (provided) => ({
                                ...provided,
                                height: "full", // Set the height of the control
                              }),
                              menu: (provided) => ({
                                ...provided,
                                height: "100%", // Set the height of the menu
                              }),
                              option: (provided, state) => ({
                                ...provided,
                                backgroundColor: state.isSelected
                                  ? "#0ec6d5"
                                  : "#fff",
                                color: state.isSelected ? "#fff" : "#000",
                              }),
                            }}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor=""
                            className="text-gray-500 font-semibold text-sm"
                          >
                            BATHROOMS
                          </label>
                          <br />

                          <Select
                            {...register("example")}
                            options={bathRoomOptions}
                            className="outline-none text-gray-600 mt-1"
                            styles={{
                              control: (provided) => ({
                                ...provided,
                                height: "full",
                              }),
                              menu: (provided) => ({
                                ...provided,
                                height: "100%",
                              }),
                              option: (provided, state) => ({
                                ...provided,
                                backgroundColor: state.isSelected
                                  ? "#0ec6d5"
                                  : "#fff",
                                color: state.isSelected ? "#fff" : "#000",
                              }),
                            }}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor=""
                            className="text-gray-500 font-semibold text-sm"
                          >
                            ALL CITIES
                          </label>
                          <br />
                          <Select
                            {...register("example")}
                            options={allCitiesOptions}
                            className="outline-none text-gray-600 mt-1"
                            styles={{
                              control: (provided) => ({
                                ...provided,
                                height: "full", // Set the height of the control
                              }),
                              menu: (provided) => ({
                                ...provided,
                                height: "100%", // Set the height of the menu
                              }),
                              option: (provided, state) => ({
                                ...provided,
                                backgroundColor: state.isSelected
                                  ? "#0ec6d5"
                                  : "#fff",
                                color: state.isSelected ? "#fff" : "#000",
                              }),
                            }}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor=""
                            className="text-gray-500 font-semibold text-sm"
                          >
                            ALL AREAS
                          </label>
                          <br />
                          <Select
                            {...register("example")}
                            options={allAreaOptions}
                            className="outline-none text-gray-600 mt-1"
                            styles={{
                              control: (provided) => ({
                                ...provided,
                                height: "full", // Set the height of the control
                              }),
                              menu: (provided) => ({
                                ...provided,
                                height: "100%", // Set the height of the menu
                              }),
                              option: (provided, state) => ({
                                ...provided,
                                backgroundColor: state.isSelected
                                  ? "#0ec6d5"
                                  : "#fff",
                                color: state.isSelected ? "#fff" : "#000",
                              }),
                            }}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-5 px-12 py-4">
                        <div className="">
                          <label
                            htmlFor=""
                            className="text-gray-500 font-semibold text-sm"
                          >
                            PROPERTY ID
                          </label>
                          <br />
                          <div className=" border border-gray-300 mt-1  rounded py-2 px-2">
                            <input
                              className="outline-none   "
                              placeholder="Enter Id"
                              {...register("exampleRequired")}
                            />{" "}
                          </div>
                        </div>
                        <div className="">
                          <label
                            htmlFor=""
                            className="text-gray-500 font-semibold text-sm"
                          >
                            PROPERTY ID
                          </label>
                          <br />
                          <div className=" border border-gray-300 mt-1  rounded py-2 px-2">
                            <input
                              className="outline-none   "
                              placeholder="Enter Id"
                              {...register("exampleRequired")}
                            />{" "}
                          </div>
                        </div>
                        <div className="">
                          <label
                            htmlFor=""
                            className="text-gray-500 font-semibold text-sm"
                          >
                            PROPERTY ID
                          </label>
                          <br />
                          <div className=" border border-gray-300 mt-1  rounded py-2 px-2">
                            <input
                              className="outline-none   "
                              placeholder="Enter Id"
                              {...register("exampleRequired")}
                            />{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
