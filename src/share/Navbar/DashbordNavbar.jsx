/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import MobileNavber from "./MobileNavbar";

const DashBordNavbar = () => {
  return (
    <>
      <MobileNavber />
      <div className="hidden lg:block  border-b-2">
        <div className="max-w-7xl mx-auto flex justify-end p-3">
          <div className="flex items-center justify-center">
            <Link
              to="/signin"
              className="text-gray-700 font-semibold text-md p-3"
            >
              Admin
            </Link>
            <Link
              to="/signup"
              className="text-gray-700 font-semibold text-md p-3"
            >
              Admin
            </Link>
            <Link
              to="/signup"
              className="text-gray-700 font-semibold text-2xl p-3"
            >
              <IoMdNotificationsOutline />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBordNavbar;
