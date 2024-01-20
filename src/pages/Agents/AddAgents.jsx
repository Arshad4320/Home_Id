import { useForm } from "react-hook-form";

import React from "react";
import ButtonComponent from "../../components/Button/ButtonComponent";

const AddAgents = () => {
  const { register, handleSubmit, watch } = useForm();
  {
    /* <div className="flex justify-between ">
          {" "}
          <ButtonComponent label={"Create New User"} />{" "}
          <input
            className="border rounded-md outline-secondary text-xl px-3"
            placeholder="Search..."
          />
        </div> */
  }
  {
    /* form value */
  }
  const onSubmit = (data) => console.log(data);

  return (
    <div className=" m-10 bg-white p-5">
      <h3 className="font-semibold text-2xl text-gray-700 mb-3">
        Create New Agent
      </h3>
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
            Password*
          </label>
          <input
            className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
            {...register("name")}
            placeholder="Password"
          />
        </div>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Re-Enter Password*
          </label>
          <input
            className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
            {...register("name")}
            placeholder="Re-Enter Password"
          />
        </div>
        <div className="flex justify-end p-3">
          <ButtonComponent label={"Create New Agent"} type="submit" />
        </div>{" "}
      </form>
    </div>
  );
};

export default AddAgents;
