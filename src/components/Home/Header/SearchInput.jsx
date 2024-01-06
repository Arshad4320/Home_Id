/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { FiPlusCircle } from "react-icons/fi";
import { HiOutlineMinusCircle } from "react-icons/hi";
import { CgSearch } from "react-icons/cg";
import Select from "react-select";

import {
  allAreaOptions,
  allCitiesOptions,
  bathRoomOptions,
  bedRoomOptions,
} from "../../SelectOptions/Options";

const SearchInput = ({ open, setOpen }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="px-4">
      <form
        className=" mt-10  w-full  lg:hidden rounded-md bg-white "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" text-primary  rounded-md   flex justify-around items-center  md:mx-2">
          {" "}
          {open ? (
            <HiOutlineMinusCircle
              className="text-3xl font-bold text-primary mx-2"
              onClick={() => {
                setOpen(false);
              }}
            />
          ) : (
            <FiPlusCircle
              onClick={() => {
                setOpen(true);
              }}
              className="text-3xl font-bold text-primary mx-2"
            />
          )}
          <input
            className="outline-none rounded-md p-3 w-full  "
            placeholder="Search..."
            {...register("exampleRequired")}
          />
          <CgSearch className="text-3xl font-bold text-primary mx-2" />
        </div>
        {open && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2   p-6 transition-all duration-700 ease-in-out">
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
                      backgroundColor: state.isSelected ? "#0ec6d5" : "#fff",
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
                      backgroundColor: state.isSelected ? "#0ec6d5" : "#fff",
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
                      backgroundColor: state.isSelected ? "#0ec6d5" : "#fff",
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
                      backgroundColor: state.isSelected ? "#0ec6d5" : "#fff",
                      color: state.isSelected ? "#fff" : "#000",
                    }),
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6">
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
      </form>
    </div>
  );
};

export default SearchInput;
