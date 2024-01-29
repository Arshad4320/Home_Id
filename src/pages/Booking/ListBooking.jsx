import React from "react";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { Link } from "react-router-dom";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const listUser = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    rentDate: "2024-02-01",
    endDate: "2024-03-01",

    packageName: "Standard",
    duration: "1 month",

    monthlyRent: 800,
    status: "Active",
    action: "View Details",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    rentDate: "2024-02-15",
    endDate: "2024-03-15",

    packageName: "Premium",
    duration: "3 months",

    monthlyRent: 1200,
    status: "Pending",
    action: "Approve",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "555-123-4567",
    rentDate: "2024-03-01",
    endDate: "2024-04-01",

    packageName: "Basic",
    duration: "2 months",

    monthlyRent: 600,
    status: "Inactive",
    action: "Activate",
  },
];

const ListBooking = () => {
  return (
    <div className=" m-10 ">
      <div className="flex justify-between mb-5">
        {" "}
        <Link to="/admin/dashboard/add-booking">
          {" "}
          <ButtonComponent label={"Add Booking"} />{" "}
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
              <th className="p-2 border">Client</th>
              <th className="p-2 border">Package Name</th>
              <th className="p-2 border">Duration</th>
              <th className="p-2 border">Montly Rent</th>
              <th className="p-2 border">Rent Date</th>
              <th className="p-2 border">Start Date</th>
              <th className="p-2 border">Status</th>{" "}
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {listUser?.map((user, i) => (
              <tr className="hover:bg-gray-200 duration-300" key={i}>
                <td className="p-2 border text-center">{user.id}</td>

                <td className="p-2 border text-justify hover:bg-gray-100">
                  <span> {user.name}</span>
                  <br />
                  <span> {user.email}</span>
                  <br />
                  <span> {user.phone}</span>
                  <br />
                </td>
                <td className="p-2 border text-center">{user.packageName}</td>
                <td className="p-2 border text-center">{user.duration}</td>
                <td className="p-2 border text-center">{user.monthlyRent}</td>
                <td className="p-2 border text-center">{user.rentDate}</td>
                <td className="p-2 border text-center">{user.endDate}</td>

                <td className="p-2 border text-center">{user.status}</td>
                <td className="p-2 border text-center ">
                  <div className="flex items-center gap-2 justify-center p-2 rounded bg-secondary hover:bg-secondary2 text-white">
                    <Link to="/admin/dashboard/edit-booking">
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

export default ListBooking;
