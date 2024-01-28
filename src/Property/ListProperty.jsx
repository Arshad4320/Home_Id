import React from "react";

import { Link } from "react-router-dom";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import ButtonComponent from "../components/Button/ButtonComponent";
const listUser = [
  {
    id: 1,
    type: "House",
    name: "Affordable Urban House",
    image: "profile1.jpg",
    status: "active",
    action: "edit",
  },
  {
    id: 2,
    type: "Apartment",
    name: "Affordable Urban House",
    image: "profile2.jpg",
    status: "inactive",
    action: "delete",
  },
  {
    id: 3,
    type: "Bangalore",
    name: "Home in Metric Way",
    image: "profile3.jpg",
    status: "active",
    action: "view",
  },
  {
    id: 4,
    type: "Share Flats",
    name: "Home in Metric Way",
    image: "profile4.jpg",
    status: "inactive",
    action: "edit",
  },
  {
    id: 5,
    type: "Flats",
    name: "Home in Metric Way",
    image: "profile5.jpg",
    status: "active",
    action: "delete",
  },
];
const ListProperty = () => {
  return (
    <div className=" m-10 ">
      <div className="flex justify-between mb-5">
        {" "}
        <Link to="/admin/dashboard/add-property">
          {" "}
          <ButtonComponent label={"Create New Property"} />{" "}
        </Link>
        <input
          className="border rounded-md outline-secondary text-xl px-3"
          placeholder="Search..."
        />
      </div>
      <div className="  bg-white p-5  overflow-scroll ">
        <table class="table-auto w-[1000px] md:w-full text-gray-600">
          <thead>
            <tr>
              <th className="p-2 border">No</th>
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Image</th>
              <th className="p-2 border">Status</th>{" "}
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {listUser?.map((user, i) => (
              <tr className="hover:bg-gray-200 duration-300" key={i}>
                <td className="p-2 border text-center">{user.id}</td>

                <td className="p-2 border text-center hover:bg-gray-100">
                  {user.type}
                </td>
                <td className="p-2 border text-center hover:bg-gray-100">
                  {user.name}
                </td>

                <td className="p-2 border text-center">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={user.image}
                    alt=""
                  />
                </td>

                <td className="p-2 border text-center">{user.status}</td>
                <td className="p-2 border text-center ">
                  <div className="flex items-center gap-2 justify-center p-2 rounded bg-secondary hover:bg-secondary2 text-white">
                    <Link to="/admin/dashboard/edit-user">
                      <BiSolidEdit />
                    </Link>
                    <RiDeleteBin6Line />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProperty;
