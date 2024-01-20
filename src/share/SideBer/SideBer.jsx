import { Link } from "react-router-dom";
import logo from "../../assets/image/dashboardLogo.png";
import { IoSettingsOutline } from "react-icons/io5";
import { PiUsers } from "react-icons/pi";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { GrUserSettings } from "react-icons/gr";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { TfiPackage } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
const SideBer = () => {
  const [open, setOpen] = useState(false);
  const [agents, setAgents] = useState(false);
  const [invoice, setInvoice] = useState(false);
  return (
    <div className=" pl-8 h-screen fixed top-0     hidden lg:block">
      <div className=" py-6">
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className=" font-medium  py-8">
        <div className="mb-8 ">
          <h2 className="text-lg text-gray-400 uppercase mb-2">Main</h2>
          <Link
            className="text-gray-800 font-semibold hover:text-secondary duration-500 flex items-center gap-2 py-2"
            to="/admin/dashboard"
          >
            <IoSettingsOutline className="text-lg text-gray-500" /> DeashBoard
          </Link>
        </div>
        <div className="mb-5">
          <h2 className=" text-gray-400 text-lg uppercase mb-2">
            MANAGE LISTINGS
          </h2>
          <ul className="">
            <div className="text-gray-800 font-semibold w-fullhover:text-secondary duration-500 flex items-center gap-2 py-2 ">
              <PiUsers className="text-xl text-gray-500 hover:text-secondary" />

              <li className="flex items-center w-full justify-between ">
                Users{" "}
                <>
                  {!open ? (
                    <IoChevronUpSharp
                      onClick={() => {
                        setOpen(true);
                      }}
                    />
                  ) : (
                    <IoChevronDownSharp
                      className=""
                      onClick={() => {
                        setOpen(false);
                      }}
                    />
                  )}
                </>
              </li>
            </div>
            {/* User Dropdown  start */}
            {open && (
              <div className="ml-5  items-center w-full transition-all duration-1000 ease-in-out  ">
                <Link
                  className="text-gray-800 font-semibold hover:text-secondary duration-500 flex items-center gap-2 py-2"
                  to="/admin/dashboard/add-user"
                >
                  Add User
                </Link>
                <Link
                  className="text-gray-800 font-semibold hover:text-secondary duration-500 flex items-center gap-2 py-2"
                  to="/admin/dashboard/user-list"
                >
                  Users List
                </Link>
              </div>
            )}
            {/* User Dropdown  end */}
            <div className="text-gray-800 font-semibold hover:text-secondary duration-500 flex items-center gap-2 py-2">
              <GrUserSettings className="text-lg text-gray-500" />

              <li className="flex items-center w-full justify-between">
                Agents{" "}
                <>
                  {!agents ? (
                    <IoChevronUpSharp
                      onClick={() => {
                        setAgents(true);
                      }}
                    />
                  ) : (
                    <IoChevronDownSharp
                      className=""
                      onClick={() => {
                        setAgents(false);
                      }}
                    />
                  )}
                </>
              </li>
            </div>
            {/* Agents Dropdown  start*/}
            {agents && (
              <div className="ml-5  items-center w-full transition-all duration-1000 ease-in-out  ">
                <Link
                  className="text-gray-800 font-semibold hover:text-secondary duration-500 flex items-center gap-2 py-2"
                  to="/admin/dashboard/add-agent"
                >
                  Add Agents
                </Link>
                <Link
                  className="text-gray-800 font-semibold hover:text-secondary duration-500 flex items-center gap-2 py-2"
                  to="/admin/dashboard/agent-list"
                >
                  Agents List
                </Link>
              </div>
            )}
            {/* Agents Dropdown  end*/}
            <Link
              className="text-gray-800 font-semibold hover:text-secondary duration-500 flex items-center gap-2 py-2"
              to="/admin/dashboard"
            >
              <LiaFileInvoiceDollarSolid className="text-xl -ml-1 text-gray-500" />
              <li className="flex items-center w-full justify-between">
                Invoice{" "}
                <>
                  {!invoice ? (
                    <IoChevronUpSharp
                      onClick={() => {
                        setInvoice(true);
                      }}
                    />
                  ) : (
                    <IoChevronDownSharp
                      className=""
                      onClick={() => {
                        setInvoice(false);
                      }}
                    />
                  )}
                </>
              </li>
            </Link>
            {/* Invoice Dropdown start */}
            {invoice && (
              <div className="ml-5  items-center w-full transition-all duration-1000 ease-in-out  ">
                <Link
                  className="text-gray-800 font-semibold hover:text-secondary duration-500 flex items-center gap-2 py-2"
                  to="/admin/dashboard"
                >
                  Listing Invoice
                </Link>
                <Link
                  className="text-gray-800 font-semibold hover:text-secondary duration-500 flex items-center gap-2 py-2"
                  to="/admin/dashboard"
                >
                  Add New Invoice
                </Link>
                <Link
                  className="text-gray-800 font-semibold hover:text-secondary duration-500 flex items-center gap-2 py-2"
                  to="/admin/dashboard"
                >
                  Edit Invoice
                </Link>
                <Link
                  className="text-gray-800 font-semibold hover:text-secondary duration-500 flex items-center gap-2 py-2"
                  to="/admin/dashboard"
                >
                  Preview Invoice
                </Link>
              </div>
            )}
            {/* Invoice Dropdown end */}
          </ul>
        </div>
        <div className="mb-5">
          <h2 className="text-lg text-gray-400 uppercase mb-2 hover:text-secondary duration-500">
            MANAGE ACOUNT
          </h2>
          <ul>
            <Link className="text-gray-800 font-semibold hover:text-secondary duration-500 flex items-center gap-2 py-2">
              <TfiPackage className="text-lg text-gray-500" />

              <li>My package</li>
            </Link>
            <Link className="text-gray-800 font-semibold hover:text-secondary duration-500 flex items-center gap-2 py-2">
              <FaRegUser className="text-lg text-gray-500" />

              <li>My Profile</li>
            </Link>
            <Link className="text-gray-800 hover:text-secondary duration-500 font-semibold flex items-center gap-2 py-2">
              <FiLogOut className="text-lg text-gray-500" />
              <li>Log Out</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBer;
