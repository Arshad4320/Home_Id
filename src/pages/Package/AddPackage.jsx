import { useForm } from "react-hook-form";

import React from "react";
import ButtonComponent from "../../components/Button/ButtonComponent";

const AddPackage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className=" m-10 bg-white p-5">
      <p className="text-3xl font-semibold my-3">Create New Package</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Type *
          </label>
          <input
            className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
            {...register("name")}
            placeholder="Enter Type"
          />
        </div>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Property*
          </label>
          <input
            className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
            {...register("property")}
            placeholder="property"
          />
        </div>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Package Name*
          </label>
          <input
            className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
            {...register("name")}
            placeholder="Package Name"
          />
        </div>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Address *
          </label>
          <input
            className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
            {...register("name")}
            placeholder="Password"
          />
        </div>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Booking Money *
          </label>
          <input
            className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
            {...register("name")}
            placeholder="Re-Enter Password"
          />
        </div>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Package Photo *
          </label>
          <input
            className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
            {...register("name")}
            placeholder="Re-Enter Password"
            type="file"
          />
        </div>
        <div className="flex justify-end p-3">
          <ButtonComponent label={"Create New package"} type="submit" />
        </div>{" "}
      </form>
    </div>
  );
};

export default AddPackage;
