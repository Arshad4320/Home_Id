import { useForm } from "react-hook-form";

import React from "react";
import ButtonComponent from "../../components/Button/ButtonComponent";

const AddBooking = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className=" m-10 bg-white p-5">
      <p className="text-3xl font-semibold my-2">Create New Booking</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Client *
          </label>
          <select
            className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-3 duration-500 mt-2 font-semibold"
            {...register("client")}
            placeholder="Select Client"
          >
            <option>Arshad</option>
            <option>Lutfur Rahman</option>
            <option>Abu bakkor</option>
            <option>Rashel Mahmud</option>
            <option>Sultan Mahmud</option>
            <option>Kamrul Islam</option>
          </select>
        </div>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Package*
          </label>
          <select
            className="border w-full outline-secondary bg-gray-100 rounded-md
            px-2 py-3 duration-500 mt-2 font-semibold"
            {...register("name")}
            placeholder="Select Packeage"
          >
            <option>Premium</option>
            <option>Premium</option>
          </select>
        </div>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Monthly Rent*
          </label>
          <input
            className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-3 duration-500 mt-2 font-semibold"
            {...register("name")}
            placeholder="enter monthly rent"
          />
        </div>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Rent Start Date *
          </label>
          <input
            className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-3 duration-500 mt-2 font-semibold"
            {...register("name")}
            placeholder="rent date"
            type="date"
          />
        </div>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Rent End date*
          </label>
          <input
            className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-3 duration-500 mt-2 font-semibold"
            {...register("endData")}
            placeholder="Rent end date"
            type="date"
          />
        </div>
        <div className="flex justify-end p-3">
          <ButtonComponent label={"Create Booking"} type="submit" />
        </div>{" "}
      </form>
    </div>
  );
};

export default AddBooking;
