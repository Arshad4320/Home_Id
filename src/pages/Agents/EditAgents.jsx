import React from "react";
import { useForm } from "react-hook-form";
import { MdOutlineCloudUpload } from "react-icons/md";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

const EditAgents = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="m-4 lg:m-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="bg-white p-5 rounded-md">
        <div>
          <h3 className="text-3xl text-gray-700 font-medium mb-2">Photo</h3>
          <p className="font-medium text-gray-600">My Profile</p>
          <button className="duration-500 ease-in-out w-full  hover:bg-blue-800 text-white bg-primary flex my-5 px-8 py-4 font-semibold rounded-md shadow-md items-center justify-center">
            <MdOutlineCloudUpload className="text-2xl mr-2" /> Uploade Profile
            Image
          </button>
        </div>
        <div className="flex justify-between mx-5 my-5">
          <h3 className="text-3xl text-gray-700 font-medium">Proof Id</h3>
          <h3 className="text-3xl text-gray-700 font-medium">Proof Address</h3>
        </div>
      </div>
      <div className="  bg-white p-5 border rounded-md shadow-sm w-full ">
        <h2 className="text-2xl font-semibold mb-3">Agent detail</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="font-medium text-gray-700" htmlFor="name">
              Name *
            </label>
            <input
              className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
              {...register("name")}
              placeholder="Email"
            />
          </div>
          <div>
            <label className="font-medium text-gray-700" htmlFor="name">
              Email*
            </label>
            <input
              className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
              {...register("name")}
              placeholder="Password"
            />
          </div>
          <div>
            <label className="font-medium text-gray-700" htmlFor="name">
              Phone*
            </label>
            <input
              className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
              {...register("name")}
              placeholder="Password"
            />
          </div>
          <div>
            <label className="font-medium text-gray-700" htmlFor="name">
              Proof Id*
            </label>
            <input
              className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
              {...register("proofId")}
              placeholder="Proof Id"
              type="file"
            />
          </div>
          <div>
            <label className="font-medium text-gray-700" htmlFor="name">
              Proof Address*
            </label>
            <input
              className="border w-full  outline-secondary bg-gray-100 rounded-md px-2 py-4 duration-500 mt-2 font-semibold"
              {...register("name")}
              placeholder="Proof Id"
              type="file"
            />
          </div>
          <div>
            <ButtonComponent
              className={"w-full my-7"}
              label={"Update Profile"}
              type="submit"
            />
          </div>{" "}
        </form>
      </div>
    </div>
  );
};

export default EditAgents;
