import { useForm } from "react-hook-form";

import React from "react";
import ButtonComponent from "../../components/Button/ButtonComponent";
import Header from "../../components/Home/Header/Header";
import Heading from "../../components/Heading/Heading";

const AddType = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className=" m-10 bg-white p-5">
      <p className="text-4xl font-semibold py-4">Add New Type</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Type Name*
          </label>
          <input
            className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
            {...register("type name")}
            placeholder="Enter Your name"
          />
        </div>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Type Image*
          </label>
          <input
            className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
            {...register("type name")}
            placeholder="Enter Your name"
            type="file"
          />
        </div>
        <div className="flex justify-end p-3">
          <ButtonComponent label={"Create New Type"} type="submit" />
        </div>{" "}
      </form>
    </div>
  );
};

export default AddType;
