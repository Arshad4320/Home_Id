import { Link } from "react-router-dom";
import logo from "../../assets/image/dashboardLogo.png";
import { IoSettingsOutline } from "react-icons/io5";
import { PiUsers } from "react-icons/pi";

import { GrUserSettings } from "react-icons/gr";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { TfiPackage } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
const SideBer = () => {
  return (
    <div className=" px-8 h-screen fixed top-0 hidden lg:block">
      <div className=" py-4">
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
            to="/admin/deashbord"
          >
            <IoSettingsOutline className="text-lg text-gray-500" /> DeashBoard
          </Link>
        </div>
        <div className="mb-5">
          <h2 className=" text-gray-400 text-lg uppercase mb-2">
            MANAGE LISTINGS
          </h2>
          <ul>
            <Link
              className="text-gray-800 font-semibold hover:text-secondary duration-500 flex items-center gap-2 py-2"
              to="/admin/deashbord"
            >
              <PiUsers className="text-xl text-gray-500 hover:text-secondary" />

              <li>Users</li>
            </Link>
            <Link
              className="text-gray-800 font-semibold hover:text-secondary duration-500 flex items-center gap-2 py-2"
              to="/admin/deashbord"
            >
              <GrUserSettings className="text-lg text-gray-500" />

              <li>Agents</li>
            </Link>
            <Link
              className="text-gray-800 font-semibold hover:text-secondary duration-500 flex items-center gap-2 py-2"
              to="/admin/deashbord"
            >
              <LiaFileInvoiceDollarSolid className="text-xl -ml-1 text-gray-500" />
              <li>Invoice</li>
            </Link>
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
