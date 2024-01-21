import React from "react";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { Link } from "react-router-dom";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const agentList = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    date: "2024-01-20",
    image: "profile1.jpg",
    status: "active",
    action: "edit",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    date: "2024-01-20",
    image: "profile2.jpg",
    status: "inactive",
    action: "delete",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "555-123-4567",
    date: "2024-01-20",
    image: "profile3.jpg",
    status: "active",
    action: "view",
  },
  {
    id: 4,
    name: "Bob Anderson",
    email: "bob.anderson@example.com",
    phone: "333-555-7777",
    date: "2024-01-20",
    image: "profile4.jpg",
    status: "inactive",
    action: "edit",
  },
  {
    id: 5,
    name: "Eva Williams",
    email: "eva.williams@example.com",
    phone: "111-222-3333",
    date: "2024-01-20",
    image: "profile5.jpg",
    status: "active",
    action: "delete",
  },
];
const AgentList = () => {
  return (
    <div className=" m-10 ">
      <div className="flex justify-between mb-5">
        {" "}
        <Link to="/admin/dashboard/add-agent">
          {" "}
          <ButtonComponent label={"Create New Agent"} />{" "}
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
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Image</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {agentList?.map((user, i) => (
              <tr className="hover:bg-gray-200 duration-300" key={i}>
                <td className="p-2 border text-center">{user.id}</td>

                <td className="p-2 border text-center hover:bg-gray-100">
                  {user.name}
                </td>
                <td className="p-2 border text-center">{user.email}</td>
                <td className="p-2 border text-center">{user.phone}</td>
                <td className="p-2 border text-center">{user.date}</td>
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
                    <Link to="/admin/dashboard/edit-agent">
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

export default AgentList;
